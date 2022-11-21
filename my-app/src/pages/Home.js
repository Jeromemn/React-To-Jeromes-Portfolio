import styled, { keyframes } from "styled-components";
// import homeBackground from "../assets/homeBackground.jpg"
import newBackground from "../assets/homeBackground.jpg"

const rotate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

// const Rotate = styled.div`
//     display: inline-block;
//     animation: ${rotate} 45s linear infinite;
//     padding: 2rem 1rem;
//     /* font-size: 1.2rem; */
// `;

// const Image = styled.img`
//     height: 40px;
//     width: 40px;
// `;

// render(
//     <Rotate> hello </Rotate>
// );

const MyStyle = styled.div`
    background-image: url(${newBackground});
    /* background-size: contain; */
    background-repeat: no-repeat;
    /* overflow: hidden; */
    /* background-attachment: fixed; */
    /* width: 150%; */
    /* background-size: auto; */
    margin: 0;
    padding: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* margin:50px; */
    /* padding: 50px; */
    zoom: 6.5;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    animation: pulse-animation;
    /* display: inline-block;
    animation: ${rotate} 30s linear infinite;  */
    /* padding: 1rem 1rem; */
`;
const View = styled.div`
    position: relative;
    margin-top: 10%;
    /* top:0; */
    /* left: 0; */
    /* right: 0; */
    /* bottom:  0; */
    justify-content: center;
    align-items: center;

`

export default function AboutMe() {
    return (
        <>
        {/* <Rotate> */}

        <div>
            
        <MyStyle> 
       </MyStyle>
        </div>

        {/* </Rotate> */}
        <View style={{position: 'absolute', top: 10, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>

        <h1> Who am i? </h1>
        <h2> Jerome Nixon </h2>
        <p>
            Jerome is a 27 year old from Arizona, whos always enjoyed finding creative solutions. Jerome attended University of Arizona's Full Stack Bootcamp in fall of 2022. Along with school work Jerome has started on personal side projects, follows the stock market and has started looking into using coding to create indicators and backtesting strategies. 
        </p>

        </View>
        {/* <div>
            <Image src={homeBackground} ></Image>
        </div> */}

        {/* <Rotate> 
       <div> 
            <Image src={homeBackground} ></Image> 
        </div>  */}
         {/* </Rotate>   */}


       </>
        
    );
}