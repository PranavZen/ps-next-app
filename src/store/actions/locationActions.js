import { useDispatch } from 'react-redux';
import { setSelectedStore } from '../slice/selectLocationSlice';

export const LocActions = () => {
  const dispatch = useDispatch();
  const setLocationName = (item) => {
    dispatch(setSelectedStore(item.toUpperCase()));
  };

  return { setLocationName };
};
