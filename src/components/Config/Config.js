import React from 'react';

const Config = (props) => {
    return (
        <div>
            <ul style={{ border: '2px solid red', margin: '5px'}}>
                <li> price:{props.price}</li>
                <li> steps:{props.steps}</li>
            </ul>
        </div>
    );
};

export default Config;