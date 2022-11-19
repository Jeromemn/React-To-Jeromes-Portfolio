import { useState } from 'react';
import '../styles/style.css'
import { validateEmail } from '../utils/helper';
import styled from 'styled-components';

// const Inputs = styled.input.attrs(props => ({
//     type: "text",
//     size: props.size || "1em",

// }))

const ContactContainer = styled.div`
width: 30vw;
height: 40vh;
display: grid;
align-items: center;
justify-content: center;
border: 5px solid blue;
margin: 2em 0em 0em 2em;
/* grid-template-columns: 1%; */
/* grid-template-rows: 100px; */
/* grid-template-rows: 100% 100px 100px; */
/* display: block; */
`;

const SmallInput = styled.input.attrs(props => ({
    type:"text",
    size: props.size || ".5rem"

}))`
color: black;
font-size: 1rem;
border: 2px solid black;
border-radius: 4px;
display: block; 
width:100%;
padding: .2em;


/* margin: ${props => props.size};
padding: ${props => props.size}; */
`;

const MessageInput = styled.input`
/* height: 40%;
width: 90%;
padding: .2em;
display: block; */
color: black;
font-size: 1rem;
border: 2px solid black;
border-radius: 4px;
display: block; 
width:90%;
height: 10em;
padding: .2em;

`;

function Form() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // const [sentMessage, setSentMessage] = useState('');  // use this to confirm sent or 

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setInputMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || name || inputMessage) { 
            setErrorMessage('Email is invalid or another field is empty');
            return;
        }
        alert('Message Sent allow 2-3 days for response'); // orr use this to confirm sent orr 

        setEmail('');
        setName('');
        setInputMessage('');
        
    };


    
    
    // export default function Contact() {
        return (
            // <div>

            <ContactContainer>
            <h1> Connect With Me </h1>
            <form className='form'>
                <SmallInput
                value={name}
                name='name'
                onChange={handleInputChange}
                type='name'
                placeholder='name'
                />
                <SmallInput
                value={email}
                name='email'
                onChange={handleInputChange}
                type='email'
                placeholder='email'
                />
                <MessageInput  
                
                // className='message-me'
                value={inputMessage}
                name='inputMessage'
                onChange={handleInputChange}
                type='inputMessage'
                placeholder='inputMessage'
                /> 
                
                <button type='button' onClick={handleFormSubmit}> Send it </button>
                </form>
                { errorMessage && (
                    <div>
                        <p className='error-text'> {errorMessage}</p>
                        </div>
                )}
                
            </ContactContainer>
                // </div>
                );
            // }
            
            
}

export default Form;