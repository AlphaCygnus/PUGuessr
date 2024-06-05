// import {useState, useRef, useEffect} from 'react';

// import GameResultsGoogle from '../../components/GameResultsGoogle/GameResultsGoogle';
// import GameUIGoogle from '../../components/GameUIGoogle/GameUIGoogle';
// import Photo1 from '../../components/Images/20231016_082924crop.jpg';
// import Photo2 from '../../components/Images/20231017_114106crop.jpg';
// import Photo3 from '../../components/Images/20231017_164049crop.jpg';
// import Photo4 from '../../components/Images/20231017_165012.jpg';
// import Photo5 from '../../components/Images/20231017_165244crop.jpg';
// import Photo6 from '../../components/Images/20231017_165442crop.jpg';
// import Photo7 from '../../components/Images/20231017_165749crop.jpg';
// import Photo8 from '../../components/Images/20231124_100139crop.jpg';

// import UniversityMap from '../../components/UniversityMap/UniversityMap';

// import readableTime from '../../utils/readable/readable-time';
// import mapMarkers from '../../utils/map-markers';

// import eventConfig from '../../config/events.json';
// import cls from './game.module.css';
// import PanoramaCustom from '../../components/Images/PanoramaCustom';

// window.addEventListener(eventConfig.gQuit, () => {
//     window.location.href = '/';
// });

// function Game() {
//     const getParams = ['region', 'timer', 'compass'].reduce(
//         (res, curr) => ({
//             ...res,
//             params: {
//                 ...res.params,
//                 [curr]: res.native.get(curr)
//             }
//         }),
//         {params: {}, native: new URLSearchParams(window.location.search)}
//     ).params;

//     const utils = useRef({
//         compass: {
//             shown: getParams.compass === 'on',
//             setAngle(angle) {
//                 if (this.ref?.current) this.ref.current.style.transform = `rotate(${angle}deg)`;
//             }
//         },
//         timer: {
//             shown: getParams.timer === 'on',
//             time: 0,
//             gts: -Infinity,
//             itvId: -1,
//             nextSec() {
//                 this.time++;
//                 if (this.ref?.current) this.ref.current.innerHTML = readableTime(this.time);
//             }
//         }
//     }).current;
//     utils.compass.ref = useRef();
//     utils.timer.ref = useRef();

//     const markers = useRef(mapMarkers()).current;

//     const realPos = useRef(null);
//     const [guessPos, setGuessPos] = useState(null);
//     const [gameEnd, setGameEnd] = useState(false);

//     useEffect(() => {
//         window.onbeforeunload = () => true;
//     }, []);


//     useEffect(() => {
//         // Start the timer if it's enabled
//         if (utils.timer.shown) {
//             utils.timer.itvId = setInterval(() => {
//                 utils.timer.nextSec(); // Invoke nextSec to update the timer
//             }, 1000);
//         }
    
//         // Clean up the interval on unmount or when the game ends
//         return () => {
//             clearInterval(utils.timer.itvId);
//         };
//     }, [utils.timer.shown]);


//     return (
//         <div className={cls.game}>
//             {gameEnd
//                 ? <GameResultsGoogle
//                     classNames={{minimap: cls.minimap}}
//                     {...{getParams, utils, realPos, guessPos, markers}}
//                 />
//                 : <>
//                     <GameUIGoogle
//                         classNames={{game_ui: cls.ui, minimap: cls.minimap, place_point: cls.place_point}}
//                         {...{getParams, utils, realPos, guessPos, markers, setGuessPos, setGameEnd}}
//                         UniversityMapComponent={<UniversityMap />}
//                     />

//                 <div className={cls.fullScreenImages}>    
//                     <PanoramaCustom
//                         className={`${cls.pano} ${cls.minimap} ${cls.fullScreenImage}`}
//                         {...{getParams, utils, realPos}}
//                         photo={[Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8]}
//                     />
//                 </div>
//                 {/* <div className={cls.bottomRightMap}>  

//                     <UniversityMap /> 

//                 </div>   */}
//                 </>
//             }
//         </div>
//     );
// }

// export default Game;


// import {useState, useRef, useEffect} from 'react';

// import GameResultsGoogle from '../../components/GameResultsGoogle/GameResultsGoogle';
// import GameUIGoogle from '../../components/GameUIGoogle/GameUIGoogle';
// import UniversityMap from '../../components/UniversityMap/UniversityMap';
// import PanoramaCustom from '../../components/Images/PanoramaCustom';
// import readableTime from '../../utils/readable/readable-time';
// import mapMarkers from '../../utils/map-markers';
// import eventConfig from '../../config/events.json';
// import cls from './game.module.css';

