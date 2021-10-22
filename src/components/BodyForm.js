import React from 'react';

const BodyForm = () => {
    return (
        <div>
            <h1>Learn More About Our Program</h1>
            <form>
                <input placeholder="First Name"/>
                <input placeholder="Last Name"/>
                <input placeholder="Email"/>
                <input placeholder="Phone"/>
                <input placeholder="Notes"/>
                <button>Get Started</button>
            </form>
        </div>
    );
};

export default BodyForm;