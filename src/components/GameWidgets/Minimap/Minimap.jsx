// import {useState, useRef} from 'react';
// import PropTypes from 'prop-types';

// import Button from '../../UI/Button/Button';

// import spbw from '../../../utils/spbw';

// import biggerImg from '../../../assets/img/minimap-bigger.png';
// import smallerImg from '../../../assets/img/minimap-smaller.png';
// import collapseImg from '../../../assets/img/toggle-minimap.png';

// import gameConfig from '../../../config/game.json';
// import cls from './minimap.module.css';

// const mmPatterns = gameConfig.minimapPatterns;

// function Minimap({ children, guessDisabled, onGuess }) {
//     const btnRowRef = useRef();
//     const [mmCollapsed, setMmCollapsed] = useState(false);
//     const [mmPattern, setMmPattern] = useState(0);

//     return (
//         <div className={spbw('widget-group', cls.minimap)} style={{
//             '--mm-wid': mmPatterns[mmPattern].w,
//             '--mm-hgt': mmCollapsed ? window.getComputedStyle(btnRowRef.current).height : mmPatterns[mmPattern].h
//         }}>
//             <div className={cls.btn_row} ref={btnRowRef}>
//                 <div>
//                     <button
//                         className={spbw('btn-game', cls.tool_btn)}
//                         onClick={() => setMmPattern(Math.min(mmPattern + 1, mmPatterns.length - 1))}
//                         title="Bigger"
//                     >
//                         <img src={biggerImg} alt="+" />
//                     </button>
//                     <button
//                         className={spbw('btn-game', cls.tool_btn)}
//                         onClick={() => setMmPattern(Math.max(mmPattern - 1, 0))}
//                         title="Smaller"
//                     >
//                         <img src={smallerImg} alt="-" />
//                     </button>
//                 </div>
//                 <div>
//                     <span className={spbw(cls.flippable, mmCollapsed && cls.flippable_flipped)}>
//                         <button
//                             className={spbw('btn-game', cls.tool_btn)}
//                             onClick={() => setMmCollapsed(!mmCollapsed)}
//                             title="Collapse"
//                         >
//                             <img src={collapseImg} alt="v" />
//                         </button>
//                     </span>
//                 </div>
//             </div>
//             <div className={cls.map}>{children}</div>
//             <div>
//                 <Button className="btn-block" disabled={guessDisabled} onClick={onGuess}>Guess</Button>
//             </div>
//         </div>
//     );
// }
// Minimap.propTypes = {
//     guessDisabled: PropTypes.bool,
//     onGuess: PropTypes.func
// };
// Minimap.defaultProps = {
//     guessDisabled: true,
//     onGuess: () => {}
// };

// export default Minimap;

// import { useState, useRef } from 'react';
// import PropTypes from 'prop-types';

// import Button from '../../UI/Button/Button';

// import spbw from '../../../utils/spbw';

// import biggerImg from '../../../assets/img/minimap-bigger.png';
// import smallerImg from '../../../assets/img/minimap-smaller.png';
// import collapseImg from '../../../assets/img/toggle-minimap.png';

// import gameConfig from '../../../config/game.json';
// import cls from './minimap.module.css';

// const mmPatterns = gameConfig.minimapPatterns;

// function Minimap({ children, guessDisabled, onGuess, imageCoordinates }) {
//     const btnRowRef = useRef();
//     const [mmCollapsed, setMmCollapsed] = useState(false);
//     const [mmPattern, setMmPattern] = useState(0);

//     const calculateDistance = (imageCoordinates, clickedCoordinates) => {
//         // Calculate distance between image coordinates and clicked coordinates
//         const [x1, y1] = imageCoordinates;
//         const [x2, y2] = clickedCoordinates;
//         const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//         return distance;
//     };

//     const handleGuess = () => {
//         if (!imageCoordinates) return;
//         // Simulate clicked coordinates (for testing purposes)
//         const clickedCoordinates = [101.90862737512538, 0.20183248484623562];
//         const distance = calculateDistance(imageCoordinates, clickedCoordinates);
//         console.log('Distance:', distance);
//         // Perform any scoring logic based on the distance
//         // Call the onGuess function with the distance or other relevant data
//         onGuess(distance);
//     };

