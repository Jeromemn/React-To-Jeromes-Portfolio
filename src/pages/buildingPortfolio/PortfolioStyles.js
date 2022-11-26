import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 350px;
  grid-template-rows: 300px 150px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  margin: 20px;
  margin-top: 5px;
`;

export const CardImage = styled.div`
  grid-area: image;
  background: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 300px;
  width: 350px;
  
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 0 auto;

`;


export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  text-align: center;
  color: white;
  font-size: 2rem;
  text-decoration: underline solid white 2px ;
  text-underline-offset: 4px;

  background-clip: text;
  -webkit-background-clip: text;
`;

export const CardBodyText = styled.p`
  color: grey;
  font-size: 25px;
  font-weight: 300;
  
`;

export const CardStatWrapper = styled.div`
  /* grid-area: stats; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
border-top: solid white 2px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #1F271B;
  font-size: 1.5rem;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
  font-size: 1.4em;
  text-align: center;
`;

export const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
  position: relative;
  display: block;

  &:hover {
    transition-timing-function: ease-in-out;
    transition: .6s, .6s;
    transform: scale(1.5);
    

  }
`;


