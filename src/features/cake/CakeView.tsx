import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { cakeActions } from './cakeSlice'

const CakeView = () => {
  const { numOfCakes } = useAppSelector(state => state.cake)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of cakes -{numOfCakes} </h2>
      <button onClick={() => {
        dispatch(cakeActions.cakeOrdered(1))
      }}>Order cake</button>
      <button onClick={() => {
        dispatch(cakeActions.cakeRestoked(1))
      }}>Restock cakes</button>
    </div>
  )
}

export default CakeView