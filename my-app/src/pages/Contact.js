import { useState } from 'react';
import '../styles/style.css'
import { validateEmail } from '../utils/helper';

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
            <div>
            <h1> Connect With Me </h1>
            <form className='form'>
                <input
                value={name}
                name='name'
                onChange={handleInputChange}
                type='name'
                placeholder='name'
                />
                <input
                value={email}
                name='email'
                onChange={handleInputChange}
                type='email'
                placeholder='email'
                />
                <input className='message-me'
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
                
                </div>
                );
            // }
            
            
}

export default Form;