// import Photo1 from '../../components/Images/20231016_082924crop.jpg';
// import Photo2 from '../../components/Images/20231017_114106crop.jpg';
// import Photo3 from '../../components/Images/20231017_164049crop.jpg';
// import Photo4 from '../../components/Images/20231017_165012.jpg';
// import Photo5 from '../../components/Images/20231017_165244crop.jpg';
// import Photo6 from '../../components/Images/20231017_165442crop.jpg';
// import Photo7 from '../../components/Images/20231017_165749crop.jpg';
// import Photo8 from '../../components/Images/20231124_100139crop.jpg';

// window.addEventListener(eventConfig.gQuit, () => {
//     window.location.href = '/';
// });

// function Game() {
//     const getParams = ['region', 'timer', 'compass'].reduce(
//         (res, curr) => ({
//             ...res,
//             params: {
//                 ...res.params,
//                 [curr]: res.native.get(curr)
//             }
//         }),
//         {params: {}, native: new URLSearchParams(window.location.search)}
//     ).params;

//     const utils = useRef({
//         compass: {
//             shown: getParams.compass === 'on',
//             setAngle(angle) {
//                 if (this.ref?.current) this.ref.current.style.transform = `rotate(${angle}deg)`;
//             }
//         },
//         timer: {
//             shown: getParams.timer === 'on',
//             time: 0,
//             gts: -Infinity,
//             itvId: -1,
//             nextSec() {
//                 this.time++;
//                 if (this.ref?.current) this.ref.current.innerHTML = readableTime(this.time);
//             }
//         }
//     }).current;
//     utils.compass.ref = useRef();
//     utils.timer.ref = useRef();

//     const markers = useRef(mapMarkers()).current;

//     const realPos = useRef(null);
//     const [guessPos, setGuessPos] = useState(null);
//     const [gameEnd, setGameEnd] = useState(false);

//     useEffect(() => {
//         window.onbeforeunload = () => true;
//     }, []);


//     useEffect(() => {
//         // Start the timer if it's enabled
//         if (utils.timer.shown) {
//             utils.timer.itvId = setInterval(() => {
//                 utils.timer.nextSec(); // Invoke nextSec to update the timer
//             }, 1000);
//         }
    
//         // Clean up the interval on unmount or when the game ends
//         return () => {
//             clearInterval(utils.timer.itvId);
//         };
//     }, [utils.timer.shown]);

//     const images = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8];
//     // Shuffle the array of images
//     const shuffledImages = [...images].sort(() => Math.random() - 0.5);

//     return (
//         <div className={cls.game}>
//             {gameEnd
//                 ? <GameResultsGoogle
//                     classNames={{minimap: cls.minimap}}
//                     {...{getParams, utils, realPos, guessPos, markers}}
//                 />
//                 : <>
//                     <GameUIGoogle
//                         classNames={{game_ui: cls.ui, minimap: cls.minimap, place_point: cls.place_point}}
//                         {...{getParams, utils, realPos, guessPos, markers, setGuessPos, setGameEnd}}
//                         UniversityMapComponent={<UniversityMap />}
//                     />

//                 <div className={cls.fullScreenImages}>    
//                     <PanoramaCustom
//                         className={`${cls.pano} ${cls.minimap} ${cls.fullScreenImage}`}
//                         {...{getParams, utils, realPos}}
//                         photo={shuffledImages}
//                     />
//                 </div>
//                 </>
//             }
//         </div>
//     );
// }

// export default Game;

import { useState, useRef, useEffect } from 'react';

import GameResultsGoogle from '../../components/GameResultsGoogle/GameResultsGoogle';
import GameUIGoogle from '../../components/GameUIGoogle/GameUIGoogle';
import UniversityMap from '../../components/UniversityMap/UniversityMap';
import PanoramaCustom from '../../components/Images/PanoramaCustom';
import readableTime from '../../utils/readable/readable-time';
import mapMarkers from '../../utils/map-markers';
import eventConfig from '../../config/events.json';
import cls from './game.module.css';

import Photo1 from '../../components/Images/20231016_082924crop.jpg';
import Photo2 from '../../components/Images/20231017_114106crop.jpg';
import Photo3 from '../../components/Images/20231017_164049crop.jpg';
import Photo4 from '../../components/Images/20231017_165012crop.jpg';
import Photo5 from '../../components/Images/20231017_165244crop.jpg';
import Photo6 from '../../components/Images/20231017_165442crop.jpg';
import Photo7 from '../../components/Images/20231017_165749crop.jpg';
import Photo8 from '../../components/Images/20231124_100139crop.jpg';
import Photo9 from '../../components/Images/20240519_075358crop.jpg';
import Photo10 from '../../components/Images/20240519_074929crop.jpg';
import Photo11 from '../../components/Images/20240519_074618crop.jpg';
import Photo12 from '../../components/Images/20240516_182527crop.jpg';

