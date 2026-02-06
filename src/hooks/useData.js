import { useState, useEffect } from "react";
import apiClient from "../utils/api-client";

const useData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiClient
      .get(url)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((err) => {
        setError(err.message);
        console.error("Error fetching data:", err);
      });
  }, []);

  return { data, error };
};

export default useData;
