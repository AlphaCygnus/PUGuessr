// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {useSelector} from 'react-redux';

// import {routes} from './router';

// function App() {
//     const acDEekrstu = useSelector(state => state.common.acDEekrstu);

//     return (
//         <div className={acDEekrstu}>
//             <BrowserRouter>
//                 <Routes>
//                     {routes.map(route => <Route key={route.path} path={route.path} element={route.element()} />)}
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { routes } from './router';

// Import the component for Geo Locator
import GeoLocator from './components/GeoLocator/GeoLocator';

function App() {
    const acDEekrstu = useSelector(state => state.common.acDEekrstu);

    return (
        <div className={acDEekrstu}>
            <BrowserRouter>
                <Routes>
                    {/* Render existing routes */}
                    {routes.map(route => (
                        <Route key={route.path} path={route.path} element={route.element()} />
                    ))}
                    
                    {/* Define route for Geo Locator */}
                    <Route path="/geolocator" element={<GeoLocator />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
