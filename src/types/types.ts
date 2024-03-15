export type TodoType = {
    id: string;
    title: string;
    contents: string;
    isDone: boolean;
};

export type TNewTodo = Omit<TodoType, 'id'>;
