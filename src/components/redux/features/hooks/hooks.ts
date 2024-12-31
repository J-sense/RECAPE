import { useDispatch, useSelector } from "react-redux";
import store, { AppDispatch, rootState } from "../../store";

export const useAppSelector = useSelector.withTypes<rootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();