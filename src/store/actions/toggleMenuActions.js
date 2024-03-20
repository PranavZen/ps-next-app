import { useDispatch } from "react-redux";
import { setSideComponent, setVisibility } from "../slice/toggleMenuSlice";

export function toggleMenuActions() {
    const dispatch = useDispatch();

    const toggleMenu = (sideComp) => {
        dispatch(setVisibility());
        dispatch(setSideComponent(sideComp));
    }

    return {toggleMenu};
}