import { useState } from "react";
import "../styles/style.css";
import { validateEmail } from "../utils/helper";
import styled from "styled-components";


const ContactContainer = styled.div`
  width: 30vw;
  height: 50vh;
  /* display: ;  */
  /* align-items: center;  */
  /* justify-content: center; */
  border: 5px solid blue;
  /* margin: 2em 0em 0em 2em; */


  /* display: block;  */

  margin-bottom: 16px;
  margin-top: 16px;
  max-width: 100%;
  box-sizing: border-box;
`;

const FormArea = styled.form`
  max-width: 100%;
  text-align: left;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding-top: 5px;
`;

const Unordered = styled.ul`
  padding: 0;
  margin: 0 auto;
  overflow: visible;
  text-indent: 0;
`;

const ListItem = styled.li`
  margin-top: 16px;
  padding-top: 0;
  clear: both;
  overflow: visible;
  display: list-item;
  list-style-type: none;
`;

const Label = styled.label`
  /* width: 150px;
/* display: block; */
  /* text-align: left;
float: left; 
font-size: 20px;
letter-spacing: 3px;
margin: 0px 5px 0px 0px;
white-space: nowrap;
align-content: flex-end; */
  /* clear: left; */
  position: relative;
  /* display: inline-block; */
  line-height: 1.2;
  clear: both;

  transform: translate(15px, 30px);
  transition: all 0.4s ease-in-out;

  
`;
// const Moved = styled(Label)`
// animation: ${translateUp}
// `;

const Span = styled.span`
  /* display: block;
  overflow: hidden;
  padding: 0px 4px 0px 6px;
  align-items: baseline; */
`;

const InputWrapper = styled.div`
margin-top: 8px;
display: block;
box-sizing: border-box;
text-indent: 0;
`;


const Inputs = styled.input`
  width: 60%;
  /* align-self: right; */
  margin-bottom: 0.8em;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  color: black;
  outline: none;
  touch-action: manipulation;
  overflow: visible;

  
`;

const TextArea = styled.textarea`
  /* width: 300px;
  /* height: ; */
  /* resize: none;
  outline: none;
  border: 1 black; */
  /* border-bottom: 1px solid black; */
  /* padding-bottom: 0;
  align-self: baseline; */
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
  color: white;
  overflow: auto;
  margin: 0;
  resize: none;
  display: inline-block;
  text-align: start;
  white-space: pre-wrap;
  width: 60%;
  height: 100px;
`;

const Header1 = styled.div`
padding-left: 5px;
padding-top: 8px;
`;

// const SmallInput = styled.input.attrs((props) => ({
//   type: "text",
//   size: props.size || ".5rem",
// }))`
//   color: black;
//   font-size: 1rem;
//   border: 2px solid black;
//   border-radius: 4px;
//   display: block;
//   width: 100%;
//   padding: 0.2em;

// margin: ${(props) => props.size};
// padding: ${(props) => props.size};
// `;

// const MessageInput = styled(SmallInput)`
// height: 10em;
// align-content: start;
// type: textarea;
/* width: 90%; */
/* padding: .2em; */
/* display: block; */
/* color: black;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 4px;
  display: block;
  width: 90%;
  height: 10em;
  padding: 0.2em; */


// `;
 


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

  // const moveLabel = (e) => {
  //   e.preventDefault();
    
  //   e.target.
  // }

  // export default function Contact() {
  return (

    <ContactContainer>
      <Header1> Connect With Me </Header1>
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
            <Label> Email
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
            <button type="button" onClick={handleFormSubmit}>
              Send it
            </button>
          </ListItem>
        </Unordered>
      </FormArea>
      {errorMessage && (
        <div>
          <p className="error-text"> {errorMessage}</p>
        </div>
      )}
    </ContactContainer>
  );
}

export default Form;
