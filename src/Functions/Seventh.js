import react from 'react'

const Seventh = () => {

    function mySeventh() {
        alert("This is my seventh function!");
    };

    return (
        <button onClick={mySeventh}>Seventh</button>
    );
};

export default Seventh