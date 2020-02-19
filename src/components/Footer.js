import React from "react";
import FooterBar from "./FooterBar";
import SetVisibilityButtons from "./SetVisibilityButtons";

const Footer = props => {
    return (
        <div className="footer">
            <SetVisibilityButtons currentButton={props.currentButton} setCurrentButton={props.setCurrentButton}/>
            <FooterBar/>
        </div>
    );
};

export default Footer;
