import React from 'react';
import resume from '../../assets/Resume.pdf';
function Resume() {
    return (
        <section>
            <h2>
                <a href={resume} alt="downloadable resume">Resume</a>
            </h2>
            <h3> Proficiencies </h3>
            <ul>
                <li>
                    Back-end
                </li>
                <li>
                    Front-end
                </li>
            </ul>
        </section>
    );
};


export default Resume;