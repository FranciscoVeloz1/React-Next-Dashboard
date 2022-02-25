import { useState, useEffect } from "react";

const useFetch = (service) => {
  //Data state
  const [data, setData] = useState([]);

  //Get the data from the service
  const getData = async () => {
    const res = await service();
    setData(res);
  };

  //On load the component, get the data
  useEffect(() => {
    getData();

    return () => {
      setData([]);
    };
  }, []);

  //Return data and refresh
  return {
    data,
    refresh: getData,
  };
};

export default useFetch;
