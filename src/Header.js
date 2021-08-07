import React from 'react';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">

            <Link to="/">

                <HomeIcon className="header_homeIcon" fontSize="large" />
                
            </Link>

            <div className="header_nav">

                <Link to="/about">

                    <div className="about_header">
                        <h1>About</h1>
                    </div>

                </Link>
                
                <Link to="/workexperience">

                    <div className="work_header">
                        <h1>Work Experience</h1>
                    </div>

                </Link>

                <Link to="/education">

                    <div className="edu_header">
                        <h1 >Education</h1>
                    </div>

                </Link>

                <Link to="/skill">

                    <div className="skill_header">
                        <h1 >Skill</h1>
                    </div>

                </Link>

                <Link to="/project">

                    <div className="project_header">
                        <h1 >Project</h1>
                    </div>

                </Link>
            
            </div>
        </div>
    );
}

export default Header;
