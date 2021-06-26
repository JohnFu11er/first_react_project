import react from 'react'

const Eighth = () => {

    function myEighth() {
        alert("This is my eighth function");
    };

    return (
        <button onClick={myEighth}>Eighth</button>
    );
};

export default Eighth