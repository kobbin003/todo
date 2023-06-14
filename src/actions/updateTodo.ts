"use server";

import { prisma } from "@/db";

export async function updateTodo(params: { id: string; complete: boolean }) {
	await prisma.todo.update({
		where: { id: params.id },
		data: {
			// {completed: !(params.completed)}
			complete: params.complete,
		},
	});
}
