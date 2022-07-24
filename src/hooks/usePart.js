import { useEffect, useState } from "react";

export default function usePart(name) {
  const [part, setPart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //set loading value to true to show spinner
    setLoading(true);
    
    //get all types
    const getPart = async () => {
      try {
        const res = await fetch(
          `http://localhost:8081/store/parts?query=${name.toLowerCase()}`,
          {
            method: "GET",
          }
        );
        if (res.ok) {
          const data = await res.json();
          setPart(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getPart();
  }, [name]);

  return [part, loading];
}
