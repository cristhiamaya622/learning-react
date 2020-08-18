import React, { useState } from "react";
const { Provider, Consumer } = React.createContext();

function TableProvider(props) {

  const [ criteriaValue, setCriteriaValue ] = useState();

  function handleCriteria(criteria) {
    setCriteriaValue(criteria);
  };

  return (
    <Provider
      value={{
        criteria: criteriaValue,
        handleCriteria
      }}
    >
      {props.children}
    </Provider>
  );
}

export { TableProvider, Consumer as TableConsumer };