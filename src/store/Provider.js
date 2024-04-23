import { useReducer } from "react";
import Reducer, { initState } from "./ReducerReact";
import Context from "./Context";
function Provider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
export default Provider;
