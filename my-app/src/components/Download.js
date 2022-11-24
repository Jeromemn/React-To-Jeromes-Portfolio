import styled from "styled-components";

const Button = styled.button`

`;


export default function Download() {
    const onButtonClick = () => {
        fetch('tempResume.pdf').then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'tempResume.pdf';
            alink.click();
        })
    }


    return (
        <>
        <Button onClick={onButtonClick}> Check out my Resume </Button>
        </>
    );
};