import { useEffect, useState } from "react";

export default function useTypes() {
  const [types, setTypes] = useState(null);

  useEffect(() => {
    //get all types
    const getTypes = async () => {
      try {
        const res = await fetch("http://localhost:8081/store/part-types", {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          setTypes(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getTypes();
  }, []);

  return [types];
}
