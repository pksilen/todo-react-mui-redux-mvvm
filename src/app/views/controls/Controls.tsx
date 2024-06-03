import {
  IconRadioButtonGroup,
  IconRadioButtonProps
} from 'app/common/components/buttons/IconRadioButtonGroup';
import {
  DarkModeIcon,
  LightModeIcon,
  ListIcon,
  TableIcon
} from 'app/common/components/icons/Icons';
import { Switch } from 'app/common/components/inputs/Switch';
import { ViewType } from 'app/models/controls/controlsSlice';
import { toggleShouldShowUndoneTodosOnly } from 'app/models/todos/todosSlice';
import classes from './Controls.module.scss';
import { useControlsViewModel } from './model/useControlsViewModel';


type ViewMode = 'dark' | 'light';

export const Controls = () => {
  const vm = useControlsViewModel();

  const viewTypeButtons: IconRadioButtonProps<ViewType>[] = [
    {
      icon: <ListIcon />,
      onClick: () => vm.setViewType('list'),
      value: 'list'
    },
    {
      icon: <TableIcon />,
      onClick: () => vm.setViewType('table'),
      value: 'table'
    }
  ];

  const viewModeButtons: IconRadioButtonProps<ViewMode>[] = [
    {
      icon: <LightModeIcon />,
      onClick: () => vm.setViewMode('light'),
      value: 'light'
    },
    {
      icon: <DarkModeIcon />,
      onClick: () => vm.setViewMode('dark'),
      value: 'dark'
    }
  ];

  return (
    <section className={classes.controls}>
      <IconRadioButtonGroup buttons={viewTypeButtons} initialValue="list" />
      <Switch label="Show undone only" onClick={toggleShouldShowUndoneTodosOnly} />
      <IconRadioButtonGroup buttons={viewModeButtons} initialValue="dark" />
    </section>
  );
};
