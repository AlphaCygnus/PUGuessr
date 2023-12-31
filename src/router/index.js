import Home from "../pages/Home/Home";
import Stats from '../pages/Stats/Stats';
import Game from "../pages/Game/Game";
import UniversityMap from '../components/UniversityMap/UniversityMap';

export const routes = [
    {path: '/', element: () => <Home />},
    {path: '/stats', element: () => <Stats />},
    {path: '/game', element: () => <Game />},
    { path: '/university-map', element: () => <UniversityMap /> }
];
