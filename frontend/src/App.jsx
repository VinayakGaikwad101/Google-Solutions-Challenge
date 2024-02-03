
import './App.css';
import Header from './components/header/Header.jsx';
import LandingPage from './screens/LandingPage/LandingPage.jsx';


function App() {
  return (
    <div style={{backgroundColor: "black"}}>
    <Header />
    <main><LandingPage /></main>
    </div>
  )
}

export default App
