import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        setError(null);
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else if (!response.ok) {
          setError(response);
        }
      } catch (err) {
        setError(err);
        console.log(err);
      }
      setLoading(false);
    };
    fetchNews();
  }, [url]);

  return { data, error, loading };
}
