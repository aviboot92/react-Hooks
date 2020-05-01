import {useState, useEffect} from 'react';

const useMousePosition = () =>{
    const initialState = {x:0 , y:0}
    const [position, setposition] = useState(initialState);

    useEffect(() => {
        const positionFunction = (e) => setposition({x: e.pageX, y:e.pageY});
        document.addEventListener('mousemove', positionFunction);
        return () => {
            document.removeEventListener('mousemove', positionFunction)
        }
    }, []);

    return position;
}

export {useMousePosition as default};
