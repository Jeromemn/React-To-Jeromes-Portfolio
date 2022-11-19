import styled from 'styled-components';

const Header = styled.header`
 background: #1F271B;
 
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
        <Header>
            <HeaderText> Jerome </HeaderText>
             {props.children}
        </Header>
    );
}

export default HeaderComp;