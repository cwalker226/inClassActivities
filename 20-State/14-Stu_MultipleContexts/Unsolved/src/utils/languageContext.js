import React from "react";

const LanguageContext = React.createContext({
    language: "",
    handleLangClick: () => {}
});

export default LanguageContext;