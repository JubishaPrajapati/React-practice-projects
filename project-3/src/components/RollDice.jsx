import styled from "styled-components";

const RollDice = ({rollDice,currDice}) => {

  return (
    <DiceContainer>
        <div className="dice" onClick={rollDice}>
            <img src={`/images/dice_${currDice}.png`} alt="dice1"/>
        </div>
        <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer= styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    p{
        font-size:24px;
    }
    .dice{
        cursor:pointer;
    }
    
`