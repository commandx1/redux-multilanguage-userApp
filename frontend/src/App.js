import { Provider } from "react-redux";
import { store } from "./store/store";
import Routes from "./components/Routes";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container my-5">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
