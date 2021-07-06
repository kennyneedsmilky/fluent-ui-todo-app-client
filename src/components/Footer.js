const Footer = (props) => {
    return (
        <footer className="footer">
            <h2>{props.language === "en" ? "2021 KENMIL" : "2021ケンミル"}</h2>
            <p>Made with React, NodeJS and Fluent UI.</p>
        </footer> 
    );
}
 
export default Footer;