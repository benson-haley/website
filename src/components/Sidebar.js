import React from 'react';
import './Sidebar.scss';
import photo from '../assets/photo.jpg';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="photo">
                <img src={photo} alt="Headshot of Benson" />
            </div>
            {/* <div className="clips">
                <div>Software Engineer</div>
                <div>Actor</div>
                <div>Extras</div>
            </div> */}
        </div>
    );
}

export default Sidebar;
