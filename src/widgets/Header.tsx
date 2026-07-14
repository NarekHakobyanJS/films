import React, { useEffect } from 'react'
import { genresAPI } from '../entities/genre/api'
import { useDispatch } from 'react-redux'
import { getGenres } from '../entities/genre/model'

export const Header = () => {

  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(getGenres())
    
  }, [])

  return (
    <div>Header</div>
  )
}
