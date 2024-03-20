import { selectCategory } from "../slice/selectCategorySlice";
import { useDispatch } from "react-redux";

export function selectCategoryActions() {
  const dispatch = useDispatch();

  function handleCategoryClick(categoryTitle) {
    dispatch(selectCategory(categoryTitle));
  }

  return { handleCategoryClick };
}
