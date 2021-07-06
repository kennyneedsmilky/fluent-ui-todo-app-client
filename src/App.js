import { useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";

// Import the icons.
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { getPropsWithDefaults } from "@fluentui/react";
initializeIcons();

function App() {
  // Set the language.
  const [language, setLanguage] = useState( () => {
    // Set Language
    if (localStorage.getItem("fluentUILang") === "en" || localStorage.getItem("fluentUILang") === "jp") {
      return localStorage.getItem("fluentUILang");
    } else {
      localStorage.setItem("fluentUILang", "en");
      return localStorage.getItem("fluentUILang");
    }
  })
  
  // Change language
  const changeLanguage = () => {
    // Change the language and save it to local storage.
    if (localStorage.getItem("fluentUILang") === "en") {
      localStorage.setItem("fluentUILang", "jp");
    } else {
      localStorage.setItem("fluentUILang", "en");
    }
    // Set the language.
    setLanguage(prevState => prevState = localStorage.getItem("fluentUILang"));
  }

  return (
    <div className="app">
      {/* Router */}
      <Router>
        {/* Header */}
        <Header language={language} changeLanguage={changeLanguage}/>
        <main className="main">
          {/* Switch */}
          <Switch>
            {/* Home */}
            <Route exact path="/">
              <Home language={language} />
            </Route>
            {/* About */}
            <Route exact path="/about">
              <About language={language} />
            </Route>
          </Switch>
        </main>
        {/* Footer */}
        <Footer language={language} />
      </Router>
    </div>
  );
}

export default App;