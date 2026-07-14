// Libs
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
//app
import { router } from './routes';
import store from './store';
//css
import './style/style.css';



export const App = () => {

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}
