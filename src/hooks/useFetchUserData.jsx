import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUserData = (url, username, password) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = btoa(`${username}:${password}`); 

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        });
        setData(response.data); 
        setLoading(false);
      } catch (err) {
        setError(err.response ? err.response.data : err.message); 
        setLoading(false);
      }
    };

    fetchData();
  }, [url, username, password]);

  return { data, loading, error };
};

export default useFetchUserData;
