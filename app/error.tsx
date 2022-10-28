'use client';

import React from 'react';

export default function Error( {error, reset}: any ) {
    React.useEffect(() => {
        console.log('logging error:', error);
    }, [error]);

    return (
        <div>
            <h1>TODO: Create Error Page</h1>
        </div>
    )
}