window.addEventListener(eventConfig.gQuit, () => {
    window.location.href = '/';
});

function Game() {
    const getParams = ['region', 'timer', 'compass'].reduce(
        (res, curr) => ({
            ...res,
            params: {
                ...res.params,
                [curr]: res.native.get(curr)
            }
        }),
        { params: {}, native: new URLSearchParams(window.location.search) }
    ).params;

    const utils = useRef({
        compass: {
            shown: getParams.compass === 'on',
            setAngle(angle) {
                if (this.ref?.current) this.ref.current.style.transform = `rotate(${angle}deg)`;
            }
        },
        timer: {
            shown: getParams.timer === 'on',
            time: 0,
            gts: -Infinity,
            itvId: -1,
            nextSec() {
                this.time++;
                if (this.ref?.current) this.ref.current.innerHTML = readableTime(this.time);
            }
        }
    }).current;
    utils.compass.ref = useRef();
    utils.timer.ref = useRef();

    const markers = useRef(mapMarkers()).current;

    const realPos = useRef(null);
    const [guessPos, setGuessPos] = useState(null);
    const [gameEnd, setGameEnd] = useState(false);

    useEffect(() => {
        window.onbeforeunload = () => true;
    }, []);

    useEffect(() => {
        // Start the timer if it's enabled
        if (utils.timer.shown) {
            utils.timer.itvId = setInterval(() => {
                utils.timer.nextSec(); // Invoke nextSec to update the timer
            }, 1000);
        }

        // Clean up the interval on unmount or when the game ends
        return () => {
            clearInterval(utils.timer.itvId);
        };
    }, [utils.timer.shown]);

    const images = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, Photo10, Photo11, Photo12];

    // Manually entering the coordinates of each image
    const imageCoordinates = [
        [79.84852351247221, 12.029272152333334], // Coordinates for Photo1
        [79.8479708, 12.0290034], // Coordinates for Photo2
        [79.8542344784798, 12.019106478412413], 
        [79.85265947222221, 12.022997277777778],
        [79.8515566, 12.0273078],
        [79.8508466, 12.0256042],
        [79.8515566, 12.0273078],
        [79.85240470740544, 12.029327856990944]// Coordinates for Photo8
    ];

    // Shuffling the array of images
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);

    const handleMapClick = (clickedCoordinates) => {
        // Calculating the distance between clicked coordinates and coordinates of the shown image
        const distance = calculateDistance(clickedCoordinates, realPos.current);

        // Calculating score based on distance
        const score = calculateScore(distance);

        // Show score in console
        console.log('Distance:', distance, 'm');
        console.log('Score:', score);

    };


    const calculateDistance = (coordinates1, coordinates2) => {
        // Formula to calculate distance between two coordinates on Earth
        const rad = (x) => (x * Math.PI) / 180;
        const R = 6378137; // Earth’s mean radius in meter
        const dLat = rad(coordinates2[1] - coordinates1[1]);
        const dLong = rad(coordinates2[0] - coordinates1[0]);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(coordinates1[1])) *
                Math.cos(rad(coordinates2[1])) *
                Math.sin(dLong / 2) *
                Math.sin(dLong / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance; // Distance in meter
    };

    const calculateScore = (distance) => {
        const maxDistance = 10000;
        const minDistance = 0;
        const maxScore = 100;
        const minScore = 0;

        // Calculate the score based on the distance
        const score =
            maxScore - ((distance - minDistance) / (maxDistance - minDistance)) * (maxScore - minScore);
        return score;
    };

    return (
        <div className={cls.game}>
            {gameEnd ? (
                <GameResultsGoogle
                    classNames={{ minimap: cls.minimap }}
                    {...{ getParams, utils, realPos, guessPos, markers }}
                />
            ) : (
                <>
                    <GameUIGoogle
                        classNames={{ game_ui: cls.ui, minimap: cls.minimap, place_point: cls.place_point }}
                        {...{
                            getParams,
                            utils,
                            realPos,
                            guessPos,
                            markers,
                            setGuessPos,
                            setGameEnd
                        }}
                        UniversityMapComponent={<UniversityMap />}
                        onMapClick={handleMapClick}
                    />

                    <div className={cls.fullScreenImages}>
                        <PanoramaCustom
                            className={`${cls.pano} ${cls.minimap} ${cls.fullScreenImage}`}
                            {...{ getParams, utils, realPos }}
                            photo={shuffledImages}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Game;
