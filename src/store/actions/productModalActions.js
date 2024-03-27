import { useDispatch } from "react-redux";
import { productModalVisibilityTrue, productModalVisibilityFalse } from "../slice/productModalSlice";

export function productModalActions() {
    const dispatch = useDispatch();

    const openProductModal = () => {
        dispatch(productModalVisibilityTrue());
    }
    const closeProductModal = () => {
        dispatch(productModalVisibilityFalse());
    }
    
    return {openProductModal, closeProductModal};
}