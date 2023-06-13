import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";

export function getTodo() {
	return prisma.todo.findMany();
}
export function createTodo() {
	return prisma.todo.create({ data: { title: "third one", complete: false } });
	// console.log("todocreated");
}
export default async function Home() {
	const todos = await getTodo();
	// await createTodo();
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
					return (
						// <li key={todo.id}>{todo.title}</li>
						<TodoItem todo={todo}></TodoItem>
						// <TodoItem
						// 	id={todo.id}
						// 	title={todo.title}
						// 	complete={todo.complete}
						// ></TodoItem>
					);
				})}
			</ul>
		</>
	);
}
