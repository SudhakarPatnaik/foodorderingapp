import './App.css';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import Container from './components/Container';

function App() {
  return (
    <Provider store={appStore}>
      <Container />
    </Provider>
  );
}



export default App;
