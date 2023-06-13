"use server";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import { title } from "process";

export async function createTodo(data: FormData) {
	// console.log("HI", data.get("title"));
	const title = data.get("title");
	if (typeof title !== "string" || title.length === 0) {
		throw new Error("invalid title");
	}
	await prisma.todo.create({ data: { title, complete: false } });
	redirect("/");
}
