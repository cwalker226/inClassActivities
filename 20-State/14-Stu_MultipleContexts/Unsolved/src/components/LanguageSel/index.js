import React, { useContext } from "react";
import LanguageContext from "../../utils/languageContext";

function LanguageSelector(props) {
    const { language, handleLangClick } = useContext(LanguageContext);
    console.log("I'm in the language Sel");
    return (
        <div>
            <button onClick={handleLangClick} data-value="back"/>
            {language}
            <button onClick={handleLangClick} data-value="next"/>
        </div>
    );
}

export default LanguageSelector;