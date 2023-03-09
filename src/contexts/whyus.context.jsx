import { createContext, useState , useEffect } from "react";

export const WhyUsContext = createContext({
    isSliderOpen: false,
    setIsSliderOpen: () => {},
})

export const WhyUsProvider = ({children}) => {
    const [isSliderOpen,setIsSliderOpen]= useState(false);

const value={
    isSliderOpen,
    setIsSliderOpen,
};

    return(
        <WhyUsContext.Provider  value = {value}>{children}</WhyUsContext.Provider>
    );
}