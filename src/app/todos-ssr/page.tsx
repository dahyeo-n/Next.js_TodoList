import { TodoType } from '@/types/types';
import Link from 'next/link';
import React from 'react';

const TodosSsrPage = async () => {
    const response = await fetch('http://localhost:3000/api/todos', {
        cache: 'no-cache',
    });
    const { data } = await response.json();

    console.log(data);

    return (
        <>
            <div>SSR Page</div>
            {data.map((todo: TodoType) => (
                <div key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.contents}</div>
                    <div>{todo.isDone ? 'Done' : 'Working'}</div>
                </div>
            ))}
            <Link href={'/report'}>할 일 정보 통계 보기</Link>
        </>
    );
};

export default TodosSsrPage;
