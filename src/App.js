import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      setItems(result.data);
      setIsloading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
