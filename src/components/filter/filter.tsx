import { useDispatch, useSelector } from "react-redux";
import { filterSlice, type RootState } from "../../redux";
import { type InitialFilterState } from "../../redux/types/filter.types";
import { Button, Fieldset, FilterContent, FilterItemCheckbox, FilterItemLabel, Legend } from "./styled";
import { useCallback } from "react";

export const Filter = () => {
  const dispatch = useDispatch()
  const { allItems, selectedItems } = useSelector<RootState, InitialFilterState>(
    (state) => state.filterReducer
  )
  const onFilterItemChange = useCallback((item: string) => {
    dispatch(filterSlice.actions.toggleItem(item))
  }, [])
  const onToggleAll = useCallback(() => {
    dispatch(filterSlice.actions.toggleAll())
  }, [])
  const onReset = useCallback(() => {
    dispatch(filterSlice.actions.resetAll())
  }, [])
  return <Fieldset>
      <Legend>
        Filter by abilities ({allItems.length}/{selectedItems.length})
        <Button type="button" onClick={onToggleAll}>
          toggle all
        </Button>
        <Button type="button" onClick={onReset}>
          reset
        </Button>
      </Legend>
      <FilterContent>
        {allItems.map(item => (<FilterItemLabel key={item}>
          {item}
          <FilterItemCheckbox type="checkbox" checked={selectedItems.includes(item)}
            onChange={() => { onFilterItemChange(item); }} />
        </FilterItemLabel>))}
      </FilterContent>
    </Fieldset>
};
