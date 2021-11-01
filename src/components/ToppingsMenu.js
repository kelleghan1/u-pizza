import React from 'react'
import { TOPPINGS_MAP } from '../utils/constants'
import { Item } from './Item'

export const ToppingsMenu = ({ toppingIds, selectedToppings, onToppingsChange }) => {
  return (
    <ul>
      {
        toppingIds.map(id =>
          <Item
            id={id}
            key={id}
            selected={selectedToppings[id]}
            {...TOPPINGS_MAP[id]}
            onToppingsChange={onToppingsChange}
          />
        )
      }
    </ul>
  )
}