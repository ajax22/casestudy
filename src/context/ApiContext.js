// ApiContext.js

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { List } from "immutable";

export const ApiContext = createContext();

// hook to use api data
export const useApiData = () => {
  return useContext(ApiContext);
};

const ApiProvider = ({ children, apiUrl }) => {
  const [apiData, setApiData] = useState(List([]));
  const [isLoading, setIsLoading] = useState(true);

  // fetch API data
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setApiData(List(data));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    // this is added intentionally to show loading while the data is fetched
    // just to add delay, we can remove this setup in actual implementation
    const timeOut = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [fetchData]);

  const updateData = (updatedData) => {
    setApiData(List(updatedData));
  };

  const updateDataForId = (id, updatedData) => {
    const dataIndex = apiData.findIndex((item) => item.id === id);
    if (dataIndex !== -1) {
      const updatedList = apiData.update(dataIndex, () => updatedData);
      setApiData(updatedList);
    } else {
      const updatedList = apiData.push({ id, ...updatedData });
      setApiData(updatedList);
    }
  };

  const deleteDataForId = (id) => {
    const dataIndex = apiData.findIndex((item) => item.id === id);
    if (dataIndex !== -1) {
      const updatedList = apiData.remove(dataIndex);
      setApiData(updatedList);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        data: apiData,
        isLoading,
        updateData,
        updateDataForId,
        deleteDataForId,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
