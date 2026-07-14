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
import { Header } from '../widgets/Header';


export const App = () => {

  return (
    <>
      <Provider store={store}>
        <Header />
        {/* <RouterProvider router={router} /> */}
      </Provider>
    </>
  )
}
