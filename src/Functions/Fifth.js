import react from 'react'

const Fifth = () => {

    function myFifth() {
        alert('This is my fifth function!');
    };

    return (
        <button onClick={myFifth}>Fifth</button>
    );
};

export default Fifth