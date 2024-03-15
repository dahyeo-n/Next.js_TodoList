import { TodoType } from '@/types/types';
import TodoCard from './TodoCard';

const TodoList = ({ todos, isDone }: { todos: TodoType[]; isDone: boolean }) => {
    return (
        <div>
            <p>{isDone ? 'Done' : 'Working...'}</p>
            <ul>
                {todos
                    ?.filter((todo: TodoType) => isDone === todo.isDone)
                    .map((todo: TodoType) => (
                        <TodoCard key={todo.id} todo={todo} />
                    ))}
            </ul>
        </div>
    );
};

export default TodoList;
