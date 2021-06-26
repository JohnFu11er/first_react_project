import react from 'react';

const Second = () => {
    
    function mySecond() {
        alert('This is my second js function!');
    };

    return (
        <button onClick={mySecond}>Right here!</button>
    );
};

export default Second;