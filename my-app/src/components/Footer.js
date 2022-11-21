import gitHub from "../assets/GitHub-logo.png"
import linkedin from "../assets/LinkedIn_Logo.svg.png"
import styled from "styled-components"
// import { GlobalStyles} from '../styles/globalStyles.js'

// import { Icon } from "./footerParts/Icons"



// const Footer = styled.footer`
//  background: #1F271B;
//  justify-content: flex-end;
//  bottom: 0;
//  width: 100%;
//  height: 50%;
//  padding-top: 2rem;
//  padding-bottom: 2rem;
//  /* justify-content: center;
//  align-content: center ;
//  align-items: center; */
//  /* align-content: center; */
//  `;

//  const IconContainer = styled.div`
//  /* display: flex; */
// flex-direction: row;

//  justify-content: center;
//  /* justify-self: center; */
//  /* align-self: center; */
//   align-items: center;
//   width: 100%;
//   height: 500px;
//   /* display: grid;
//   grid-column: span 3;
//   grid-template-columns: 1fr 1fr; */
//   /* grid-template-rows: 200px; */
//   margin: 0 auto;
//  `;
// // const Link = styled.a`
// // display: flex;
// // `;

 const GitLogo = styled.img`
 max-height: 50%;
 max-width: 50%;
 
 
 `;

const LinkedInLogo = styled.img`
/* height: 5em;
width: 10em; */
max-width: 60%;
max-height: 60%;
/* align-self: center; */
/* object-fit: contain; */

`;


// // export default function FooterComp() {
// //     return (
// //         <Footer>
// //             <IconContainer>
// //                 <div>

// //                 <a href='https://github.com/Jeromemn' target="_blank" rel="noreferrer">
// //                     <GitLogo src={gitHub} alt='gitHub-logo'></GitLogo>
// //                 </a>
// //                 </div>

// //                 <div>

// //                 <a href='https://github.com/Jeromemn' target="_blank" rel="noreferrer">
// //                     <LinkedInLogo src={linkedin} alt='gitHub-logo'></LinkedInLogo>
// //                 </a>
            
// //                 </div>
// //             </IconContainer>

// //         </Footer> 
// //     )
// // }

// // import { Container, Wrapper, Row, Column, Link } from 

// // const Container = styled.div`
// `

function Footer({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

const FootWrapper = function FooterWrap({ children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

const FootRow = function FooterRow({ children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}
const FootColumn = function Footercol({ children, ...restProps}) {
    return <Column {...restProps}>{children}</Column>
}
const FootLink = function FooterLink({ children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

// export function FooterContainer() {
//     return (
//         <footer>
//             <Footer.Wrapper>
//                 <Footer.Row>
//                     <Footer.Column>
//                     <Footer.Link href='https://github.com/Jeromemn' target="_blank" rel="noreferrer">
//                         </Footer.Link>
                        
//                     </Footer.Column>

//                     <Footer.Column>
//                     <Footer.Link href='https://github.com/Jeromemn' target="_blank" rel="noreferrer">
//                         </Footer.Link>
                        
//                     </Footer.Column>
//                 </Footer.Row>
//             </Footer.Wrapper>
//         </footer>
//     )
// }

const Container = styled.div`
padding: 80px 60px;
background: #1F271B ;
bottom: 0;
width: 100%;
position: fixed;
left: 0;
height: 2%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    `;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(230px, 1fr));
    grid-gap: 20px;
    height: 30px;
    /* align-content: center; */

    @media (max-width: 1000px) {
        grid-template-columns: (auto-fill, minmax(230px, 1fr));
    }
`;

const Link = styled.a`
    color: #fff;
    margin-bottom: 20px;
    text-decoration: none;

        &:hover {
            color: red;
            transition: 200ms ease-in;
        }
`;





// maybe seperate folder
export default function FooterContainer() {
    return (
        <>
        {/* <GlobalStyles/> */}
        <Footer>
            <FootWrapper>
                <FootRow>
                    <FootColumn>
                    <FootLink href='https://github.com/Jeromemn' target="_blank" rel="noreferrer">
                    <LinkedInLogo
                        src={linkedin} alt='linkedin-logo'>
                        </LinkedInLogo>
                        </FootLink>
                        
                    </FootColumn>

                    <FootColumn>
                    <FootLink href="https://github.com/Jeromemn" target="_blank" rel="noreferrer">
                        
                        <GitLogo
                        src={gitHub} alt='gitHub-logo'>
                        </GitLogo>
                        </FootLink>
                        
                    </FootColumn>
                    {/* <FootColumn>
                    <FootLink href='#' target="_blank" rel="noreferrer">
                        </FootLink>
                        
                    </FootColumn> */}
                </FootRow>
            </FootWrapper>
        </Footer>
        </>

    )
}

