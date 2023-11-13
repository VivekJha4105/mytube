import Body from "./components/Body";
import Head from "./components/Head";
import "./App.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
