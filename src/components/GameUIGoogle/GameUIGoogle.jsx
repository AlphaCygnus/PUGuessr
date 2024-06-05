// import * as maptilersdk from '@maptiler/sdk';
// import {Wrapper} from '@googlemaps/react-wrapper';
// import PropTypes from 'prop-types';

// import Map from '../UI/Map/Map';
// import GameUI from '../GameUI/GameUI';

// import spbw from '../../utils/spbw';

// import guessPin from '../../assets/img/guess-pin.png';

// import storageConfig from '../../config/storage.json';
// import eventConfig from '../../config/events.json';
// import api from '../../config/api';

// maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';

// function GameUiGoogle({ classNames, getParams, utils, realPos, guessPos, markers, setGuessPos, setGameEnd }) {
//     return (
//         <GameUI
//             className={classNames?.game_ui}
//             utils={utils}
//             minimap={{
//                 children: <Wrapper apiKey={api.googleMapsApiKey}>
//                     <Map
//                         className={spbw(classNames?.minimap, classNames?.place_point)}
//                         options={{
//                             center: {lat: 0, lng: 0},
//                             minZoom: 2,
//                             zoom: 2,
//                             disableDefaultUI: true,
//                             mapTypeControl: true,
//                             zoomControl: true,
//                             controlSize: 30
//                         }}
//                         onMount={map => {
//                             map.addListener('click', evt => {
//                                 const pos = evt.latLng;
//                                 markers.removeAllPins();
//                                 markers.placePin(map, pos, guessPin);
//                                 setGuessPos([+pos.lat(), +pos.lng()]);
//                             });
//                         }}
//                     />
//                 </Wrapper>,
//                 guessDisabled: !guessPos,
//                 onGuess() {
//                     if (!realPos.current || !window.confirm('Are you sure?')) return;
//                     clearInterval(utils.timer.itvId);

//                     utils.timer.gts = Date.now();

//                     const last = JSON.parse(localStorage.getItem(storageConfig.hist) || '[]');
//                     const params = JSON.parse(localStorage.getItem(storageConfig.pref) || '{}');
//                     if (!params.pauseProgress) localStorage.setItem(storageConfig.hist, JSON.stringify([...last, {
//                         rg: getParams.region,
//                         gp: guessPos,
//                         rp: realPos.current,
//                         tm: utils.timer.time,
//                         dt: utils.timer.gts
//                     }]));

//                     window.onbeforeunload = null;
//                     setGameEnd(true);
//                 }
//             }}
//             buttonEvents={{
//                 quit() {
//                     window.dispatchEvent(new CustomEvent(eventConfig.gQuit));
//                 },
//                 goToStart() {
//                     if (!realPos.current) return;
//                     window.dispatchEvent(new CustomEvent(eventConfig.gGoToStart));
//                 },
//                 zoomIn() {
//                     if (!realPos.current) return;
//                     window.dispatchEvent(new CustomEvent(eventConfig.gZoomIn));
//                 },
//                 zoomOut() {
//                     if (!realPos.current) return;
//                     window.dispatchEvent(new CustomEvent(eventConfig.gZoomOut));
//                 }
//             }}
//             infoData={{
//                 region: getParams.region
//             }}
//         />
//     );
// }
// GameUiGoogle.propTypes = {
//     classNames: PropTypes.object.isRequired,
//     getParams: PropTypes.object.isRequired,
//     utils: PropTypes.object.isRequired,
//     realPos: PropTypes.object.isRequired,
//     guessPos: PropTypes.array,
//     markers: PropTypes.object.isRequired,
//     setGuessPos: PropTypes.func.isRequired,
//     setGameEnd: PropTypes.func.isRequired
// };

// export default GameUiGoogle;


// import React from 'react';
// import * as maptilersdk from '@maptiler/sdk';
// import PropTypes from 'prop-types';

