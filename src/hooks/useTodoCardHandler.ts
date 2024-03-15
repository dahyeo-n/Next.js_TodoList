import { TodoType } from '@/types/types';
import { useDeleteTodo, usePatchTodo } from './useData';

export const useTodoHandler = () => {
    const { deleteTodo } = useDeleteTodo();
    const { updateTodo } = usePatchTodo();

    const onClickDelete = (id: string) => {
        const confirmResult = confirm('삭제 원하세요?');
        if (confirmResult) {
            deleteTodo(id);
        }
    };

    const onClickIsDone = (todo: TodoType) => {
        const updatedTodo = { ...todo, isDone: !todo.isDone };
        updateTodo(updatedTodo);
    };

    return { onClickDelete, onClickIsDone };
};
