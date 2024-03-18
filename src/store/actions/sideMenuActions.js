import { useDispatch } from 'react-redux';
import { toggleMenuComp, toggleMenuVisible } from '../slice/toggleMenuSlice';

export const SMActions = () => {
  const dispatch = useDispatch();
  const toggleCompo = (comp) => {
    dispatch(toggleMenuComp(comp));
  }
  const toggleVisible = (state) => {
    dispatch(toggleMenuVisible(state));
  }

  return { toggleCompo,toggleVisible } ;
};