// import GameUI from '../GameUI/GameUI';
// import guessPin from '../../assets/img/guess-pin.png';
// import storageConfig from '../../config/storage.json';
// import eventConfig from '../../config/events.json';
// import UniversityMap from '../../components/UniversityMap/UniversityMap';

// maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';

// function GameUiGoogle({ classNames, getParams, utils, realPos, guessPos, markers, setGuessPos, setGameEnd }) {
//   const handleMapClick = (pos) => {
//     markers.removeAllPins();
//     markers.placePin(pos, guessPin);
//     setGuessPos(pos);
//   };

//   const handleGuess = () => {
//     if (!realPos.current || !window.confirm('Are you sure?')) return;
//     clearInterval(utils.timer.itvId);
//     utils.timer.gts = Date.now();

//     const last = JSON.parse(localStorage.getItem(storageConfig.hist) || '[]');
//     const params = JSON.parse(localStorage.getItem(storageConfig.pref) || '{}');
//     if (!params.pauseProgress)
//       localStorage.setItem(storageConfig.hist, JSON.stringify([...last, {
//         rg: getParams.region,
//         gp: guessPos,
//         rp: realPos.current,
//         tm: utils.timer.time,
//         dt: utils.timer.gts
//       }]));

//     window.onbeforeunload = null;
//     setGameEnd(true);
//   };

//   return (
//     <GameUI
//       className={classNames?.game_ui}
//       utils={utils}
//       minimap={{
//         children: (
//           <UniversityMap
//             onMapClick={handleMapClick}
//             guessPos={guessPos}
//             guessPinImage={guessPin}
//           />
//         ),
//         guessDisabled: !guessPos,
//         onGuess: handleGuess,
//       }}
//       buttonEvents={{
//         quit: () => window.dispatchEvent(new CustomEvent(eventConfig.gQuit)),
//         goToStart: () => {
//           if (!realPos.current) return;
//           window.dispatchEvent(new CustomEvent(eventConfig.gGoToStart));
//         },
//         zoomIn: () => {
//           if (!realPos.current) return;
//           window.dispatchEvent(new CustomEvent(eventConfig.gZoomIn));
//         },
//         zoomOut: () => {
//           if (!realPos.current) return;
//           window.dispatchEvent(new CustomEvent(eventConfig.gZoomOut));
//         },
//       }}
//       infoData={{
//         region: getParams.region
//       }}
//     />
//   );
// }

// GameUiGoogle.propTypes = {
//   classNames: PropTypes.object.isRequired,
//   getParams: PropTypes.object.isRequired,
//   utils: PropTypes.object.isRequired,
//   realPos: PropTypes.object.isRequired,
//   guessPos: PropTypes.array,
//   markers: PropTypes.object.isRequired,
//   setGuessPos: PropTypes.func.isRequired,
//   setGameEnd: PropTypes.func.isRequired
// };

// export default GameUiGoogle;

// import React, { useEffect } from 'react';
// import * as maptilersdk from '@maptiler/sdk';
// import PropTypes from 'prop-types';

// import GameUI from '../GameUI/GameUI';
// import guessPin from '../../assets/img/guess-pin.png';
// import storageConfig from '../../config/storage.json';
// import eventConfig from '../../config/events.json';
// import UniversityMap from '../../components/UniversityMap/UniversityMap';

// function GameUiGoogle({ classNames, getParams, utils, realPos, guessPos, markers, setGuessPos, setGameEnd }) {
//   useEffect(() => {
//     // Initialize MapTiler SDK
//     maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';
//   }, []);

//   const handleMapClick = (pos) => {
//     if (markers && markers.removeAllPins && markers.placePin) {
//       markers.removeAllPins();
//       markers.placePin(pos, guessPin);
//       setGuessPos(pos);
//     }
//   };

//   const handleGuess = () => {
//     if (!realPos.current || !window.confirm('Are you sure?')) return;
//     clearInterval(utils.timer.itvId);
//     utils.timer.gts = Date.now();

