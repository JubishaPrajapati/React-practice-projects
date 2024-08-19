import styled from "styled-components"

const NumberSelector = ({setError,error,selectedNum,setSelectedNum}) => {

    const array= [1,2,3,4,5,6]; 
    const numberSelectorHandler=(value)=>{
        setSelectedNum(value);
        setError("");
    }
  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="selector_container">
        {
            array.map((value,i)=> (    // to get 1 to 6 value through array instead of writing each one
                <Box 
                    isSelected= {value == selectedNum}
                    key={i} onClick={()=>numberSelectorHandler(value)}>       {/*we cannot pass val like this setSelectedNum(value) as it will give error and we should use callback becus callback use garena bhne tyo diret render huncha ta callback le point garyo bhane onclick bhayesi matra event occur huncha*/}
                    {value}
                </Box>
            ))
        }
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer=styled.div `

display:flex;
flex-direction:column;
align-items:end;

    .selector_container{
        display:flex; 
        gap:24px;
    }

    p{
        font-size:22px;
    }
    .error{
        color:red;
    }
`;

const Box=styled.div `
    height:72px;
    width: 72px;
    border:1px solid black;
    display:grid;
    place-items:center;
    font-size:24px;
    font-weight:700;
    background-color: ${(props)=> (props.isSelected? "black":"white")};  //num select garda bg change garako
    color: ${(props)=> (!props.isSelected? "black":"white")};
`;