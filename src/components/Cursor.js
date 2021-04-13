import React, { useContext, useState, useEffect } from "react";
import useMousePosition from "./useMousePosition";
import { CursorContext } from "./CursorContextProvider";

const Cursor = () => {
    const { clientX, clientY } = useMousePosition();
    const [cursor] = useContext(CursorContext);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        return () => {
        document.body.removeEventListener("mouseenter",   handleMouseEnter);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);  
    
    return (
        <div 
        style={{ 
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            pointerEvents: "none"
        }}
        >
        <svg
            width={50}
            height={50}
            viewBox="0 0 50 50"
            style={{
            position: "absolute",
            pointerEvents: "none",
            left: clientX,
            top: clientY,
            transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
            stroke: cursor.active ? "black" : "black",
            strokeWidth: 1,
            fill: cursor.active ? "black" : "black ",
            transition: "transform .2s ease-in-out",
            // TODO: extra check on clientX needed here 
            // because mouseleave event not always firing
            // when slowly exiting left side of browser
            opacity: isVisible && clientX > 1 ? 1 : 0,
            }}
        >
            <circle
            cx="25"
            cy="25"
            r="8"
            />
        </svg>
        </div>
    );
    };

export default Cursor;