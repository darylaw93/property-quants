import React from 'react';
import BodyForm from './BodyForm/BodyForm';
import BodyText from './BodyText/BodyText.js';

const Body = () => {
    return (
        <div className="body">
            <BodyText />
            <BodyForm />
        </div>
    );
};

export default Body;