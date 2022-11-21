import styled from 'styled-components';

const Header = styled.header`
 background: #1F271B;
 position: fixed;
 width: 100%;
 /* padding: 80px, 60px; */
 top: 0;
 left: 0;
 display: flex;
 flex-direction: column;
 margin: 0 auto;
 /* z-index: ; */
 /* bottom: 0; */
 
 `;

 const HeaderText = styled.h2`
    font-size:60px;
    color: #FBFBF2;
    margin-top: 0;
    margin-left: 1.1em;
    margin-bottom: 0;
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