//     return (
//         <div className={spbw('widget-group', cls.minimap)} style={{
//             '--mm-wid': mmPatterns[mmPattern].w,
//             '--mm-hgt': mmCollapsed ? window.getComputedStyle(btnRowRef.current).height : mmPatterns[mmPattern].h
//         }}>
//             <div className={cls.btn_row} ref={btnRowRef}>
//                 <div>
//                     <button
//                         className={spbw('btn-game', cls.tool_btn)}
//                         onClick={() => setMmPattern(Math.min(mmPattern + 1, mmPatterns.length - 1))}
//                         title="Bigger"
//                     >
//                         <img src={biggerImg} alt="+" />
//                     </button>
//                     <button
//                         className={spbw('btn-game', cls.tool_btn)}
//                         onClick={() => setMmPattern(Math.max(mmPattern - 1, 0))}
//                         title="Smaller"
//                     >
//                         <img src={smallerImg} alt="-" />
//                     </button>
//                 </div>
//                 <div>
//                     <span className={spbw(cls.flippable, mmCollapsed && cls.flippable_flipped)}>
//                         <button
//                             className={spbw('btn-game', cls.tool_btn)}
//                             onClick={() => setMmCollapsed(!mmCollapsed)}
//                             title="Collapse"
//                         >
//                             <img src={collapseImg} alt="v" />
//                         </button>
//                     </span>
//                 </div>
//             </div>
//             <div className={cls.map}>{children}</div>
//             <div>
//                 <Button className="btn-block" disabled={guessDisabled} onClick={handleGuess}>Guess</Button>
//             </div>
//         </div>
//     );
// }
// Minimap.propTypes = {
//     guessDisabled: PropTypes.bool,
//     onGuess: PropTypes.func,
//     imageCoordinates: PropTypes.array
// };
// Minimap.defaultProps = {
//     guessDisabled: true,
//     onGuess: () => {},
//     imageCoordinates: null
// };

// export default Minimap;

// import { useState, useRef } from 'react';
// import PropTypes from 'prop-types';

// import Button from '../../UI/Button/Button';

// import spbw from '../../../utils/spbw';

// import biggerImg from '../../../assets/img/minimap-bigger.png';
// import smallerImg from '../../../assets/img/minimap-smaller.png';
// import collapseImg from '../../../assets/img/toggle-minimap.png';

// import gameConfig from '../../../config/game.json';
// import cls from './minimap.module.css';

// const mmPatterns = gameConfig.minimapPatterns;

// function Minimap({ children, guessDisabled, imageCoordinates }) {
//     const btnRowRef = useRef();
//     const [mmCollapsed, setMmCollapsed] = useState(false);
//     const [mmPattern, setMmPattern] = useState(0);
//     const [showResults, setShowResults] = useState(false);
//     const [distance, setDistance] = useState(null);
//     const [score, setScore] = useState(null);

//     const calculateDistance = (imageCoordinates, clickedCoordinates) => {
//         // Calculate distance between image coordinates and clicked coordinates
//         const [x1, y1] = imageCoordinates;
//         const [x2, y2] = clickedCoordinates;
//         const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//         return distance;
//     };

//     const calculateScore = (distance) => {
//         // You can use any scoring formula based on proximity
//         // For example, you can give a higher score for closer guesses and lower score for farther guesses
//         const maxDistance = 100; // Define the maximum distance for the highest score
//         const minScore = 100; // Define the minimum score
//         const maxScore = 1000; // Define the maximum score
//         // Example scoring formula: Score = maxScore - (distance / maxDistance) * (maxScore - minScore)
//         const score = maxScore - (distance / maxDistance) * (maxScore - minScore);
//         return Math.round(score);
//     };

//     const handleGuess = () => {
//         if (!imageCoordinates) return;
//         // Simulate clicked coordinates (for testing purposes)
//         const clickedCoordinates = [101.90862737512538, 0.20183248484623562];
//         const distance = calculateDistance(imageCoordinates, clickedCoordinates);
//         const score = calculateScore(distance);
//         setDistance(distance);
//         setScore(score);
//         setShowResults(true);
//     };


