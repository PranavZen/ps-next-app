import { useDispatch } from "react-redux";
import { cartVisibility } from "../slice/toggleCartSlice"; 

export function carttoggleActions() {
    const dispatch = useDispatch();

    const toggleSideCart = () => {
        dispatch(cartVisibility());
    }
    return {toggleSideCart};
}