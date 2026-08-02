import { useEffect, useState } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardGroup,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import MovieSearch from './movieSearch';
import { IUserMediaResponse, IProvider, IMediaProvider } from '@/types/media';
import { Button } from '@/components/ui/button';
import { Bubble, BubbleContent } from './ui/bubble';
import { ListProviders } from './ui/list';

type BubbleVariant = "a_voir" | "vu" | "en_cours";

export default function MediaList() {
	const [medias, setMedias] = useState<IUserMediaResponse[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		fetchUpdatedMedias()
	}, []);

	const fetchUpdatedMedias = async () => {
		setError(null)
		const token = localStorage.getItem('token');
		const res = await fetch('http://localhost:3000/api/medias', {
			headers: { 'Authorization': `Bearer ${token}` }
		});
		const updatedData = await res.json();
		setMedias(updatedData);
		if (updatedData.length < 1) {
			setError("Votre bibliothèque est actuellement vide")
		}
	};

	const setStatus = async (idMediaUser: number, status: 'A_VOIR' | 'VU' | 'EN_COURS') => {
		const token = localStorage.getItem('token');
		fetch('http://localhost:3000/api/medias/setStatus', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				id: idMediaUser,
				status: status,
			})
		})
			.then((res) => {
				if (!res.ok) throw new Error('Erreur lors de la modification du status');
				fetchUpdatedMedias()
			})
			.catch((err) => setError(err.message));

	};

	const deleteMediaUser = async (idMedia: number) => {
		const token = localStorage.getItem('token');
		fetch('http://localhost:3000/api/medias/delete/' + idMedia, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
		})
			.then((res) => {
				if (!res.ok) throw new Error('Erreur lors de la suppression');
				fetchUpdatedMedias()
			})
			.catch((err) => setError(err.message));

	};

	return (
		<div>
			<MovieSearch medias={medias} setMedias={setMedias} fetchUpdatedMedias={fetchUpdatedMedias}></MovieSearch>

			<h2 className="font-['Impact',_fantasy] text-4xl text-center mb-3 uppercase tracking-wide">Ma Bibliothèque</h2>
			{error && <p style={{ color: 'red' }}>⚠️ {error}</p>}



			<CardGroup>
				{medias.map((item) => (
					<Card
						key={item.media.id}
						className="w-full max-w-md bg-cover bg-center bg-no-repeat relative overflow-hidden text-white flex flex-col justify-end"
						style={{
							backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0) 100%), url("https://image.tmdb.org/t/p/w780${item.media.posterPath}")`,
							height: "600px",
						}}
					>
						{/* z-10 assure que le contenu reste au-dessus du dégradé */}
						<div className="z-10 p-6 space-y-4">
							{/* Titre en bas, grand et blanc */}
							<CardHeader className="p-0">
								<div className='flex'>
									<Bubble variant={item.status.toLowerCase() as BubbleVariant}>
										<BubbleContent className="text-xs">{item.status.replace("_", " ")}</BubbleContent>
									</Bubble>

									{new Date().getTime() - new Date(item.media.lastUpdate).getTime() <= 7 * 24 * 3600 * 1000 ?
										<Bubble className="ml-4" variant="nouveau">
											<BubbleContent className="text-xs">NOUVEAU</BubbleContent>
										</Bubble> : ""}
								</div>
								<CardTitle className="text-3xl font-bold">{item.media.title}</CardTitle>
							</CardHeader>

							{/* Description et Providers */}
							<CardContent className="p-0 space-y-4">
								{/* On enlève 'text-muted-foreground' pour qu'il soit blanc */}
								<CardDescription className="text-white/80">
									{item.media.description ? item.media.description : ""}
								</CardDescription>

								{item.media.providers.length > 0 ? (
									<ListProviders providers={item.media.providers} />
								) : (
									<p className="text-sm text-white/70 italic">Non disponible en streaming</p>
								)}
							</CardContent>
							<CardFooter>
								{
									item.status === "A_VOIR" ?
										<Button className="mr-3" variant="outline"
											onClick={() => setStatus(item.id, "VU")}>
											Marqué comme vu
										</Button>
										:
										<Button className="mr-3" variant="outline"
											onClick={() => setStatus(item.id, "A_VOIR")}>
											Marqué comme à voir
										</Button>
								}

								<Button
									variant="destructive"
									onClick={() => deleteMediaUser(item.media.id)}
								>
									Retirer
								</Button>
							</CardFooter>
						</div>
					</Card>
				))}
			</CardGroup>
		</div>
	);
}