import React, { useState, useContext } from "react";

import {
  Button,
  Form,
  FormGroup,
  FormControlLabel,
  FormControl,
  HelpBlock,
  Modal,
  Notification,
  IconButton,
  Icon,
  ButtonGroup,
  Toggle 
} from "rsuite";
import { useNavigate } from "react-router-dom";
import { createLobby, GameContext } from "../../providers/GameProvider";
import { AuthContext } from "../../providers/Auth";
import gamemodes from "../../utilities/gamemods.json";
import GameModeMap from "./GameModeMap";
import { InfoRound } from '@rsuite/icons';

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function checkData(username, timeLimit, rounds, APIKey, gameMap) {
  if (username == undefined || username.length < 2 || username.length > 25) {
    Notification["warning"]({
      title: "Warning",
      description: "Username must be between 2 and 25 letters.",
    });
    return false;
  }

  if (rounds < 2 || rounds == undefined || rounds > 20) {
    Notification["warning"]({
      title: "Warning",
      description: "Rounds must be between 2 and 20.",
    });
    return false;
  }
  if (timeLimit < 1 || timeLimit == undefined || timeLimit > 20) {
    Notification["warning"]({
      title: "Warning",
      description: "Time limit must be between 1 and 20 minutes.",
    });
    return false;
  }
  //check if api key was inserted
  if (APIKey === undefined || APIKey.length < 10) {
    Notification["warning"]({
      title: "Warning",
      description: "You must insert a valid API Key.",
    });
    return false;
  }
  return true;
}

export default function CreateLobbyModal(props) {
  const { setCustomAPIKey } = useContext(GameContext);
  const { createUser } = useContext(AuthContext);
  const history = useNavigate();

  const [timeLimit, setTimeLimit] = useState(60);
  const [open, setOpen] = useState(false);
  const [rounds, setRounds] = useState(5);
  const [username, setUsername] = useState("");
  const [APIKey, setAPIKey] = useState("");
  const [gameMap, setGameMap] = useState("07");
  
  const [defaultApiToggle, setDefaultApiToggle] = useState(true);
  
  const handleOpen = (open) => {
    setOpen(open);
  };

  const selectGameMode = (id) => {
    setGameMap(id);
  };


  const handleCreateLobby = (evt) => {
    evt.preventDefault();
    //create user
    //create random ID
    let ID = uuidv4();
    //save user on context
    let keyToUse = '';
    if(defaultApiToggle) 
    keyToUse= 'AIzaSyCCDLxCalH5m6iRxdyz9QyN1cRiGhUJ-K4';
    else keyToUse= APIKey;
    if (checkData(username, timeLimit / 60, rounds, keyToUse, gameMap)) {
      createUser(username, ID).then((user) => {
        //create lobby
        setCustomAPIKey(keyToUse);
        createLobby(
          user,
          parseInt(rounds),
          parseInt(timeLimit),
          keyToUse,
          gameMap
        ).then((res) => {
          history.push(`/lobby/${res}`);
        });
      });
    }
  };
  return (
    <div>
      <Modal show={open} onHide={() => handleOpen(false)} size="md">
        <Modal.Header>
          <Modal.Title>Create Lobby</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form autoComplete="off" fluid>
            <div style={{ display: "flex", gap: "30px" }}>
              <div style={{ width: "40%", margin: "auto" }}>
                <Form.Group>
                  <Form.ControlLabel>Username</Form.ControlLabel>
                  <Form.Control
                    name="username"
                    type="text"
                    value={username}
                    min={2}
                    max={25}
                    onChange={(e) => setUsername(e)}
                  />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Rounds</Form.ControlLabel>
                  <Form.Control
                    name="rounds"
                    type="number"
                    value={rounds}
                    min={2}
                    max={20}
                    step={1}
                    onChange={(e) => setRounds(e)}
                  />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Time Limit ( min )</Form.ControlLabel>
                  <Form.Control
                    name="time_limit"
                    type="number"
                    value={timeLimit / 60}
                    onChange={(e) => setTimeLimit(e * 60)}
                    min={1}
                    max={20}
                    step={1}
                  />
                  <Form.HelpText>Required</Form.HelpText>
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>
                    Google API KEY
                    <a
                      style={{ marginLeft: "5px" }}
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/RasterCrow/Geo-Locator/wiki"
                    >
                      <IconButton
                        onClick={() => {}}
                        icon={<InfoRound />}
                        circle
                        size="md"
                      />
                    </a>
                  </Form.ControlLabel>
                  
                  <p
                  style={{
                   display : 'flex',
                   gap:'15px',
                   marginLeft:'10px',
                   marginBottom : '10px'
                  }}
                >
                Use free API Key 
                  <Toggle checked={defaultApiToggle} onChange={(checked)=> setDefaultApiToggle(checked)}/>
                  </p>
                  
                  {!defaultApiToggle &&
                  <>
                  <Form.Control
                    name="API_KEY"
                    type="text"
                    value={APIKey}
                    min={30}
                    max={45}
                    onChange={(e) => setAPIKey(e)}
                  />
                   <Form.HelpText>Required</Form.HelpText></>
                  }
                </Form.Group>
              </div>
              <div style={{ width: "60%" }}>
                <p
                  style={{
                    textAlign: "center",
                    marginBottom: "15px",
                    fontWeight: "bold",
                    fontSize: "1.2em",
                  }}
                >
                  Maps
                </p>

                <ButtonGroup
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    maxHeight: "500px",
                    gap: "10px",
                    overflowY: "auto",
                  }}
                >
                  {Object.values(gamemodes).map((gamemode) => {
                    return (
                      <GameModeMap
                        selected={gameMap}
                        available={gamemode.available}
                        title={gamemode.title}
                        image={gamemode.image}
                        id={gamemode.id}
                        key={gamemode.id}
                        selectGameMode={selectGameMode}
                      />
                    );
                  })}
                </ButtonGroup>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="primary" onClick={handleCreateLobby}>
            Create
          </Button>
          <Button onClick={() => handleOpen(false)} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Button style={{ fontSize: "1.3em" }} onClick={() => handleOpen(true)}>
        Create Lobby
      </Button>
    </div>
  );
}
