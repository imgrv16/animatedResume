import React, { useEffect , useState } from 'react';
import './Rain.css';

function Rain() {

    const [thunder, setThunder] = useState(false);

    const createRainDrops = () => {
        const numberOfDrops = 100;
        const rainContainer = document.querySelector('.rain');

        for (let i = 0; i < numberOfDrops; i++) {
            const drop = document.createElement('div');
            drop.classList.add('drop');
            drop.style.left = `${Math.random() * 100}vw`; // random position
            drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // random speed
            rainContainer.appendChild(drop);
        }
    };

    // Trigger random thunder flashes
    const randomThunder = () => {
        setThunder(true);
        setTimeout(() => setThunder(false), 300); // Thunder effect lasts 300ms
    };

    useEffect(() => {
        createRainDrops();

        const thunderInterval = setInterval(randomThunder, Math.random() * 5000 + 3000); // Random thunder every 3-8 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(thunderInterval);
    }, []);

    //   useEffect(() => {
    //     createRainDrops();
    //   }, []);

    return (
        <div>
            {/* <div className="dark-overlay"></div> Dark overlay */}
            {/* {thunder && <div className="thunder-flash"></div>} Thunder flash */}
            <div className="rain"></div>
            {/* <div className="thunderstorm"></div> */}
            {/* Your other content goes here */}
        </div>
    );
}

export default Rain;
