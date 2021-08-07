import React from 'react';
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

function Footer() {
    return (
        <div className="footer">

            <div className="socialMedia">

                <a  href="https://www.facebook.com/shojib416">

                    <FacebookIcon className="social_Facebook" fontSize="large" />

                </a>

                <a  href="https://www.instagram.com/mofazzel_shojib/">

                    <InstagramIcon  className="social_Instagram" fontSize="large" />
                    
                </a>

                <a  href="https://github.com/MofazzelShojib"
                    >

                    <GitHubIcon className="social_Github" fontSize="large" />
                    
                </a>

                <a  href="https://www.youtube.com/">
                    

                    <YouTubeIcon className="social_Youtube" fontSize="large" />
                    
                </a>

                <a  href="https://www.linkedin.com/in/m-mofazzel-hossain-shojib-028a91138/">

                    <LinkedInIcon  className="social_Linkedin" fontSize="large" />
                    
                </a>

            </div>
            
        </div>
    );
}

export default Footer;
