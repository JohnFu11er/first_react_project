import react from 'react'

const Sixth = () => {

    function mySixth() {
        alert("This is my Sixth function!");
    };

    return (
        <button onClick={mySixth}>Sixth</button>
    );
};

export default Sixth