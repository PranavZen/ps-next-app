import { useDispatch } from 'react-redux';
import { setModalItem } from '../slice/shopModalSlice'; 

export const shopModalActions = () => {
  const dispatch = useDispatch();
  const openModal = (item) => {
    dispatch(setModalItem(item));
  };
  const closeModal = () => {
    dispatch(setModalItem(null));
  }

  return { openModal,closeModal };
};