//     const last = JSON.parse(localStorage.getItem(storageConfig.hist) || '[]');
//     const params = JSON.parse(localStorage.getItem(storageConfig.pref) || '{}');
//     if (!params.pauseProgress)
//       localStorage.setItem(storageConfig.hist, JSON.stringify([...last, {
//         rg: getParams.region,
//         gp: guessPos,
//         rp: realPos.current,
//         tm: utils.timer.time,
//         dt: utils.timer.gts
//       }]));

//     window.onbeforeunload = null;
//     setGameEnd(true);
//   };

//   return (
//     <GameUI
//       className={classNames?.game_ui}
//       utils={utils}
//       minimap={{
//         children: (
//           <UniversityMap
//             onMapClick={handleMapClick}
//             guessPos={guessPos}
//             guessPinImage={guessPin}
//           />
//         ),
//         guessDisabled: !guessPos,
//         onGuess: handleGuess,
//       }}
//       buttonEvents={{
//         quit: () => window.dispatchEvent(new CustomEvent(eventConfig.gQuit)),
//         goToStart: () => {
//           if (!realPos.current) return;
//           window.dispatchEvent(new CustomEvent(eventConfig.gGoToStart));
//         },
//         zoomIn: () => {
//           if (!realPos.current) return;
//           window.dispatchEvent(new CustomEvent(eventConfig.gZoomIn));
//         },
//         zoomOut: () => {
//           if (!realPos.current) return;
//           window.dispatchEvent(new CustomEvent(eventConfig.gZoomOut));
//         },
//       }}
//       infoData={{
//         region: getParams.region
//       }}
//     />
//   );
// }

// GameUiGoogle.propTypes = {
//   classNames: PropTypes.object.isRequired,
//   getParams: PropTypes.object.isRequired,
//   utils: PropTypes.object.isRequired,
//   realPos: PropTypes.object.isRequired,
//   guessPos: PropTypes.array,
//   markers: PropTypes.object.isRequired,
//   setGuessPos: PropTypes.func.isRequired,
//   setGameEnd: PropTypes.func.isRequired
// };

// export default GameUiGoogle;

// import React, { useEffect } from 'react';
// import * as maptilersdk from '@maptiler/sdk';
// import PropTypes from 'prop-types';

// import GameUI from '../GameUI/GameUI';
// import guessPin from '../../assets/img/guess-pin.png';
// import storageConfig from '../../config/storage.json';
// import eventConfig from '../../config/events.json';
// import UniversityMap from '../../components/UniversityMap/UniversityMap';

// function GameUiGoogle({ classNames, getParams, utils, realPos, guessPos, markers, setGuessPos, setGameEnd }) {
//   useEffect(() => {
//     // Initialize MapTiler SDK
//     maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';
//   }, []);

//   const handleMapClick = (lngLat) => {
//     if (markers && markers.removeAllPins && markers.placePin) {
//       markers.removeAllPins();
//       const pos = [lngLat.lng, lngLat.lat]; // Extract lng and lat from LngLat object
//       markers.placePin(pos, guessPin);
//       setGuessPos(pos);
//     }
//   };
  

//   const handleGuess = () => {
//     if (!realPos.current || !window.confirm('Are you sure?')) return;
//     clearInterval(utils.timer.itvId);
//     utils.timer.gts = Date.now();

//     const last = JSON.parse(localStorage.getItem(storageConfig.hist) || '[]');
//     const params = JSON.parse(localStorage.getItem(storageConfig.pref) || '{}');
//     if (!params.pauseProgress)
//       localStorage.setItem(storageConfig.hist, JSON.stringify([...last, {
//         rg: getParams.region,
//         gp: guessPos,
//         rp: realPos.current,
//         tm: utils.timer.time,
//         dt: utils.timer.gts
//       }]));

