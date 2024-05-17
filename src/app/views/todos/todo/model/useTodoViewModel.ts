import { useDispatch, useSelector } from 'react-redux';
import { editTodo, removeTodo, setEditableTodo, toggleTodoDone } from 'app/models/todos/todosSlice';
import { AppState } from 'app/store';


export const useTodoViewModel = (id: string) => {
  const editableTodoId = useSelector((state: AppState) => state.todos.editableTodoId);
  const dispatch = useDispatch();

  const editTodoTitle = (title: string) => {
    dispatch(editTodo({ id, title }));
  };

  return {
    editableTodoId,
    editTodoTitle,
    removeTodo: () => dispatch(removeTodo(id)),
    setEditableTodo: () => dispatch(setEditableTodo(id)),
    toggleTodoDone: () => dispatch(toggleTodoDone(id))
  };
};
