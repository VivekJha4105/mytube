import Body from "./components/Body";
import Head from "./components/Head";
import "./App.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div className="relative">
        <Head />
      </div>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
