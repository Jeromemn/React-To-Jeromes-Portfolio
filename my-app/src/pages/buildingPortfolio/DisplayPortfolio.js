// import { Card } from "..Portfolio/";
import styled from "styled-components";
import Card from "../Portfolio";
// import cardbattle from "../../assets/Card-Battle-gif.gif";
// import nonSocial from "../../assets/NonSocial-screenshot.jpg";

const CardContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: #1f2229;
overflow: hidden;
`;

const Separator = styled.span`
margin-left: 10px;
margin-right: 10px;
`;

// const projects = [
//     {
        
//             id:1,
//             title: 'Non Social Drinker',
//             deployed: 'https://jeromemn.github.io/nonsocial-drinker/',
//             github: 'https://github.com/Jeromemn/nonsocial-drinker',
//             image: nonSocial,
        
//     },
//     {
        
//             id:2,
//             title: 'Card Battle',
//             deployed: 'https://card-battle.herokuapp.com/',
//             github: 'https://github.com/Jeromemn/card-battle',
//             image: cardbattle,
        
//     },
// ]

export default function CompletePortfolio() {
    return (
        <div>
            <CardContainer>
                <Card /> 
                <Separator />
                
            </CardContainer>
        </div>
    )
}
