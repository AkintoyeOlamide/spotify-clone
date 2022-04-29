import React, { useEffect } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify"

function App() {
   
  return (


    <div className="App">

{/* spotify login */}
{/* login with spotify button LOGIN   */}

<Login />
    </div>
  );
}

export default App;
