import { useTodoHandler } from '@/hooks/useTodoCardHandler';
import { TodoType } from '@/types/types';
import React from 'react';

const TodoCard = ({ todo }: { todo: TodoType }) => {
    const { onClickDelete, onClickIsDone } = useTodoHandler();
    return (
        <li>
            <div>
                <div>
                    <p>Title: {todo.title}</p>
                    <p>Contents: {todo.contents}</p>
                </div>
                <button onClick={() => onClickDelete(todo.id)}>Delete</button>
            </div>
            <button onClick={() => onClickIsDone(todo)}>{todo.isDone ? 'Cancel' : 'Complete'}</button>
        </li>
    );
};

export default TodoCard;
