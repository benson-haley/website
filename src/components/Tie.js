import './Tie.scss'

import { usePage } from './PageContext';

import { useEffect, useRef } from 'react';

const Tie = ({clipContent}) => {
    const { page, canPageChange, resumeLocation, setResumeLocation } = usePage();

    const tie = useRef();

    const tagContent = useRef([
        {text: "About Me", href: "#about"},
        {text: "Portfolio", href: "#portfolio"},
        {text: "Résumé", href: resumeLocation}
    ]);

    const doEffect = canPageChange.current;
    useEffect(() => {
        if (!doEffect) { return; }
        // Move the tie.
        tie.current.style.translate = "0px -100vh";
        // Wait for the movement transition to end.
        tie.current.addEventListener('transitionend', function handler(event) {
            if (event.propertyName !== 'translate') return;
            tie.current.removeEventListener('transitionend', handler);
            // Remove the old theme.
            for (let className of document.body.classList) {
                if (className.startsWith('theme-')) {
                    document.body.classList.remove(className);
                }
            }
            // Set the new theme.
            if (page === "Software Engineer") {
                document.body.classList.add('theme-sage');
            } else if (page === "Actor") {
                document.body.classList.add('theme-crayon');
            } else if (page === "Extras") {
                document.body.classList.add('theme-sage');
            }
            // Set the new tie content.
            if (page === "Software Engineer") {
                setResumeLocation("/resume.pdf");
                tagContent.current = [
                    {text: "About Me", href: "#about"},
                    {text: "Portfolio", href: "#portfolio"},
                    {text: "Résumé", href: "/resume.pdf"}
                ]
            } else if (page === "Actor") {
                setResumeLocation("/actingResume.pdf");
                tagContent.current = [
                    {text: "About Me", href: "#about"},
                    {text: "Pictures", href: "#pictures"},
                    {text: "Résumé", href: "/actingResume.pdf"}
                ]
            }
            // Move the tie back.
            setTimeout(() => {
                tie.current.style.translate = "0px 0px";
            }, 200);
        });
    }, [page, doEffect, setResumeLocation, resumeLocation]);

    return (
        <div className="tie" ref={tie}>
            <div className="content">
                <div className="header">
                    <h1>Benson Haley</h1>
                    <div>{clipContent}</div>
                </div>
                <div className="navigation">
                    <div className="box"></div>
                    <div className="text">
                        {
                            tagContent.current.map((content) => {
                                return content.href[0] === "#"
                                    ? <h2 key={content.text}><a className="special" href={content.href}>{content.text}</a></h2>
                                    : <h2 key={content.text}><a className="special" href={content.href} target="_blank" rel="noreferrer">{content.text}</a></h2>
                                
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="bar"></div>
        </div>
    );
}

export default Tie;