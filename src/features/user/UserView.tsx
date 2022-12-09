import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchUsers } from './userSlice'

const UserView = () => {
  const { loading, data, error } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  if (loading) return (<h2>Loading Users...</h2>)
  if (error) return (<h2>Data loading failed {error}</h2>)
  if (data.length === 0 && !loading) return (<h2>No user found</h2>)
  return (
    <div>
      <h2>List of Users</h2>
      {console.log(data)}
      {data.map(el => <li key={el.id}>{el.username}</li>)}
    </div>
  )
}

export default UserView