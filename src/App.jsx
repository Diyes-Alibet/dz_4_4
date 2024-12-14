import React, { useState, useEffect } from "react";
import MainPage from "./pages/mainPage/MainPage.jsx";
import ErrorPage from "./pages/errorPage/ErrorPage.jsx";


function App() {
  const [page, setPage] = useState("prompt");
  const [person, setPerson] = useState(null);

  useEffect(() => {
    if (page === "prompt") {
      const name = prompt("Как тебя зовут?");
      const lastname = prompt("Какая твоя фамилия?");
      const userData = { name, lastname };

      setPerson(userData);

      if (name === "John" && lastname === "Johns") {
        setPage("main");
      } else {
        setPage("error");
      }
    }
  }, [page]);

  if (page === "main") {
    return <MainPage person={person} />;
  }

  if (page === "error") {
    return <ErrorPage person={person} />;
  }

  return null;
}

export default App;
