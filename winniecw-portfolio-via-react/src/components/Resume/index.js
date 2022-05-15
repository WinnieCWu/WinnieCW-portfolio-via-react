//have link to downloadable resume
//have list of developer's proficiencies

import React from 'react';
// import { capitalizeFirstLetter } from '../../../utils/helpers';

function Resume() {
    return (
        <section>
            <h2>
                <a href="https://drive.google.com/file/d/1ufvNxb8wiD16pYSdDc2q71br7Gmi3fMm/view?usp=sharing" alt="downloadable resume">Resume</a>
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