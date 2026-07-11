// Libs
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
//app
import { router } from './routes';
import store from './store';
//css
import './style/style.css';
import { genresAPI } from '../entities/genre/api';
import { useEffect } from 'react';


export const App = () => {
  useEffect(() => {
    genresAPI.getGenres()
  }, [])
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}
