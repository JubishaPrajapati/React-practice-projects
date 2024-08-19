import { useState } from "react";
import StartGameHome from "./components/StartGameHome";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setGameStarted] =useState(false);

  const toggleGamePlay =()=>{
    setGameStarted((prev)=> !prev);      //use state ma false cha default so if teta false cha bhaye yeta !prev le true banaidincha and viceversa

  }

  return(
    <>
    {isGameStarted? <GamePlay/> : <StartGameHome toggle={toggleGamePlay}/>};    {/*//curly braces bhitra js run huncha*/ }
                          
    </>
  )
}

export default App;
