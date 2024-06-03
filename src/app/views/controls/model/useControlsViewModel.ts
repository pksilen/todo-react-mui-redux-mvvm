import { useDispatch } from 'react-redux';
import {
  ViewMode,
  ViewType,
  setViewMode,
  setViewType
} from '../../../models/controls/controlsSlice';
import { toggleShouldShowUndoneTodosOnly } from '../../../models/todos/todosSlice';


export const useControlsViewModel = () => {
  const dispatch = useDispatch();

  return {
    setViewMode: (viewMode: ViewMode) => dispatch(setViewMode(viewMode)),
    setViewType: (viewType: ViewType) => dispatch(setViewType(viewType)),
    toggleShouldShowUndoneTodosOnly: () => dispatch(toggleShouldShowUndoneTodosOnly())
  };
};
