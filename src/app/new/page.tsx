"use client";
import Link from "next/link";
import React from "react";
import { createTodo } from "@/actions/createTodo";

const New = () => {
	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-2xl">New</h1>
			</header>
			<form
				className="flex gap-2 flex-col"
				action={createTodo}
			>
				<input
					type="text"
					name="title"
					className="bg-transparent border border-slate-300 rounded px-2 py-1 focus-within:border-slate-100"
				/>
				<div className="flex justify-end gap-1">
					<Link
						href={"/"}
						className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700"
					>
						Cancel
					</Link>
					<button
						type="submit"
						className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700"
					>
						Create
					</button>
				</div>
			</form>
		</>
	);
};

export default New;
