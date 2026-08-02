'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitEvent } from 'react';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();

  // États pour stocker ce que l'utilisateur écrit
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // États de gestion de l'UI
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Fonction de soumission du formulaire (avec le bon typage React)
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const endpoint = isLoginMode ? 'login' : 'signup';
    const url = `http://localhost:3000/api/auth/${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue.');
      }

      if (isLoginMode) {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('username', data.username);
        router.push('/');
      } else {
        setSuccess("Compte créé avec succès ! Connecte-toi maintenant.");
        setIsLoginMode(true);
        setPassword('');
      }

    } catch (err: any) {
      setError(err.message || "Impossible de joindre le serveur d'authentification.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        
        {/* En-tête de la Card avec notre sélecteur d'onglets */}
        <CardHeader className="space-y-4">
          <div className="flex justify-around border-b pb-2">
            <button
              type="button"
              onClick={() => { setIsLoginMode(true); setError(null); }}
              className={`text-lg pb-2 transition-all cursor-pointer ${
                isLoginMode 
                  ? 'font-bold border-b-2 border-primary text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Connexion
            </button>
            <button
              type="button"
              onClick={() => { setIsLoginMode(false); setError(null); }}
              className={`text-lg pb-2 transition-all cursor-pointer ${
                !isLoginMode 
                  ? 'font-bold border-b-2 border-primary text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              S'inscrire
            </button>
          </div>
          
          <CardTitle className="text-2xl font-bold text-center">
            {isLoginMode ? 'Ravi de te revoir !' : 'Rejoins Media Tracker'}
          </CardTitle>
          <CardDescription className="text-center">
            {isLoginMode 
              ? 'Connecte-toi pour gérer ta bibliothèque de médias.' 
              : 'Crée un compte pour commencer à suivre tes films et séries.'}
          </CardDescription>
        </CardHeader>

        {/* Formulaire imbriqué dans les composants Card */}
        
        <CardContent className="space-y-4">
          <form id="auth-form" onSubmit={handleSubmit}>
            
            {/* Champ Nom d'utilisateur */}
            <div className="space-y-2">
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <Input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ex: eravoux"
                disabled={isLoading}
              />
            </div>

            {/* Champ Mot de passe */}
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                disabled={isLoading}
              />
            </div>

            {/* Retours utilisateur (Erreurs / Succès) */}
            {error && (
              <div className="p-3 text-sm rounded bg-destructive/15 text-destructive font-medium">
                ⚠️ {error}
              </div>
            )}
            {success && (
              <div className="p-3 text-sm rounded bg-green-500/15 text-green-600 font-medium dark:text-green-400">
                ✅ {success}
              </div>
            )}
            </form>
        </CardContent>

        <CardFooter>
          <Button 
            type="submit" 
            form="auth-form"
            className="w-full font-bold" 
            disabled={isLoading}
          >
            {isLoading 
              ? 'Chargement...' 
              : (isLoginMode ? 'Se connecter' : 'Créer mon compte')}
          </Button>
        </CardFooter>
        

      </Card>
    </div>
  );
}