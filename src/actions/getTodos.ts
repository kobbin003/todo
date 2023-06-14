"use server";
import { prisma } from "@/db";

export async function getTodo() {
	const todos = await prisma.todo.findMany();
	return todos;
}
