import { useState } from "react";
import "../styles/style.css";
import { validateEmail } from "../utils/helper";
import styled from "styled-components";

// const Inputs = styled.input.attrs(props => ({
//     type: "text",
//     size: props.size || "1em",

// }))

const ContactContainer = styled.div`
 width: 60vw;
   height: 40vh;
   /* display: ;  */
  /* align-items: center;  */
  /* justify-content: center; */
   border: 5px solid blue;
   margin: 2em 0em 0em 2em;
   /* text-align: top;  */
   /* vertical-align: text-top;  */
  
   /* display: block;  */
`;

const FormArea = styled.div`
max-width: 100%;
`;

const Label = styled.label`
width: 150px;
/* display: block; */
text-align: left;
float: left; 
font-size: 20px;
letter-spacing: 3px;
margin: 0px 5px 0px 0px;
white-space: nowrap;
align-content: flex-end;
/* clear: left; */

`;

const Span = styled.span`
display: block;
overflow: hidden;
padding: 0px 4px 0px 6px;
align-items: baseline ;
`;

const Inputs = styled.input`
width: 60%;
align-self: right;
margin-bottom:.8em;
`;

const TextArea = styled.textarea`
width: 300px;
/* height: ; */
resize: none;
outline: none;
border: 1  black;
/* border-bottom: 1px solid black; */
padding-bottom: 0;
align-self: baseline;

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

  // export default function Contact() {
  return (
    // <div>

    <ContactContainer>
      <h1> Connect With Me </h1>
      <FormArea >
        <Span>
        <Label> Name 
        <Inputs
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="name"
        />
        </Label>
        </Span>
        <Span>
        <Label> Email 
        <Inputs 
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        </Label>
        </Span>
        <Span >
        <Label for="message"> Message  
        <TextArea
          // className='message-me'
          value={inputMessage}
          name="inputMessage"
          onChange={handleInputChange}
          type="inputMessage"
          placeholder="inputMessage"
          />
          </Label>
         </Span>
        <button type="button" onClick={handleFormSubmit}>
          {" "}
          Send it{" "}
        </button>
      </FormArea>
      {errorMessage && (
        <div>
          <p className="error-text"> {errorMessage}</p>
        </div>
      )}
    </ContactContainer>
    // </div>
  );
  // }
}

export default Form;
