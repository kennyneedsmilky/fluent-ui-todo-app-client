import {useState} from "react";
import {Link} from "react-router-dom";
import {IconButton} from "@fluentui/react/lib/Button";

let activeID = 1;

const Header = (props) => {
    
    // Set Active ID
    const [curActiveID, setActiveID] = useState(() => {
        if (window.location.href.match(/about/)) activeID = 2;
        return activeID;
    });

    // Change active ID.
    const changeActiveID = (linkID) => {
        activeID = linkID;
        setActiveID(prevState => prevState = activeID);
    } 

    return ( 
        <header className="header">
            <h1 className="header__title">{props.language === "en" ? "Fluent UI Todo App" : "フルエントUIアプリ"}</h1>
            <div className="header__links">
                <Link to="/" className={activeID === 1 ? "active" : ""} onClick={() => changeActiveID(1)}>{props.language === "en" ? "Todos" : "TODO"}</Link>
                <Link to="/about" className={activeID === 2 ? "active" : ""} onClick={() => changeActiveID(2)}>{props.language === "en" ? "About" : "このアプリについて"}</Link>
                <IconButton iconProps={{iconName: "LocaleLanguage"}} className="clearButton" onClick={props.changeLanguage} />
            </div>
        </header>
    );
}
 
export default Header;