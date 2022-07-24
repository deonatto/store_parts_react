import { useEffect, useState } from "react";

export default function useParts(query, type) {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //set loading value to true to show spinner
    setLoading(true);

    //set Url to be fetched
    const getUrl = () => {
      let queryString = "";
      if (query && type) {
        queryString = `?query=${query}&type=${type}`;
      } else if (!query && type) {
        queryString = `?type=${type}`;
      } else if (!type && query) {
        queryString = `?query=${query}`;
      }
      return `http://localhost:8081/store/parts${queryString}`;
    };

    //get url
    const url = getUrl();

    //get all types
    const getParts = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          setParts(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getParts();
  }, [query, type]);

  return [parts, loading];
}
