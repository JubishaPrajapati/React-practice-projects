import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResults from "./Components/SearchResults/SearchResults";

export const BASE_URL = "http://localhost:9000"; //cap letter used so that yo imp cha bhnera dekhauna ... ani export so that i can use this url in other components as well

const App = () => {

  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);   //loading spinner dekhaunalai
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  //network call
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL)  //api to perform netwrok call
        const json = await response.json();

        setData(json);   //if data right airako cha bhye set data ma json ma bhako data bascha 
        setLoading(false);
        setFilteredData(json);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []) //dependency array to make it run only once

  const searchFood = (e) => {
    const searchVal = e.target.value;
    console.log(searchVal);
    if (searchVal === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilteredData(filter);
  };

  const foodBtn = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);

  }
  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading..</div>


  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/Foody Zone.svg" alt="logo" />
          </div>

          <div className="search">
            <input onChange={searchFood} placeholder="Search Food..." />
          </div>
        </TopContainer>

        <ChooseContainer>
          {filterBtns.map((value) => (
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name} onClick={() => foodBtn(value.type)} >
              {value.name}
            </Button>
          ))}
        </ChooseContainer>

      </Container>
      <SearchResults data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width:1200px;
  margin:0 auto;

`;
const TopContainer = styled.section`
  height:140px;
  display:flex;
  justify-content:space-between;
  padding:16px;
  align-items:center;

  .search{
    input{
      background-color:transparent;
      font-size:16px;
      color:white;
      height:40px;
      border-radius:5px;
      padding:0 10px;
      border: 1px solid white;
    }
  }

  //to make responsive
  @media (0 < width < 600px){
    flex-direction: column;
    height: 120px;
  }
`;

const ChooseContainer = styled.section`
  display:flex;
  justify-content:center;
  gap:12px;
  padding-bottom:20px;
`;
export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "darkred" : "#FF7F7F")};
  border-radius:5px;
  padding: 6px 12px;
  border:none;
  color:white;
  cursor: pointer;
  &:hover{
    background-color: darkred;
  }
`;
