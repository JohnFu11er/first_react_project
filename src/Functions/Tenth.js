import react from 'react'

const Tenth = () => {

    function myTenth() {
        alert("This is my tenth function!");
    };

    return (
        <button onClick={myTenth}>Tenth</button>
    );
};

export default Tenth