//have text/icon links to my github, linkedin profile, and stackoverflow or twitter

import React from 'react';
import githubIcon from '../../assets/github_icon.jpg';
import linkedInIcon from '../../assets/linkedin_icon.jpg';
import stackOverflowIcon from '../../assets/stackoverflow_icon.jpg';

// import { capitalizeFirstLetter } from '../../../utils/helpers';

function Footer() {
    return (
        <section id="footer">
            <h1>Footer</h1>
            {/* <img src={githubIcon} alt="github icon">
                <a href="https://github.com/WinnieCWu"></a>
            </img>
            <img src={linkedInIcon} alt="linkedIn icon">
                <a href="www.linkedin.com/in/winnie-wu-mph"></a>
            </img>
            <img src={stackOverflowIcon} alt="stack overflow icon">
                <a href="https://stackoverflow.com/users/19118237/winniecw"></a>
            </img> */}
        </section>
    );
};

export default Footer;