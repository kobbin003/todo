"use client";
import { updateTodo } from "@/actions/updateTodo";
import React, { ChangeEvent } from "react";
type Todo = {
	id: string;
	title: string;
	complete: boolean;
};

const TodoItem = ({ todo }: { todo: Todo }) => {
	const handleOnChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
		updateTodo({ id: todo.id, complete: !todo.complete });
		console.log("checked");
	};

	return (
		<li
			key={todo.id}
			className="flex gap-1 items-center"
		>
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
		</li>
	);
};

export default TodoItem;
