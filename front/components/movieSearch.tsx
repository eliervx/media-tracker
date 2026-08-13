'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import {
	CardGroup,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { IUserMediaResponse, IProvider, IMediaProvider } from '@/types/media';


// 1. On définit la structure d'un film renvoyé par TMDB
interface TMDBMovie {
	id: number;
	title?: string;
	name?: string;
	first_air_date?: string;
	release_date?: string;
	poster_path?: string;
	overview: string;
}

// Définition du type des props reçues par le Header
interface MediaListProp {
	medias: IUserMediaResponse[] | null;
	setMedias: any;
	fetchUpdatedMedias: () => Promise<void>;
}

const items = [
	{ label: "Film", value: "movie" },
	{ label: "Serie", value: "tv" },
]

export default function MovieSearch({ medias, setMedias, fetchUpdatedMedias }: MediaListProp) {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState<TMDBMovie[]>([]);
	const [loading, setLoading] = useState(false);
	const [adding, setAdding] = useState(false);
	const [isHidden, setIsHidden] = useState<boolean>(false);
	const [type, setType] = useState<string | null>("movie")

	// 2. useEffect qui se déclenche à chaque fois que 'query' (la recherche) change
	useEffect(() => {
		const token = localStorage.getItem('token');
		// Si l'utilisateur a tapé moins de 3 caractères, on vide les résultats
		if (query.trim().length < 3) {
			setResults([]);
			return;
		}

		const searchMovies = async (type: string = "movie") => {
			setLoading(true);
			try {
				const response = await fetch(`/api/medias/search?query=${encodeURIComponent(query)}&type=${encodeURIComponent(type)}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${token}`
					},
				});

				if (!response.ok) {
					const errorData = await response.json();
					alert(errorData.message || "Erreur lors de la recherche");
					return;
				}

				const data = await response.json()

				setResults(data.results || [])

			} catch (err) {
				console.error(err);
			}
			finally {
				setLoading(false);
			}


			const handleGlobalClick = (event: MouseEvent) => {

				const target = event.target as HTMLElement | null;
				if (target) {
					const isInsideSearchList = target.closest('#searchList') !== null;
					if (target.id === "searchInput") {
						setIsHidden(false);
					}

					else if (
						target.closest('#selectType') !== null ||
						target.closest('[data-radix-select-viewport]') !== null ||
						target.closest('[role="option"]') !== null
					) {
						setIsHidden(false);
					}

					else if (!isInsideSearchList) {
						setIsHidden(true);
					}
				}

			};

			window.addEventListener('click', handleGlobalClick);

			return () => {
				window.removeEventListener('click', handleGlobalClick);
			}

		};

		// Petit système de "debounce" pour éviter de surcharger l'API à chaque lettre tapée
		const delayDebounceFn = setTimeout(() => {
			const movieType = type || "movie"
			searchMovies(movieType);
		}, 400); // Attend 400ms sans taper avant de lancer la requête

		return () => clearTimeout(delayDebounceFn);
	}, [query, type]);

	// 3. Fonction pour gérer le clic sur un film et l'ajouter à ta bdd via ton API NestJS
	const handleAddMedia = async (movie: TMDBMovie) => {
		setLoading(true);
		setAdding(true);
		const token = localStorage.getItem('token');

		const movieType = type === "movie" ? "FILM" : "SERIE"
		const title = type === "movie" ? movie.title : movie.name
		const releaseDate = type === "movie" ? movie.release_date : movie.first_air_date

		try {
			const response = await fetch('/api/medias/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify({
					id: movie.id,
					title: title,
					type: movieType,
					posterPath: movie.poster_path,
					releaseDate: releaseDate,
					description: movie.overview
				})
			});

			if (!response.ok) {
				const errorData = await response.json();
				alert(errorData.message || "Erreur lors de l'ajout");
				return;
			}

			await fetchUpdatedMedias();

		} catch (err) {
			console.error(err);
		}
		finally {
			setLoading(false);
			setAdding(false);
		}
	};

	return (
		<div className="w-3/5 p-4">
			<Select
				id="selectType"
				items={items}
				value={type}
				onValueChange={(value) => {
					console.log("Nouvelle valeur sélectionnée :", value);
					setType(value)
					setResults([])
				}}>
				<SelectTrigger className="w-full max-w-48">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{items.map((item) => (
							<SelectItem key={item.value} value={item.value}>
								{item.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			{/* Barre de recherche */}
			<input
				id="searchInput"
				type="text"
				placeholder={type === "movie" ? "Rechercher un film (ex: Inception...)" : "Rechercher une série (ex: Blacklist...)"}
				value={query}
				onClick={() => setIsHidden(false)}
				onChange={(e) => setQuery(e.target.value)}
				className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>

			{loading && !adding && <p className="text-sm text-gray-500 mt-2">Recherche en cours...</p>}
			{loading && adding && <p className="text-sm text-gray-500 mt-2">Ajout en cours...</p>}

			{/* Liste des résultats */}
			<CardGroup className='md:grid-cols-3' hidden={isHidden}>
				{results.map((movie) => (
					<Card
						key={movie.id}
						className="w-full max-w-md bg-cover bg-center bg-no-repeat relative overflow-hidden text-white flex flex-col justify-end"
						style={{
							backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0) 100%), url("https://image.tmdb.org/t/p/w780${movie.poster_path}")`,
							height: "600px",
						}}
					>
						{/* z-10 assure que le contenu reste au-dessus du dégradé */}
						<div className="z-10 p-6 space-y-4">
							{/* Titre en bas, grand et blanc */}
							<CardHeader className="p-0">
								<CardTitle className="text-3xl font-bold">
									{type === "movie" ? movie.title : movie.name}
								</CardTitle>
							</CardHeader>

							{/* Description et Providers */}
							<CardContent className="p-0 space-y-4">
								{/* On enlève 'text-muted-foreground' pour qu'il soit blanc */}
								{movie.release_date || movie.first_air_date ?
									<p className="text-xs text-gray-400">{(type === "movie" ? movie.release_date : movie.first_air_date)?.split('-')[0]}</p> : ""}
								<CardDescription className="text-white/80">
									{movie.overview}
								</CardDescription>
							</CardContent>
							<CardFooter>
								<Button onClick={() => handleAddMedia(movie)}>
									Ajouter
								</Button>
							</CardFooter>
						</div>
					</Card>
				))}
			</CardGroup>
		</div>
	);
}