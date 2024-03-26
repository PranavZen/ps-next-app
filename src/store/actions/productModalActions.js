import { useDispatch } from "react-redux";
import { productModalVisibility } from "../slice/productModalSlice";

export function productModalActions() {
    const dispatch = useDispatch();

    const toggleProductModal = () => {
        dispatch(productModalVisibility());
    }
    return {toggleProductModal};
}