'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MediaList from '@/components/mediaList';
import Header from '../components/header';

export default function HomePage() {
	const router = useRouter();

	// État local pour retenir si l'utilisateur est connecté et quel est son pseudo
	const [connectedUser, setConnectedUser] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// Ce useEffect s'exécute uniquement après le rendu du composant dans le navigateur (côté client)
	useEffect(() => {
		const token = localStorage.getItem('token');
		const username = localStorage.getItem('username');

		if (token && username) {
			setConnectedUser(username);
			setLoading(false);
		}

		else {
			router.replace('/login')
		}
	}, [router]);

	// Action de déconnexion définie dans le parent
	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		setConnectedUser(null); // Met à jour l'état du parent -> re-rendu instantané du Header et de la page
		router.replace('/login')
	};

	if (loading) {
		return (
		<div className="flex items-center justify-center min-h-screen">
			<p>Vérification de la connexion...</p>
		</div>
		);
	}

	

	return (
		<div style={{ padding: '40px', width: '100%', margin: '0 0', fontFamily: 'sans-serif' }}>

			<Header connectedUser={connectedUser} onLogout={handleLogout} />
			<MediaList />

			{/* Retours utilisateur (Erreurs / Succès) */}
            {error && (
              <div className="p-3 text-sm rounded bg-destructive/15 text-destructive font-medium">
                ⚠️ {error}
              </div>
            )}
		</div>
	);
}