import { useEffect, useState } from 'react';
import { dimensionsType } from './types';

export function useWindowDimensions() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function onWindowResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', onWindowResize);
        return () => window.removeEventListener('resize', onWindowResize);
    }, []);

    const dimensions: dimensionsType = {
        width,
        height,
    };

    return dimensions;
}
