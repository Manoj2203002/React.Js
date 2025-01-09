import React, { useState } from 'react';

const Handlecounter = (Counter) => {
    function NewCounter() {
        const [Count, setCount] = useState(0);

        function handleincrement() {
            setCount(Count + 1);
        }

        function handledecrement() {
            setCount(Count - 1);
        }

        return (
            <Counter
                Count={Count}
                handleincrement={handleincrement}
                handledecrement={handledecrement}
            />
        );
    }
    return NewCounter;
};

export default Handlecounter;