//     window.onbeforeunload = null;
//     setGameEnd(true);
//   };

//   return (
//     <GameUI
//       className={classNames?.game_ui}
//       utils={utils}
//       minimap={{
//         children: (
//           <UniversityMap
//             onMapClick={handleMapClick}
//             guessPos={guessPos}
//             guessPinImage={guessPin}
//           />
//         ),
//         guessDisabled: !guessPos,
//         onGuess: handleGuess,
//       }}
//       buttonEvents={{
//         quit: () => window.dispatchEvent(new CustomEvent(eventConfig.gQuit)),
//         goToStart: () => {
//           if (!realPos.current) return;
//           window.dispatchEvent(new CustomEvent(eventConfig.gGoToStart));
//         },
//         zoomIn: () => {
//           if (!realPos.current) return;
//           window.dispatchEvent(new CustomEvent(eventConfig.gZoomIn));
//         },
//         zoomOut: () => {
//           if (!realPos.current) return;
//           window.dispatchEvent(new CustomEvent(eventConfig.gZoomOut));
//         },
//       }}
//       infoData={{
//         region: getParams.region
//       }}
//     />
//   );
// }

// GameUiGoogle.propTypes = {
//   classNames: PropTypes.object.isRequired,
//   getParams: PropTypes.object.isRequired,
//   utils: PropTypes.object.isRequired,
//   realPos: PropTypes.object.isRequired,
//   guessPos: PropTypes.array,
//   markers: PropTypes.object.isRequired,
//   setGuessPos: PropTypes.func.isRequired,
//   setGameEnd: PropTypes.func.isRequired
// };

// export default GameUiGoogle;

// import React, { useEffect } from 'react';
// import * as maptilersdk from '@maptiler/sdk';
// import PropTypes from 'prop-types';

// import GameUI from '../GameUI/GameUI';
// import guessPin from '../../assets/img/guess-pin.png';
// import storageConfig from '../../config/storage.json';
// import eventConfig from '../../config/events.json';
// import UniversityMap from '../../components/UniversityMap/UniversityMap';

// function GameUiGoogle({ classNames, getParams, utils, realPos, guessPos, markers, setGuessPos, setGameEnd }) {
//   useEffect(() => {
//     // Initialize MapTiler SDK
//     maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';
//   }, []);

//   const handleMapClick = (mapMouseEvent) => {
//     console.log('Map click event:', mapMouseEvent);
    
//     if (markers && markers.removeAllPins && markers.placePin && mapMouseEvent.lngLat) {
//       markers.removeAllPins();
//       const lngLat = mapMouseEvent.lngLat;
//       const pos = [lngLat.lng, lngLat.lat]; // Extract lng and lat from LngLat object
//       console.log('Coordinates:', pos);
//       markers.placePin(pos, guessPin);
//       setGuessPos(pos);
//     }
//   };
  
//   const handleGuess = () => {
//     if (!realPos.current || !window.confirm('Are you sure?')) return;
//     clearInterval(utils.timer.itvId);
//     utils.timer.gts = Date.now();

//     const last = JSON.parse(localStorage.getItem(storageConfig.hist) || '[]');
//     const params = JSON.parse(localStorage.getItem(storageConfig.pref) || '{}');
//     if (!params.pauseProgress)
//       localStorage.setItem(storageConfig.hist, JSON.stringify([...last, {
//         rg: getParams.region,
//         gp: guessPos,
//         rp: realPos.current,
//         tm: utils.timer.time,
//         dt: utils.timer.gts
//       }]));

//     window.onbeforeunload = null;
//     setGameEnd(true);
//   };

//   // const handleGuess = () => {
//   //   console.log("Guess button is clicked!");
//   //   alert("It is time.");
//   // }

