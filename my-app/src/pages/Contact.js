import { useState } from "react";
import "../styles/style.css";
import { validateEmail } from "../utils/helper";
import styled, { keyframes } from "styled-components";
import { Button } from "./buildingPortfolio/HomeStyle";

const border = keyframes`
from { 
  border-bottom-color:black ;
}

to {
  border-bottom-color: white;
}
`;

const MegaContainer = styled.div`
height: 100%;
display: block;
align-content: flex-end;
justify-content: baseline;
align-items: flex-end;
margin-top: 5%;
`;



const ContactContainer = styled.div`
  width: 25rem;
  height: 30rem;
  /* margin: 1.7em 7rem; */
  margin: 0 auto;
  margin-bottom: 1rem;
  align-self: flex-end;
  /* align-content: flex-end; */
  padding-bottom: 1rem;
  font-family: 'Amatic SC', cursive;
  box-sizing: border-box;
  box-shadow: black 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, black 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, black 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, black 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, black 40px -40px;
`;

const FormArea = styled.form`
  max-width: 100%;
  text-align: left;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  /* padding-top: 5px; */
  
`;

const Unordered = styled.ul`
  padding: 0;
  margin: 0 auto;
  overflow: visible;
  text-indent: 0;
`;

const ListItem = styled.li`
  /* margin-top: 16px; */
  padding-top: 0;
  clear: both;
  overflow: visible;
  display: list-item;
  list-style-type: none;
`;

const Label = styled.label`

  position: relative;

  line-height: 1.2;
  clear: both;
  font-size: 2rem;
  transform: translate(15px, 30px);
  transition: all 0.4s ease-in-out;
  /* padding-bottom: 1rem; */
  
`;


const Span = styled.span`
  /* display: block;
  overflow: hidden;
  padding: 0px 4px 0px 6px;
  align-items: baseline; */
`;

const InputWrapper = styled.div`
/* margin-top: 8px; */
display: block;
box-sizing: border-box;
text-indent: 0;
`;


const Inputs = styled.input`
  width: 10rem;
  height: 2.2rem;
 
  /* margin-bottom: 0.8em; */
  border: none;
  border-bottom: 2px solid black;
  animation: ${border} 6s infinite;
  background-color: transparent;
  color: black;
  outline: none;
  touch-action: manipulation;
  overflow: visible;
  
  &:active {
    animation: none;
    border-bottom: 2px solid white;
  }

  
`;

const TextArea = styled.textarea`

  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
  animation: ${border} 6s infinite;
  color: white;
  overflow: auto;
  margin: 0;
  resize: none;
  display: inline-block;
  text-align: start;
  white-space: pre-wrap;
  width: 15rem;
  height: 6rem;
  /* padding-top: 1rem; */

  &:hover {

  }
`;

const Header1 = styled.div`
padding-left: 3.5rem;
padding-top: 1rem;
font-size: 2.5rem;

`;

const ErrMessage = styled.p`
font-size: 1.7rem;
text-align: center;
font-weight: bolder;
`


function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [sentMessage, setSentMessage] = useState('');  // use this to confirm sent or

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setInputMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || name || inputMessage) {
      setErrorMessage("Email is invalid or another field is empty");
      return;
    }
    alert("Message Sent allow 2-3 days for response"); // orr use this to confirm sent orr

    setEmail("");
    setName("");
    setInputMessage("");
  };

  return (
    <MegaContainer>

    <ContactContainer>
      <Header1> Connect With Me </Header1>
      {errorMessage && (
        <div>
          <ErrMessage className="error-text"> {errorMessage}</ErrMessage>
        </div>
      )}
      <FormArea>
        <Unordered>
          <ListItem>
            <Label> Name:
              <Span></Span>
            </Label>
            <InputWrapper>
            <Inputs
              value={name}
              name="name"
              onChange={handleInputChange}
              type="name"
            />
            </InputWrapper>

          </ListItem>
          <ListItem>
            <Label> Email:
              <Span></Span>
            </Label>
            <InputWrapper>

            <Inputs
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
            />
            </InputWrapper>

          </ListItem>
          <ListItem>
            <Label for="message"> Send me a message!
              <Span> </Span>
            </Label>
            <InputWrapper>
            
            <TextArea
              value={inputMessage}
              name="inputMessage"
              onChange={handleInputChange}
              type="inputMessage"
            />
            </InputWrapper>

          </ListItem>
          <ListItem>
            <Button type="Button" onClick={handleFormSubmit}>
              Send it
            </Button>
          </ListItem>
        </Unordered>
      </FormArea>
      
    </ContactContainer>
    </MegaContainer>

  );
}

export default Form;
