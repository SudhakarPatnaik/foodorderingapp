import './App.css';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import Home from './components/Home/Home';

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Home />
        <Outlet />
      </div>
    </Provider>
  );
}



export default App;
