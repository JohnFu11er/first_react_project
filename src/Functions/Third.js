import react from 'react'

const Third = () => {

    function myThird() {
        alert('This is my third function');
    };

    return (
        <button onClick={myThird}>Third</button>
    );
};

export default Third