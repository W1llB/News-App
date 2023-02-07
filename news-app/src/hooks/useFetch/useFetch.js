import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data, "setdata");
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setError(err);
      });
  }, [url]);
  console.log(data, "fetchdata");

  return { data, error };
}
