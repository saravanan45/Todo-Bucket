import Routes from "./Routes";
import { Provider } from "react-redux";
import Store from "./Store";

import { sagaMiddleware } from "./Store";
import sagas from "./Redux-Saga/sagaTodos";

const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

sagaMiddleware.run(sagas);

export default App;
