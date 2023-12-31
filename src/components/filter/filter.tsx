import { Button, Fieldset, FilterContent, FilterItemCheckbox, FilterItemLabel, Legend } from "./styled";
import { useCallback } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const Filter = () => {
  const { toggleItem, toggleAll, resetAll } = useActions()
  const { allItems, selectedItems } = useTypedSelector(
    state => state.filterReducer
  )
  const onFilterItemChange = useCallback((item: string) => {
    toggleItem(item)
  }, [])
  const onToggleAll = useCallback(() => {
    toggleAll()
  }, [])
  const onReset = useCallback(() => {
    resetAll()
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
