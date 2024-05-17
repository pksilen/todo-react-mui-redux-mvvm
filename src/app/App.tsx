import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import classNames from './App.module.scss';
import { AddTodo } from './views/addtodo/AddTodo';
import { Controls } from './views/controls/Controls';
import { ErrorBoundary } from './views/errorboundary/ErrorBoundary';
import { Header } from './views/header/Header';
import { TodosList } from './views/todos/TodosList';
import { TodosTable } from './views/todos/TodosTable';
import { AppState } from './store';

export default function App() {
  const themeOptions = useSelector((state: AppState) => state.controls.themeOptions);
  const viewType = useSelector((state: AppState) => state.controls.viewType);

  return (
    <div className={classNames.container}>
      <ThemeProvider theme={createTheme(themeOptions)}>
        <CssBaseline />
        <Header />
        <Controls />
        <ErrorBoundary>
          {viewType === 'list' ? <TodosList /> : <TodosTable />}
          <AddTodo />
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
}
