import react from 'react'

const Fourth = () =>{

    function myFourth() {
        alert('This is my fourth function!');
    };
    
    return (
        <button onClick={myFourth}>Fourth</button>
    );
};

export default Fourth