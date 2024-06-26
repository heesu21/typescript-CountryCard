import { useEffect, useState } from "react";
import "./App.css";
import { getCountryList } from "./api/api";

function App() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCoutryList = async () => {
      const data = await getCountryList();
      setCountryList(data);
    };

    fetchCoutryList();
  }, []);

  return <></>;
}

export default App;
