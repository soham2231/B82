import axios from "axios";
import { useEffect, useState } from "react";

const useAPI = (initialURL) => {
  const [dataFromAPI, setDataFromAPI] = useState();
  const [loading, setloading] = useState(true);
  const [error, setError] = useState();

  async function fetchAPI() {
    try {
      const res = await axios.get(initialURL);
      setDataFromAPI(res.data);
      setloading(false);
    } catch (error) {
      setError(error);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, [initialURL]);

  return { dataFromAPI, loading, error };
};

export default useAPI;
