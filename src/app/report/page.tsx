import { TodoType } from '@/types/types';
import React from 'react';

export const revalidate = 10;

const ReportPage = async () => {
    const res = await fetch('http://localhost:3000/api/todos');
    const { data } = await res.json();

    const doneSum = data.filter((todo: TodoType) => todo.isDone).length;
    const workingSum = data.length - doneSum;

    return (
        <>
            <div>Report Page</div>
            <p>{`현재 ${data.length}개의 To-do List가 등록됐습니다.`}</p>
            <p>{`현재 ${doneSum}개의 완료 List, ${workingSum}개의 할 일 List가 존재합니다.`}</p>
        </>
    );
};

export default ReportPage;
