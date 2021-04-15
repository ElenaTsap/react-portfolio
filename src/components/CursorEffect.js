import { CursorContext } from "./CursorContextProvider";
import { useContext, useCallback } from "react";

import React from 'react'

const CursorEffect = ({children}) => {
    const [, setCursor] = useContext(CursorContext);  
    
    const toggleCursor = useCallback(() => {
        setCursor(({ active }) => ({ active: !active }));
    }); 

    return (
        <div
            onMouseEnter={toggleCursor}
            onMouseLeave={toggleCursor}
        >
            {children}
        </div>
    )
}

export default CursorEffect
