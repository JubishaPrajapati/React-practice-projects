import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
    const [score, setScore]=useState(0);
    const [selectedNum,setSelectedNum]=useState();
    const [currDice,setCurrDice]=useState(1);
    const [error,setError] =useState("");
    const [showRules,setRules] =useState(false);

    
    const randomNumGenerator=  (min,max)=>{
        return Math.floor(Math.random()* (max-min)+min);  //math.floor le chai decimal ma audaina number gen garda 
    }

    const rollDice=()=>{
        if(!selectedNum){   //so that hamle number select garesi dice roll garda score change nahos ani yo top ma rakheko so that dice nai roll nahos is hamle num select garena bhane
            setError("You have not selected any number");
            return
        }
        setError("");

        const randomNum= randomNumGenerator(1,7);
        setCurrDice((prev)=> randomNum);

        if(selectedNum == randomNum){
            setScore(prev => prev + randomNum);
        }else{
            setScore((prev)=>prev-2);
        }

        setSelectedNum(undefined);  //select gareko number lai feri unselect garnalai jaba dice ghumaucha
    }
    const resetScore=()=>{
        setScore(0);
    }

    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score ={score}/>
                <NumberSelector 
                    error={error}
                    setError={setError}
                    selectedNum={selectedNum}
                    setSelectedNum={setSelectedNum}
                />
            </div>
            <RollDice currDice={currDice} rollDice={rollDice}/>
            <div className="btns">
                <Button onClick={resetScore}>Reset</Button>
                <Button onClick={()=> setRules((prev)=> !prev)}>
                    {showRules ? "Hide":"Show"} Rules</Button>
            </div>
            {showRules && <Rules/>}
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer=styled.main`

.top_section{
    display:flex;
    justify-content:space-around;
    align-items:end;
}
.btns{
    margin-top:5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
}
`;