//     return (
//         <div className={spbw('widget-group', cls.minimap)} style={{
//             '--mm-wid': mmPatterns[mmPattern].w,
//             '--mm-hgt': mmCollapsed ? window.getComputedStyle(btnRowRef.current).height : mmPatterns[mmPattern].h,
//             cursor: 'crosshair' // Apply precision pointer cursor
//         }}>
//             <div className={cls.btn_row} ref={btnRowRef}>
//                 <div>
//                     <button
//                         className={spbw('btn-game', cls.tool_btn)}
//                         onClick={() => setMmPattern(Math.min(mmPattern + 1, mmPatterns.length - 1))}
//                         title="Bigger"
//                     >
//                         <img src={biggerImg} alt="+" />
//                     </button>
//                     <button
//                         className={spbw('btn-game', cls.tool_btn)}
//                         onClick={() => setMmPattern(Math.max(mmPattern - 1, 0))}
//                         title="Smaller"
//                     >
//                         <img src={smallerImg} alt="-" />
//                     </button>
//                 </div>
//                 <div>
//                     <span className={spbw(cls.flippable, mmCollapsed && cls.flippable_flipped)}>
//                         <button
//                             className={spbw('btn-game', cls.tool_btn)}
//                             onClick={() => setMmCollapsed(!mmCollapsed)}
//                             title="Collapse"
//                         >
//                             <img src={collapseImg} alt="v" />
//                         </button>
//                     </span>
//                 </div>
//             </div>
//             <div className={cls.map}>{children}</div>
//             <div>
//                 <Button className="btn-block" disabled={guessDisabled} onClick={handleGuess}>Guess</Button>
//             </div>
//             {showResults && (
//                 <div className={cls.results}>
//                     <p>Distance: {distance}</p>
//                     <p>Score: {score}</p>
//                 </div>
//             )}
//         </div>
//     );
// }
// Minimap.propTypes = {
//     guessDisabled: PropTypes.bool,
//     imageCoordinates: PropTypes.array
// };
// Minimap.defaultProps = {
//     guessDisabled: true,
//     imageCoordinates: null
// };

// export default Minimap;

import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';

import spbw from '../../../utils/spbw';

import biggerImg from '../../../assets/img/minimap-bigger.png';
import smallerImg from '../../../assets/img/minimap-smaller.png';
import collapseImg from '../../../assets/img/toggle-minimap.png';

import gameConfig from '../../../config/game.json';
import cls from './minimap.module.css';

const mmPatterns = gameConfig.minimapPatterns;

function Minimap({ children, guessDisabled, imageCoordinates }) {
    const btnRowRef = useRef();
    const [mmCollapsed, setMmCollapsed] = useState(false);
    const [mmPattern, setMmPattern] = useState(0);

    const handleMapClick = () => {
        // Generate random distance between 100 and 4400 meters
        const distance = Math.floor(Math.random() * (1500 - 100 + 1)) + 100;
        // Calculate score based on distance
        const score = Math.max(Math.floor(100 - (distance / 15)), 1); // Max distance is 4400 meters
        // Show alert with calculated distance and score
        alert(`Your guess is ${distance} meters away! Your score is ${score}!`);
    };
    
    const handleGuess = () => {
        // Generate random distance between 100 and 4400 meters
        const distance = Math.floor(Math.random() * (1500 - 100 + 1)) + 100;
        // Calculate score based on distance
        const score = Math.max(Math.floor(100 - (distance / 15)), 1); // Max distance is 4400 meters
        // Show alert with calculated distance and score
        alert(`Your guess is ${distance} meters away! Your score is ${score}!`);
    };
    

    return (
        <div className={spbw('widget-group', cls.minimap)} style={{
            '--mm-wid': mmPatterns[mmPattern].w,
            '--mm-hgt': mmCollapsed ? window.getComputedStyle(btnRowRef.current).height : mmPatterns[mmPattern].h,
            cursor: 'crosshair' // Apply precision pointer cursor
        }}>
            <div className={cls.btn_row} ref={btnRowRef}>
                <div>
                    <button
                        className={spbw('btn-game', cls.tool_btn)}
                        onClick={() => setMmPattern(Math.min(mmPattern + 1, mmPatterns.length - 1))}
                        title="Bigger"
                    >
                        <img src={biggerImg} alt="+" />
                    </button>
                    <button
                        className={spbw('btn-game', cls.tool_btn)}
                        onClick={() => setMmPattern(Math.max(mmPattern - 1, 0))}
                        title="Smaller"
                    >
                        <img src={smallerImg} alt="-" />
                    </button>
                </div>
                <div>
                    <span className={spbw(cls.flippable, mmCollapsed && cls.flippable_flipped)}>
                        <button
                            className={spbw('btn-game', cls.tool_btn)}
                            onClick={() => setMmCollapsed(!mmCollapsed)}
                            title="Collapse"
                        >
                            <img src={collapseImg} alt="v" />
                        </button>
                    </span>
                </div>
            </div>
            <div className={cls.map} onClick={handleMapClick}>{children}</div>
            <div>
                <Button className="btn-block" disabled={guessDisabled} onClick={handleGuess}>Guess</Button>
            </div>
        </div>
    );
}
Minimap.propTypes = {
    guessDisabled: PropTypes.bool,
    imageCoordinates: PropTypes.array
};
Minimap.defaultProps = {
    guessDisabled: true,
    imageCoordinates: null
};

export default Minimap;
