import styled from "styled-components";
import { BASE_URL } from "../../App";
import { Button, Container} from "../../App";


const SearchResults = ({ data }) => {
    return (
        <FoodContainer>
            <Container>
                {/*api bata value tanneko key = food.name bhnera jasma food is a value that is passed and .name is the variable that is called from the api */}
                <FoodCards>
                    {data?.map(({ name, image, text, price }) => (                       //data? says thet whenever there is data coming then map it and show otherwise return null
                        <FoodCard key={name}>
                            <div className="food_img">
                                <img src={BASE_URL + image} />   {/* first image lai api call agrna agdi hami url bhitra janaparcha so url+image variable */}
                            </div>
                            <div className="food_input">
                                <div className="info">
                                    <h3>{name}</h3>
                                    <p>{text}</p>
                                </div>
                                <Button>$.{price.toFixed(2)}</Button>  {/*tofixed le tyo number pachi 2 dec digits haldincha */}
                            </div>
                        </FoodCard>
                    ))}
                </FoodCards>
            </Container>
        </FoodContainer>
    )
}

export default SearchResults;
const FoodContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-size:cover;
  background-image: url("/bg.png");
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px; 
`;

const FoodCard = styled.div`
    width: 340px;
    height: 167px;
    border: 0.66px solid;

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
    
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;
 
  .food_input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:end;    
    
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 800;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
        font-size: 16px;
        max-width: 100px;
    }
  } 
`;