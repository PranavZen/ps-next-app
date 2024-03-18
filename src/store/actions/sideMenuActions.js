import { useDispatch } from 'react-redux';
import { setMenuComponent, toggleMenuVisible } from '../slice/toggleMenuSlice';

export const SMActions = () => {
  const dispatch = useDispatch();

  const toggleCompo = (comp) => {
    dispatch(setMenuComponent(comp));
  };

  const toggleVisible = (state) => {
    dispatch(toggleMenuVisible(state));
  };

  return { toggleCompo, toggleVisible };
};
