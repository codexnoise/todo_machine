import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );

  const { error, loading, item, sincronizedItem } = state;

  //Action Creators
  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error });
  const onSucces = (parsedItem) =>
    dispatch({ type: actionTypes.success, payload: parsedItem });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.sincronize });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSucces(parsedItem);
        // setItem(parsedItem);
        // setLoading(false);
        // setSincronizedItem(true);
      } catch (error) {
        onError(error);
        //setError(error);
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
      //setItem(newItem);
    } catch (error) {
      onError(error);
      //setError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
    // setLoading(true);
    // setSincronizedItem(false);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const actionTypes = {
  error: "ERROR",
  write: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  item: initialValue,
  sincronizedItem: true,
});

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
