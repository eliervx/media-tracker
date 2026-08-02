// types/media.ts

export interface IProvider {
  id: number;
  name: string;
  logoUrl: string | null;
}

// Représente la table pivot MediaProvider qui inclut le Provider
export interface IMediaProvider {
  id: number;
  url: string;
  type : 'subscription' | 'rent' | 'buy' | 'addon'
  mediaId: number;
  providerId: number;
  provider: IProvider; // Inclus via ton include: { provider: true }
  audios: String[]; 
  subtitles: String[];
}

// Représente l'objet global Media avec toutes ses relations
export interface IMedia {
  id: number;
  title: string;
  description : string;
  type: 'FILM' | 'SERIE'; // Autant typer proprement les deux valeurs possibles
  createdAt: string;       // Reçu sous forme de string JSON (ISO Date)
  lastUpdate : string;
  releaseDate: string | null;
  posterPath: string | null;
  providers: IMediaProvider[]; // Inclus via providers: { include: ... }
}

// C'EST CETTE INTERFACE QUE RENVOIE TA REQUÊTE 'findAllUserMedia'
export interface IUserMediaResponse {
  id: number;
  status: 'A_VOIR' | 'VU' | 'EN_COURS'; // Tes différents statuts
  addedAt: string;
  lastUpdate: string;
  userId: number;
  mediaId: number;
  media: IMedia; // Inclus via media: { include: ... }
}