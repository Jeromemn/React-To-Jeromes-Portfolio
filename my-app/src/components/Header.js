import styled from 'styled-components';

const Header = styled.header`
 background: #1F271B;
 position: sticky;
 width: 100%;
 height: 5rem;
 /* padding: 80px, 60px; */
 top: 0;
 left: 0;
 display: flex;
 flex-direction: row
 ;
 margin: 0 auto;
 z-index: 99;
 /* bottom: 0; */
 
 `;

 const HeaderText = styled.h2`
    font-size:4rem;
    color: #FBFBF2;
    margin-top: 0;
    margin-left: 1.1em;
    margin-bottom: 0;
  font-family: 'Amatic SC', cursive;

 `;

function HeaderComp(props) {
    return (
        <>
        <Header>
            <HeaderText> Jerome </HeaderText>
             {props.children}
        </Header>
        </>
    );
}

export default HeaderComp;