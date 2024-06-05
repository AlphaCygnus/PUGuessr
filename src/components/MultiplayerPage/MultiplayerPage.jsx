import React from 'react';
import { Link } from 'react-router-dom';

import CreateLobbyModal from './components/Lobby/CreateLobbyModal';
import JoinLobbyModal from './components/Lobby/JoinLobbyModal';

function GeoLocatorInterface() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
                <CreateLobbyModal />
                <JoinLobbyModal />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2>Welcome to Geo Locator</h2>
                <p>Geo Locator is a free-to-play Geoguessr clone.</p>
                <p>It is an open-source and free-to-play alternative to the game Geoguessr.</p>
                <p>To play, you need a Google API key. You can either create your own key or use the provided one.</p>
                <p>View the source code on the <a href="https://github.com/RasterCrow/Geo-Locator" target="_blank" rel="noopener noreferrer">Github page</a>.</p>
                <p>If you like the project, consider supporting the developer by <a href="https://www.buymeacoffee.com/rastercrow" target="_blank" rel="noopener noreferrer">buying them a slice of pizza 🍕</a>.</p>
            </div>
            <hr style={{ width: "70%" }} />
            <p style={{ textAlign: "center" }}>Made with 💖 by <a href="https://rastercrow.me/" target="_blank" rel="noopener noreferrer">RasterCrow</a></p>
            <div style={{ textAlign: "center" }}>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
}

export default GeoLocatorInterface;
