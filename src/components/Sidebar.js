import './Sidebar.scss';
import photo from '../assets/photo.jpg';

import { usePage } from './PageContext';
import { useRef } from 'react';

const Sidebar = () => {
    const clips = ["Software Engineer", "Actor"];

    const { setPage } = usePage();

    let enableClips = useRef(true);

    return (
        <div className="sidebar">
            <div className="photo">
                <img src={photo} alt="Headshot of Benson" />
            </div>
            <div className="clips">
                {
                    clips.map((text) => <div key={text} onClick={
                        (e) => {
                            // Don't change if we're not allowed to.
                            if (!enableClips.current) { return; }
                            // Prevent future changes for the next second.
                            enableClips.current = false;
                            setTimeout(() => {
                                enableClips.current = true;
                            }, 1000);
                            // Obtain the clip info from the click event.
                            const clipDiv = e.target;
                            const clipName = clipDiv.innerText;
                            // Change the global site page value.
                            setPage(clipName);
                        }
                    }>{text}</div>)
                }
            </div>
        </div>
    );
}

export default Sidebar;
