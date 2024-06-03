import { useDispatch, useSelector } from 'react-redux';
import {
  changeTodoTitle,
  removeTodo,
  setTodoAsEditable,
  toggleTodoDone
} from 'app/models/todos/todosSlice';
import { AppState } from 'app/store';


export const useTodoViewModel = (id: string) => {
  const editableTodoId = useSelector((state: AppState) => state.todos.editableTodoId);
  const dispatch = useDispatch();

  const editTitle = (title: string) => {
    dispatch(changeTodoTitle({ id, title }));
  };

  return {
    editTitle,
    isEditable: editableTodoId === id,
    remove: () => dispatch(removeTodo(id)),
    setAsEditable: () => dispatch(setTodoAsEditable(id)),
    toggleDone: () => dispatch(toggleTodoDone(id))
  };
};
