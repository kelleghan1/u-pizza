import React, { useMemo } from 'react'

export const Item = ({ name, selected, id, onToppingsChange }) =>
  useMemo(() => {
    return (
      <li>
        <input
          checked={selected}
          onChange={() => {onToppingsChange(id)}}
          type='checkbox'
        />
        <span>
          { name }
        </span>
      </li>
    )
  },
  [
    name,
    selected,
    id,
    onToppingsChange
  ])