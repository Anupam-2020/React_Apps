import { useState } from 'react';

const useCounter = (val) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count => count+val)
    }

    const decrement = () => {
        setCount(count => count - val)
    }

    return {
        count, 
        increment, 
        decrement
    }
}

export default useCounter;