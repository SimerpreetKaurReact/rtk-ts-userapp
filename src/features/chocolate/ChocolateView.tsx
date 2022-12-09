import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { chocoActions } from './chocolateSlice'

const ChocolateView = () => {
  const { numOfChoco } = useAppSelector(state => state.choco)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of chocolates - {numOfChoco}</h2>
      <button onClick={() => {
        dispatch(chocoActions.chocoOrdered(1))
      }}>Order Chocolate</button>
      <button onClick={() => {
        dispatch(chocoActions.chocoRestocked(1))
      }}>Restock chocolates</button>
    </div>
  )
}

export default ChocolateView