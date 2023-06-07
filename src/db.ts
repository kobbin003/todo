import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
	prisma: PrismaClient | undefined;
};

export const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log: ["query"],
	});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

//* By including log: ["query"] in the Prisma client configuration,
//* you can see the SQL queries generated by Prisma in your application's logs
//* when running in the specified environment.