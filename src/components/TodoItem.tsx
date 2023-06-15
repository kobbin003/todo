"use client";
import { removeTodos } from "@/actions/removeTodo";
import { toggleTodo } from "@/actions/updateTodo";
import React, { ChangeEvent, MouseEvent } from "react";
type Todo = {
	id: string;
	title: string;
	complete: boolean;
};

const TodoItem = ({ todo }: { todo: Todo }) => {
	const handleOnChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
		toggleTodo({ id: todo.id, complete: !todo.complete });
	};
	const handleOnClick = (e: MouseEvent<HTMLButtonElement>, id: string) => {
		removeTodos(id);
	};
	return (
		<li
			key={todo.id}
			className="flex gap-1 items-center justify-between border my-1 p-1"
		>
			<div>
				<input
					type="checkbox"
					name=""
					id={todo.id}
					className="cursor-pointer peer"
					onChange={(e) => handleOnChange(e, todo.id)}
					defaultChecked={todo.complete}
				/>
				<label
					htmlFor={todo.id}
					className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
				>
					{todo.title}
				</label>
			</div>
			<button
				onClick={(e) => handleOnClick(e, todo.id)}
				className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700"
			>
				Remove
			</button>
		</li>
	);
};

export default TodoItem;
