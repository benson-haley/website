import './Portfolio.scss'

import React, { useRef, useEffect } from 'react';

const Portfolio = ({tabs, children}) => {
    const tabsElement = useRef();
    const parent = useRef();

    useEffect(() => {
        const handleResize = () => {
            if (parent.current) {
                let height = 0;
                for (const child of parent.current.children) {
                    if (child.offsetHeight > height) {
                        height = child.offsetHeight;
                    }
                }
                parent.current.style.height = height + "px";
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, []);

    const select = (event) => {
        const children = Array.from(event.currentTarget.parentNode.children);
        const index = children.indexOf(event.currentTarget);
        const previousZIndex = event.currentTarget.style.zIndex;
        event.currentTarget.style.zIndex = tabs.length + 2;
        for (const element of tabsElement.current.children) {
            element.classList.remove("selected");
            if (element.style.zIndex > previousZIndex) { element.style.zIndex -= 1; }
        }
        for (const element of parent.current.children) {
            element.style.opacity = 0;
            element.style.zIndex = 0;
            const allElements = element.querySelectorAll(".overlaid div div *");
            for (const element of allElements) { element.style.pointerEvents = "none"; }
        }
        const outerDiv = parent.current.children[index];
        outerDiv.style.zIndex = 1;
        outerDiv.style.opacity = 1;
        const allElements = outerDiv.querySelectorAll(".overlaid div div *");
        for (const element of allElements) { element.style.pointerEvents = "auto"; }
        //outerDiv.chilren[0].style.pointerEvents = "auto";
        event.currentTarget.classList.add("selected");
    }
    
    return (
        <>
            <div className="tabs" ref={tabsElement}>
                { tabs.map((name, index) => (
                    <div key={name} className={index === 0 ? "tab selected" : "tab"} onClick={select} style={{zIndex: (tabs.length - index + 1)}}>{name}</div>
                )) }
            </div>
            <div className="portfolio">
                <div className="inner" ref={parent}>
                    { children }
                </div>
            </div>
        </>
    );
}

export default Portfolio;
