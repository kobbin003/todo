"use server";

import { prisma } from "@/db";

export async function removeTodos(id: string) {
	await prisma.todo.delete({ where: { id } });
}
