import React from 'react'
import { SIZE_MAP } from '../utils/constants'
export const SizeMenu = ({ sizes, onSizeChange, selectedSize }) => {
  return (
    <select
      onChange={e => {onSizeChange(e.target.value)}}
      value={selectedSize}
    >
      {
        sizes.map(size => {
          const optionString = `${SIZE_MAP[size].name} $${SIZE_MAP[size].price}`
          return (
            <option
              key={size}
              value={size}
            >
              {optionString}
            </option>
          )
        }
        )
      }
    </select>
  )
}