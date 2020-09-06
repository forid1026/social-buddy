import React from 'react';

const NotFound = () => {
    const notFoundStyle = {
        textAlign: 'center',

    }

    return (
        <div style={notFoundStyle}>
            <h3 style={{ fontSize: '30px' }}>Sorry! page not found </h3>
            <h4 style={{ fontSize: '20px' }}>404 Error</h4>
        </div>
    );
};

export default NotFound;