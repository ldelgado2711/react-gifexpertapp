import React, { useEffect, useState } from "react";
// import getGifs from "../helpers/GetGifs";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category = "cats" }) => {
  // useEffect(async () => {
  //   /* una forma: getGifs(category).then((imgs) => setImages(imgs)) */
  //   setImages(await getGifs(category));
  // }, [category]);
  // /* con [] vacio -- useEffect se ejecuta solo la primera vez -- [categpry] = si la categoria cambia, se vuelve a llamar a useEffect */

  /* usando el custome hook */
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>Loading...</p>}
      {/* usando el custome hook  */}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>

      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> */}
    </>
  );
};

export default GifGrid;
