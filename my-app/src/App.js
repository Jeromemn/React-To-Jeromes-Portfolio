// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import PageContainer from './components/PagesContainer';
import { GlobalStyles } from './styles/globalStyles';
// import Header from './components/Header';
// import NavTabs from './components/Navigation';
// import Form from './pages/Contact';
// import Projects from './components/Projects';
// import PortfolioItems from './pages/Portfolio';

function App() { 
return (
  <div>
    <GlobalStyles/>
   <PageContainer />

  </div>
);
}

export default App;
