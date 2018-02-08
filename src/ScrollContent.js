import React from 'react';

const ScrollContent = (props) => {
    return (
        <div style={{ 
            overflowY: 'auto', 
            border: '1px solid black',
            height: '500px'
            }}>
            {props.children}
        </div>
    )
};

export default ScrollContent;