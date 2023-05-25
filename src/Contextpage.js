import { createContext, useState } from "react";

const Contextpage = createContext();

export function MovieProvider({ children }) {

  const [activegenre, setActiveGenre] = useState(1);
  const [genres, setGenres] = useState([])


  return (
    <Contextpage.Provider
      value={{
        genres,
        setGenres,
        activegenre,
        setActiveGenre
      }}
    >
      {children}
    </Contextpage.Provider>
  );

}

export default Contextpage;