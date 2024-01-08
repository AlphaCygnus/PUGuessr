import React from 'react';
import * as maptilersdk from '@maptiler/sdk';
import PropTypes from 'prop-types';

import GameUI from '../GameUI/GameUI';
import guessPin from '../../assets/img/guess-pin.png';
import storageConfig from '../../config/storage.json';
import eventConfig from '../../config/events.json';
import UniversityMap from '../../components/UniversityMap/UniversityMap';

maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';

function GameUiGoogle({ classNames, getParams, utils, realPos, guessPos, markers, setGuessPos, setGameEnd }) {
  const handleMapClick = (pos) => {
    markers.removeAllPins();
    markers.placePin(pos, guessPin);
    setGuessPos(pos);
  };

  const handleGuess = () => {
    if (!realPos.current || !window.confirm('Are you sure?')) return;
    clearInterval(utils.timer.itvId);
    utils.timer.gts = Date.now();

    const last = JSON.parse(localStorage.getItem(storageConfig.hist) || '[]');
    const params = JSON.parse(localStorage.getItem(storageConfig.pref) || '{}');
    if (!params.pauseProgress)
      localStorage.setItem(storageConfig.hist, JSON.stringify([...last, {
        rg: getParams.region,
        gp: guessPos,
        rp: realPos.current,
        tm: utils.timer.time,
        dt: utils.timer.gts
      }]));

    window.onbeforeunload = null;
    setGameEnd(true);
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
