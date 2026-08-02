'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';


// Définition du type des props reçues par le Header
interface HeaderProps {
	connectedUser: string | null;
	onLogout: () => void;
}

export default function Header({ connectedUser, onLogout }: HeaderProps) {	
	return (
		<header className="flex justify-between items-center mb-10 w-full">
			<h1 className="font-stencil text-3xl font-bold m-0">Media Tracker</h1>

			{connectedUser && (
				<div className="flex items-center gap-4">
					<span className="text-sm font-medium">
						Connecté en tant que <strong>{connectedUser}</strong>
					</span>
					<Button onClick={onLogout} variant="secondary">
						Se déconnecter
					</Button>
				</div>
			)}
		</header>
	);
}