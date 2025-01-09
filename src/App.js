import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";

function App() {

    localStorage.setItem("loggedIn", "false");


    return (
        <div className="desktop">
            <header className="App-header">
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
            </header>
        </div>
    );
}

export default App;
