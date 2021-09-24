import React from 'react';
import "./Education.css";

function Education() {
    return (
        <div className="education">

            <div className="edu_row">

                <div className="msc">
                    <p>M.Sc in ICT, 2019</p>
                    <p>CGPA: 3.69 out of 4.00</p>
                    <p>Bangladesh University of Professionals</p>
                    <p>Department of ICT</p>
                </div>

                <div className="bsc">
                    <p>B.Sc in EEE, 2016</p>
                    <p>CGPA: 3.36 out of 4.00</p>
                    <p>Northern University Bangladesh</p>
                    <p>Department of EEE</p>
                </div>

                <div className="hsc">
                    <p>HSC, 2011</p>
                    <p>CGPA: 4.40 out of 5.00</p>
                    <p>Dhaka Board, Science</p>
                    <p>Adamjee Cantonment College</p>
                </div>

                <div className="ssc">
                    <p>SSC, 2009</p>
                    <p>CGPA: 5.00 out of 5.00</p>
                    <p>Dhaka Board, Science</p>
                    <p>Adamjee Cantonment Public School</p>
                </div>

            </div>
            
        </div>
    );
}

export default Education;
