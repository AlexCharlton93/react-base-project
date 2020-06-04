import React from 'react';

// Example IF/Else
export default function JsxTernaryOperatorIfElseExample() {
    const counter = 0;

    return (
        <>
            {counter === 0 ? ( 
                <h2>Counter is equal to 0</h2>
                ) : <h2>Counter is greater than 0</h2>
            }
        </>
    );
}
