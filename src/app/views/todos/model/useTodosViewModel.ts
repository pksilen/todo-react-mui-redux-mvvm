import { useSelector } from 'react-redux';
import { afterMountDispatch } from 'app/common/hooks/afterMountDispatch';
import { selectShownTodos } from 'app/models/todos/todoSelectors';
import { fetchTodos } from 'app/models/todos/todosSlice';
import { AppState } from 'app/store';


export const useTodosViewModel = () => {
  const isPending = useSelector((state: AppState) => state.todos.isPending);
  const shownTodos = useSelector(selectShownTodos);
  afterMountDispatch(fetchTodos());

  return {
    isPending,
    shownTodos
  };
};
