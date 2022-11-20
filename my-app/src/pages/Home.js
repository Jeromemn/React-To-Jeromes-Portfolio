import styled, { keyframes } from "styled-components";
import homeBackground from "../assets/homeBackground.jpg"

const rotate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 45s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

const Image = styled.img`
    height: 40px;
    width: 40px;
`;

// render(
//     <Rotate> hello </Rotate>
// );

const MyStyle = styled.div`
    background-image: url(${homeBackground});
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
`;


export default function AboutMe() {
    return (
        <>
        {/* <Rotate>

        </Rotate> */}
        <MyStyle> 

        <h1> Who am i? </h1>
        <h2> Jerome Nixon </h2>
        <p>
            Jerome is a 27 year old from Arizona, whos always enjoyed finding creative solutions. Jerome attended University of Arizona's Full Stack Bootcamp in fall of 2022. Along with school work Jerome has started on personal side projects, follows the stock market and has started looking into using coding to create indicators and backtesting strategies. 
        </p>

        <div>
            <Image src={homeBackground} ></Image>
        </div>

       <Rotate> spin
        {/* <Image src={homeBackground} alt="background"> </Image> */}
        <div>
            <Image src={homeBackground} ></Image>
        </div>
       </Rotate>

       </MyStyle>

       </>
        
    );
}