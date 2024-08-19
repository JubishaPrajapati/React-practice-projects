import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
        <h1>How to play dice game</h1>
        <div className="text">
            <p>Select any number. After click on dice if selected number is equal to dice number you will get same point as. If you get wrong guess then 2 points will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
    max-width:800px;
    margin:0 auto;
    background-color:#fbf1f1;
    border-radius:10px;
    padding:20px;
    h1{
        font-size:24px;
    }
   
`;