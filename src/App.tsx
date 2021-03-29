import './App.css';
import Learning from './learning';
import {Provider} from "react-redux";
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Learning />
      </Provider>
    </div>
  );
}

export default App;
