import React from 'react';
import "./Home.css";
import homeimg from "./home_img.png";

function Home() {
    return (
        <div className="home">

            <img src={homeimg}
                 alt=""
            />
            
        </div>
    );
}

export default Home;
