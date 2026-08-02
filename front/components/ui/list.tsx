import * as React from "react"
import { cn } from "@/lib/utils"
import { IMediaProvider } from "@/types/media"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface ListProvidersProps extends React.ComponentProps<"div"> {
    children?: React.ReactNode;
    lines?: number; // Permet de personnaliser le nombre de lignes (par défaut 3)
    providers: IMediaProvider[];
}

function ListProviders({
    className,
    children,
    lines = 3,
    providers,
    ...props
}: ListProvidersProps) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [providersDisplay, setProviders] = React.useState<IMediaProvider[]>([]);

    React.useEffect(() => {
        if (isExpanded) {
            setProviders(providers)
        }
        else {
            const newProviders = providers.slice(0, 3);
            setProviders(newProviders)
        }
    }, [isExpanded]);

    /**
     * Convertit un code de langue à 3 lettres (ex: 'fra', 'eng') ou 2 lettres (ex: 'fr', 'en')
     * en son nom complet lisible.
     * 
     * @param code - Le code ISO de la langue (ex: "fra", "eng", "deu")
     * @param displayLocale - La langue d'affichage souhaitée pour le résultat (par défaut 'fr')
     * @returns Le nom de la langue capitalisé (ex: "Français") ou le code brut en fallback
     */
    function getLanguageName(code: String, displayLocale: string = 'fr'): String {
    if (!code) return '';

    const cleanCode = code.trim().toLowerCase();

    try {
        // API native des navigateurs pour la traduction des noms de langues
        const formatter = new Intl.DisplayNames([displayLocale], { type: 'language' });
        const name = formatter.of(cleanCode);

        if (name) {
        // Met la première lettre en majuscule (ex: "français" -> "Français")
        return name.charAt(0).toUpperCase() + name.slice(1);
        }
    } catch (error) {
        return code;
    }

    // Fallback si le code n'est pas reconnu : renvoie le code nettoyé en majuscules
    return cleanCode.toUpperCase();
    }

    // Détermine la classe Tailwind de limitation selon le nombre de lignes souhaité
    const clampClass = {
        1: "line-clamp-1",
        2: "line-clamp-2",
        3: "line-clamp-3",
        4: "line-clamp-4",
        5: "line-clamp-5",
    }[lines] || "line-clamp-3";

    return (
        <div data-slot="card-description"
            className={cn("space-y-2 transition-all", !isExpanded && clampClass, className)}
            {...props}>
            <p className="text-lg font-semibold">Sites de streaming</p>
            <ul className={`flex flex-wrap gap-2 ${isExpanded ? '' : 'line-clamp-2'}`}>
                {providersDisplay.map((item: IMediaProvider) => (
                    <AlertDialog key={item.provider.name}>
                        <AlertDialogTrigger render={<Button variant="outline">{item.provider.name}</Button>} />
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Information sur {item.provider.name}</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Audios : {item.audios.map((audio) => (` ${getLanguageName(audio)},`))}
                                    <br /><br />Sous-titres : {item.subtitles.map((subtitle) => (` ${getLanguageName(subtitle)},`))}
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Retour</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                ))}
            </ul>

            {/* Bouton toggle uniquement si la liste est potentiellement longue */}
            {providers.length > 3 && (
                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-xs text-blue-300 hover:underline font-medium mt-1 focus:outline-none shrink-0"
                >
                    {isExpanded ? 'Voir moins' : 'Voir plus'}
                </button>
            )}
        </div>
    );
}

export {
    ListProviders
}