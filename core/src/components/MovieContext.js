import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Varisu",
      price: "25rs",
      id: "001",
    },
    {
      name: "Thunivu",
      price: "120rs",
      id: "002",
    },
    {
      name: "Legend",
      price: "100rs",
      id: "003",
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};