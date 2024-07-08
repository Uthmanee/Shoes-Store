import { useState } from "react";

export default useApi = (apiFunction) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const request = async () => {
    try {
      setLoading(true);
      const response = await apiFunction();
      setLoading(false);
      setError(!response.ok);
      setData(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  return { data, error, loading, request };
};
