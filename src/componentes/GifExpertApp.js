import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dogs"]);
  const handleAdd = (heroe) => {
    setCategories([...categories, heroe]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory _fnSetCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      {/* <button onClick={() => handleAdd("Juancito")}>Agregar</button> */}
    </>
  );
};

export default GifExpertApp;
