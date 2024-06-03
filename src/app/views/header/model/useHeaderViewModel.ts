import { useDispatch, useSelector } from 'react-redux';
import { selectUndoneTodoCount } from '../../../models/todos/todoSelectors';
import { setTodoFilter } from '../../../models/todos/todosSlice';


export const useHeaderViewModel = () => {
  const undoneTodoCount = useSelector(selectUndoneTodoCount);
  const dispatch = useDispatch();

  return {
    setTodoFilter: (text: string) => dispatch(setTodoFilter(text)),
    undoneTodoCount
  };
};
