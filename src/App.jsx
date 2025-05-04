  import React from "react";
  import Search from "./components/Search";
  import { useState } from "react";

  const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
      <main>
        <div className="pattern" />

        <div className="wrapper">
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> Without a the
            Hassle
          </h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
      </main>
    );
  };

  export default App;
