import { useEffect, useState } from "react";

export default function usePart(name) {
  const [part, setPart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    //set loading value to true to show spinner
    setLoading(true);

    // set value of varibales when an error occurs
    const setErrorValues = () => {
      setMessage("Something went Wrong");
      setLoading(false);
      setPart([]);
    };

    //get all types
    const getPart = async () => {
      try {
        const res = await fetch(
          `http://localhost:8081/store/parts?query=${name.toLowerCase()}`,
          {
            method: "GET",
          }
        );
        if (res.status >= 200 && res.status < 300) {
          const data = await res.json();
          data.length === 0 && setMessage("No part found");
          setPart(data);
          setLoading(false);
        } else {
          setErrorValues();
        }
      } catch (err) {
        setErrorValues();
      }
    };
    getPart();
  }, [name]);

  return [part, message, loading];
}
