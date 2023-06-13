import React from "react";
type Todo = {
	id: string;
	title: string;
	complete: boolean;
};

const TodoItem = ({ todo }: { todo: Todo }) => {
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
// type Todo = {
// 	id: string;
// 	title: string;
// 	complete: boolean;
// };
// const TodoItem = ({ id, title, complete }: Todo) => {
// 	return <li key={id}>{title}</li>;
// };

export default TodoItem;
