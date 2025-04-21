import React from 'react';

const StartupsPage = () => {
    return (
        <div>
            {/* Title Section */}
            <h1>OnePass Bridge for Startups</h1>
            {/* Description Section */}
            <p>
                Empower your startup with OnePass Bridge, the ultimate solution for secure and seamless password management. 
                Scale your business with confidence, knowing your sensitive data is protected.
            </p>
            {/* Call-to-Action Section */}
            <button onClick={() => window.location.href = '/get-started'}>
                Get Started Today
            </button>
        </div>
    );
};

export default StartupsPage;
