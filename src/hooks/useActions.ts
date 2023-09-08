import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux"
import { pokemonsListSlice, filterSlice } from "../redux";

const rootActions = {
  ...pokemonsListSlice.actions,
  ...filterSlice.actions
}

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