//   return (
//     <GameUI
//       className={classNames?.game_ui}
//       utils={utils}
//       minimap={{
//         children: (
//           <UniversityMap
//             onMapClick={handleMapClick}
//             guessPos={guessPos}
//             guessPinImage={guessPin}
//           />
//         ),
//         guessDisabled: !guessPos,
//         onGuess: handleGuess,
//       }}
//       buttonEvents={{
//         quit: () => window.dispatchEvent(new CustomEvent(eventConfig.gQuit)),
//         goToStart: () => {
//           if (!realPos.current) return;
//           window.dispatchEvent(new CustomEvent(eventConfig.gGoToStart));
//         },
//         zoomIn: () => {
//           if (!realPos.current) return;
//           window.dispatchEvent(new CustomEvent(eventConfig.gZoomIn));
//         },
//         zoomOut: () => {
//           if (!realPos.current) return;
//           window.dispatchEvent(new CustomEvent(eventConfig.gZoomOut));
//         },
//       }}
//       infoData={{
//         region: getParams.region
//       }}
//     />
//   );
// }

// GameUiGoogle.propTypes = {
//   classNames: PropTypes.object.isRequired,
//   getParams: PropTypes.object.isRequired,
//   utils: PropTypes.object.isRequired,
//   realPos: PropTypes.object.isRequired,
//   guessPos: PropTypes.array,
//   markers: PropTypes.object.isRequired,
//   setGuessPos: PropTypes.func.isRequired,
//   setGameEnd: PropTypes.func.isRequired
// };

// export default GameUiGoogle;

import React, { useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import PropTypes from 'prop-types';

import GameUI from '../GameUI/GameUI';
import guessPin from '../../assets/img/guess-pin.png';
import storageConfig from '../../config/storage.json';
import eventConfig from '../../config/events.json';
import UniversityMap from '../../components/UniversityMap/UniversityMap';

function GameUiGoogle({ classNames, getParams, utils, realPos, guessPos, markers, setGuessPos, setGameEnd }) {
  useEffect(() => {
    // Initialize MapTiler SDK
    maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';
  }, []);

  const handleMapClick = (mapMouseEvent) => {
    console.log('Map click event:', mapMouseEvent);
    
    if (markers && markers.removeAllPins && markers.placePin && mapMouseEvent.lngLat) {
      markers.removeAllPins();
      const lngLat = mapMouseEvent.lngLat;
      const pos = [lngLat.lng, lngLat.lat]; // Extract lng and lat from LngLat object
      console.log('Coordinates:', pos);
      markers.placePin(pos, guessPin);
      setGuessPos(pos);
    }
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
    <GameUI
      className={classNames?.game_ui}
      utils={utils}
      minimap={{
        children: (
          <UniversityMap
            onMapClick={handleMapClick}
            guessPos={guessPos}
            guessPinImage={guessPin}
          />
        ),
        guessDisabled: !guessPos,
        onGuess: handleGuess,
      }}
      buttonEvents={{
        quit: () => window.dispatchEvent(new CustomEvent(eventConfig.gQuit)),
        goToStart: () => {
          if (!realPos.current) return;
          window.dispatchEvent(new CustomEvent(eventConfig.gGoToStart));
        },
        zoomIn: () => {
          if (!realPos.current) return;
          window.dispatchEvent(new CustomEvent(eventConfig.gZoomIn));
        },
        zoomOut: () => {
          if (!realPos.current) return;
          window.dispatchEvent(new CustomEvent(eventConfig.gZoomOut));
        },
      }}
      infoData={{
        region: getParams.region
      }}
    />
  );
}

GameUiGoogle.propTypes = {
  classNames: PropTypes.object.isRequired,
  getParams: PropTypes.object.isRequired,
  utils: PropTypes.object.isRequired,
  realPos: PropTypes.object.isRequired,
  guessPos: PropTypes.array,
  markers: PropTypes.object.isRequired,
  setGuessPos: PropTypes.func.isRequired,
  setGameEnd: PropTypes.func.isRequired
};

export default GameUiGoogle;
