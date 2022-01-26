/* 'use' en el nombre del archivo indica que es un 'hook' */

import { useState, useEffect } from "react";
import getGifs from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  /* en los hooks se puede usar useEffect */
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        console.log(imgs);
        setState({
          data: imgs,
          loading: false,
        });
      }, 100);
    });
  }, [category]);

  return state;
};
