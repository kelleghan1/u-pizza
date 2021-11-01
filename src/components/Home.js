import React, { useCallback, useState } from 'react'
import { SIZE_MAP, TOPPINGS_MAP } from '../utils/constants'
import { ToppingsMenu } from './ToppingsMenu'
import { SizeMenu } from './SizeMenu'

export const Home = () => {
  const toppingIds = Object.keys(TOPPINGS_MAP)
  const sizes = Object.keys(SIZE_MAP)
  const initSelectedToppings = toppingIds.reduce(
    (a, b) => ({ ...a, [b]: false }),
    {}
  )

  const [selectedToppings, setSelectedToppings] = useState(initSelectedToppings)
  const [selectedSize, setSelectedSize] = useState('small')

  const handleToppingsChange = useCallback(id => {
    setSelectedToppings(
      prevSelectedToppings => {
        const newSelectedToppings = { ...prevSelectedToppings }
        newSelectedToppings
        newSelectedToppings[id] = !newSelectedToppings[id]

        return newSelectedToppings
      }
    )
  },
  []
  )

  const handleSubmit = () => {
    const order = {}
    let total = 0

    const toppingsList = toppingIds.filter(id => selectedToppings[id])

    total = (toppingsList.length * 0.5)
    total+= SIZE_MAP[selectedSize].price
    order.toppings = selectedToppings
    order.size = selectedSize
    order.total = total

    console.log(
      'Order',
      order
    )
  }

  return (
    <div>
      <ToppingsMenu
        onToppingsChange={handleToppingsChange}
        selectedToppings={selectedToppings}
        toppingIds={toppingIds}
      />
      <SizeMenu
        onSizeChange={setSelectedSize}
        selectedSize={selectedSize}
        sizes={sizes}
      />
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}