// import Projects from "../components/Projects"
import styled from "styled-components";
import cardbattle from "../assets/Card-Battle-gif.gif";
import nonSocial from "../assets/NonSocial-screenshot.jpg";
import WeatherWatcher from "../assets/WeatherWatcher.jpg";

import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardStatWrapper,
  CardStats,
  LinkText,
} from "./buildingPortfolio/PortfolioStyles";

// CardBodyText use to add description to card
import Tilt from "react-parallax-tilt";

// const CardContainer = styled.div

const projects = [
  {
    id: 1,
    title: "Non Social Drinker",
    deployed: "https://jeromemn.github.io/nonsocial-drinker/",
    github: "https://github.com/Jeromemn/nonsocial-drinker",
    image: nonSocial,
  },
  {
    id: 2,
    title: "Card Battle",
    deployed: "https://card-battle.herokuapp.com/",
    github: "https://github.com/Jeromemn/card-battle",
    image: cardbattle,
  },
  {
    id:3, 
    title: 'Weather Watcher',
    deployed: 'https://jeromemn.github.io/weather-watcher/',
    github: 'https://github.com/Jeromemn/weather-watcher',
    image: WeatherWatcher,
  }
];

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
  
`;

// const Separator = styled.span`
//   margin-left: 20px;
//   margin-right: 20px;
//   padding: 50px;
  
// `;

const FullPage = styled.div`
  background: #1f2229;

`;

const HeaderTwo = styled.h2`
  background: #1f2229;
  margin: 0;


`;

function Card() {
  console.log();
  return (
    <FullPage>
      <HeaderTwo> Portfolio </HeaderTwo>
      <CardContainer>
        {projects.map((project) => (
            
            <Tilt >

            <CardWrapper key={project.id} >
              <CardImage
                background={project.image}
                className="images"
                alt={project.title}
                src={project.image}
              ></CardImage>

              <CardTextWrapper>
                <CardTextTitle> {project.title} </CardTextTitle>
                {/* /* <CardBodyText></CardBodyText> */ }
              </CardTextWrapper>
              <CardStatWrapper>
                <CardStats>
                  <LinkText href={project.deployed} target="_blank" rel="noreferrer">Deployed Site</LinkText>
                  </CardStats>
                    
                  <CardStats>
                  <LinkText href={project.github} target="_blank" rel="noreferrer">Github</LinkText>
                </CardStats>
              </CardStatWrapper>
            </CardWrapper>
          </Tilt>
        ))}
      </CardContainer>
    </FullPage>
  );
}

export default Card;

// function PortfolioItems() {
//     console.log();
//   return (
//     <div>
//       <h2> Portfolio </h2>
//        {projects.map((project) => (
//         <div key={project.id}>
//         <img
//           className="images"
//           alt={project.title}
//           src={project.image}>

//           </img>
//            <a className="deployed" href={project.deployed} >
//             Deployed Site
//           </a>
//           <a className="github" href={project.github} >
//             Github
//           </a>

//           </div>

//      ))}

//      {/* <img src={`../assets/NonSocial-screenshot.jpg`} alt="application" /> */}
//     </div>
//   );
// }
