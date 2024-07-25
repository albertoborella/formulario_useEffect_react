import { useState, useEffect } from "react";

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const loadedData = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: "Objeto 1" },
            { id: 2, name: "Objeto 2" },
            { id: 3, name: "Objeto 3" },
          ]);
        }, 2000);
      });
      setData(loadedData);
    };
    fetchData();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        data.map((dato) => (
          <li key={dato.id}>
            id: {dato.id}, Nombre: {dato.name}
          </li>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default DataDisplay;
