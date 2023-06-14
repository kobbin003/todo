// "use client";
import { prisma } from "@/db";
import { getTodo } from "@/actions/getTodos";
import TodoItem from "@/components/TodoItem";
import Image from "next/image";
import Link from "next/link";
// function getTodos() {
// 	return prisma.todo.findMany();
// }
export default async function Home() {
	const todos = await getTodo();
	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-2xl">Todos</h1>
				<Link
					href="/new"
					className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700"
				>
					new
				</Link>
			</header>
			<ul className="pl-4">
				{todos.map((todo) => {
					return <TodoItem todo={todo}></TodoItem>;
				})}
			</ul>
		</>
	);
}
