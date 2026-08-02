import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import * as bcrypt from 'bcrypt';

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
	console.log('🌱 Début du seeding...');

	// 1. Hacher le mot de passe par défaut
	const defaultPassword = 'admin';
	const hashedPassword = await bcrypt.hash(defaultPassword, 10);

	// 2. Créer l'utilisateur s'il n'existe pas déjà (upsert)
	const defaultUser = await prisma.user.upsert({
		where: { username: "admin" }, // Condition de recherche
		update: {}, // Si l'utilisateur existe déjà, on ne modifie rien
		create: {
			username: "admin",
			password: hashedPassword,
		},
	});

	console.log(`✅ Utilisateur par défaut créé : ${defaultUser.username}`);
	console.log('🌱 Seeding terminé avec succès !');

}

main()
	.catch((e) => {
		console.error('❌ Erreur lors du seeding :', e);
		process.exit(1);
	})
	.finally(async () => {
		// Très important : fermer la connexion à la base de données
		await prisma.$disconnect();
	});