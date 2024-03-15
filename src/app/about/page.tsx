import React from 'react';

const AboutPage = async () => {
    const response = await fetch('http://localhost:3000/api/company', {
        cache: 'force-cache',
    });

    const { data } = await response.json();

    return (
        <>
            <div>About Page</div>
            <p>회사명: {data.name}</p>
            <p>회사 소개: {data.description}</p>
        </>
    );
};

export default AboutPage;
