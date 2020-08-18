import React from "react";
const { Provider, Consumer } = React.createContext();

function UserProvider(props) {
  return (
    <Provider
      value={{
        test: "prueba"
      }}
    >
      {props.children}
    </Provider>
  );
}

export { UserProvider, Consumer as UserConsumer };