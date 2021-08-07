import React from 'react';
import "./WorkExperience.css";

function WorkExperience() {
    return (
        <div className="workExperience">

            <div className="experience_info">

                <div className="experience_one">

                    <p>IT Officer</p>
                    <p>Contractual Project, May-2019 to Dec-2020</p>
                    <p>Nijera Incorporation</p>
                    <p>Job responsibility: Requirement Analysis, DHIS2 software development & Testing, Database design, Software documentation, training & reporting, Data Analysis etc.
                    </p>
                    <p>Projects: Data quality review for WHO, GIS development for Rajuk, DHIS2 based PDA development for Action Against Hunger (ACF)
                    </p>

                </div>

                <div className="experience_two">

                    <p>Junior Software Developer</p>
                    <p>Contractual, Jan-2019 to Apr-2019</p>
                    <p>Service Bus Limited</p>
                    <p>Job responsibility: Full Stack development on Laravel framework, Database design (MySQL) and Application testing
                    </p>
                    <p>Projects: Accounts management, Academic information, Payment management system
                    </p>

                </div>

            </div>
            
        </div>
    );
}

export default WorkExperience;
