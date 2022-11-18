import '../styles/Header.css';

const styles = {
    headerStyle: {
        background: '#1F271B',
    },
    headingStyle: {
        fontSize: '80px',
        fontColor: '#FBFBF2',
    },
};

function Header() {
    return (
        <header style={styles.headerStyle} className='header'>
            <h1 style={styles.headingStyle}> Jerome </h1>
            
        </header>
    );
}

export default Header;