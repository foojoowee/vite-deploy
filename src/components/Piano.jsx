import Key from "./Key"
import closeIcon from '../assets/close-icon.svg'
import muteIcon from '../assets/mute.svg'
import unmuteIcon from '../assets/unmute.svg'

import {useState, useEffect} from 'react'
import audioA2 from '../assets/Volume/A2.mp3'
import audioB2 from '../assets/Volume/B2.mp3'
import audioF2 from '../assets/Volume/F2.mp3'
import audioG2 from '../assets/Volume/G2.mp3'
import audioA2Sharp from '../assets/Volume/A2Sharp.mp3'
import audioF2Sharp from '../assets/Volume/F2Sharp.mp3'
import audioG2Sharp from '../assets/Volume/G2Sharp.mp3'
import audioA3 from '../assets/Volume/A3.mp3'
import audioB3 from '../assets/Volume/B3.mp3'
import audioC3 from '../assets/Volume/C3.mp3'
import audioD3 from '../assets/Volume/D3.mp3'
import audioE3 from '../assets/Volume/E3.mp3'
import audioF3 from '../assets/Volume/F3.mp3'
import audioG3 from '../assets/Volume/G3.mp3'
import audioA3Sharp from '../assets/Volume/A3Sharp.mp3'
import audioC3Sharp from '../assets/Volume/C3Sharp.mp3'
import audioD3Sharp from '../assets/Volume/D3Sharp.mp3'
import audioF3Sharp from '../assets/Volume/F3Sharp.mp3'
import audioG3Sharp from '../assets/Volume/G3Sharp.mp3'
import audioA4 from '../assets/Volume/A4.mp3'
import audioB4 from '../assets/Volume/B4.mp3'
import audioC4 from '../assets/Volume/C4.mp3'
import audioD4 from '../assets/Volume/D4.mp3'
import audioE4 from '../assets/Volume/E4.mp3'
import audioF4 from '../assets/Volume/F4.mp3'
import audioG4 from '../assets/Volume/G4.mp3'
import audioA4Sharp from '../assets/Volume/A4Sharp.mp3'
import audioC4Sharp from '../assets/Volume/C4Sharp.mp3'
import audioD4Sharp from '../assets/Volume/D4Sharp.mp3'
import audioF4Sharp from '../assets/Volume/F4Sharp.mp3'
import audioG4Sharp from '../assets/Volume/G4Sharp.mp3'
import audioA5 from '../assets/Volume/A5.mp3'
import audioB5 from '../assets/Volume/B5.mp3'
import audioC5 from '../assets/Volume/C5.mp3'
import audioD5 from '../assets/Volume/D5.mp3'
import audioE5 from '../assets/Volume/E5.mp3'
import audioF5 from '../assets/Volume/F5.mp3'
import audioG5 from '../assets/Volume/G5.mp3'
import audioA5Sharp from '../assets/Volume/A5Sharp.mp3'
import audioC5Sharp from '../assets/Volume/C5Sharp.mp3'
import audioD5Sharp from '../assets/Volume/D5Sharp.mp3'
import audioF5Sharp from '../assets/Volume/F5Sharp.mp3'
import audioG5Sharp from '../assets/Volume/G5Sharp.mp3'

export default function Piano(){

    const [pressedKey, setPressedKey] = useState([])
    const [settings, setSettings] = useState(true)
    const [mute, setMute] = useState(false)
    const [volume, setVolume] = useState(1.0)

    const notes = [
        'F2',
        'F2#',
        'G2',
        'G2#',
        'A2',
        'A2#',
        'B2',
        //New Octave
        'C3',
        'C3#',
        'D3',
        'D3#',
        'E3',
        'F3',
        'F3#',
        'G3',
        'G3#',
        'A3',
        'A3#',
        'B3',
        //New Octave
        'C4',
        'C4#',
        'D4',
        'D4#',
        'E4',
        'F4',
        'F4#',
        'G4',
        'G4#',
        'A4',
        'A4#',
        'B4',
        // //New octave
        'C5',
        'C5#',
        'D5',
        'D5#',
        'E5',
    ]

    function settingsToggle(){
        setSettings((prevState) => !prevState)
    }

    function muteToggle(){
        setMute((prevState) => !prevState)
    }


    const audioFiles = {
        F2: audioF2,
        'F2#': audioF2Sharp,
        G2: audioG2,
        'G2#': audioG2Sharp,
        A2: audioA2,
        'A2#': audioA2Sharp,
        B2: audioB2,
        C3: audioC3,
        'C3#': audioC3Sharp,
        D3: audioD3,
        'D3#': audioD3Sharp,
        E3: audioE3,
        F3: audioF3,
        'F3#': audioF3Sharp,
        G3: audioG3,
        'G3#': audioG3Sharp,
        A3: audioA3,
        'A3#': audioA3Sharp,
        B3: audioB3,
        C4: audioC4,
        'C4#': audioC4Sharp,
        D4: audioD4,
        'D4#': audioD4Sharp,
        E4: audioE4,
        F4: audioF4,
        'F4#': audioF4Sharp,
        G4: audioG4,
        'G4#': audioG4Sharp,
        A4: audioA4,
        'A4#': audioA4Sharp,
        B4: audioB4,
        C5: audioC5,
        'C5#': audioC5Sharp,
        D5: audioD5,
        'D5#': audioD5Sharp,
        E5: audioE5,
      };

    const [keyToNote, setKeyToNote] = useState({
        q: 'F2',
        2: 'F2#',
        w: 'G2',
        3: 'G2#',
        e: 'A2',
        4: 'A2#',
        r: 'B2',
        t: 'C3',
        6: 'C3#',
        y: 'D3',
        7: 'D3#',
        u: 'E3',
        i: 'F3',
        9: 'F3#',
        o: 'G3',
        0: 'G3#',
        p: 'A3',
        "-": 'A3#',
        "[": 'B3',
        //Next Line
        z: 'C4',
        x: 'D4',
        c: 'E4',
        v: 'F4',
        b: 'G4',
        n: 'A4',
        m: 'B4',
        ",": 'C5',
        ".": 'D5',
        "/": 'E5',
        s: 'C4#',
        d: 'D4#',
        g: 'F4#',
        h: 'G4#',
        j: 'A4#',
        l: 'C5#',
        ";": 'D5#',
    })

    // const keyToNote = {
    //     s: 'C',
    //     e: 'C#',
    //     d: 'D',
    //     r: 'D#',
    //     f: 'E',
    //     g: 'F',
    //     y: 'F#',
    //     h: 'G',
    //     u: 'G#',
    //     j: 'A',
    //     i: 'A#',
    //     k: 'B',
    // }

    const [noteToKey, setNoteToKey] = useState({
        F2: 'q',
        'F2#': 2,
        G2: 'w',
        'G2#': '3',
        A2: 'e',
        'A2#': '4',
        B2: 'r',

        C3: 't',
        'C3#': 6,
        D3: 'y',
        'D3#': 7,
        E3: 'u',
        F3: 'i',
        'F3#': 9,
        G3: 'o',
        'G3#': 0,
        A3: 'p',
        'A3#': '-',
        B3: '[',

        C4: 'z',
        D4: 'x',
        E4: 'c',
        F4: 'v',
        G4: 'b',
        A4: 'n',
        B4: 'm',
        C5: ',',
        D5: '.',
        E5: '/',
        'C4#': 's',
        'D4#': 'd',
        'F4#': 'g',
        'G4#': 'h',
        'A4#': 'j',
        'C5#': 'l',
        'D5#': ';',
    })

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
          document.removeEventListener('keydown', handleKeyPress);
          document.removeEventListener('keyup', handleKeyUp);
        };
      }, [volume, mute, keyToNote]);

    function handleKeyPress(e) {
        if (e.repeat) {
            return;
          }
        console.log(e.key)
        playNote(keyToNote[e.key.toLowerCase()])
    }

    function handleKeyUp(e) {
        setPressedKey((prevKeys) => 
            prevKeys.filter((key) => 
                key !== keyToNote[e.key.toLowerCase()]));
    }

    function playNote(note){
        const audio = new Audio(audioFiles[note]);
        audio.volume = mute ? 0 : volume;
        audio.play();
        setPressedKey((prevKeys) =>
            [...prevKeys, note]
        )
    }
    
    function releaseNote(){
        setPressedKey([])
    }

    function handleVolumeChange(e){
        const newVolume = parseFloat(e.target.value) / 100
        console.log("New Vol is now: " + newVolume )
        setVolume(newVolume);
    }
    
    const keys = notes.map((note, index) => {
        const isPressed = pressedKey.includes(note)
        return(
            <Key
                key={index}
                note={note}
                playNote={playNote}
                isPressed={isPressed}
                releaseNote={releaseNote}
            />
        )
    })

    
    function handleInputChange(event){

        const updatedNoteToKey = {
            ...noteToKey,
            [event.target.name]: event.target.value,
        };

        setNoteToKey(updatedNoteToKey);

        const updatedKeyToNote = {
            ...keyToNote,
            [event.target.value]: event.target.name
        };

        delete updatedKeyToNote[getKeyByValue(keyToNote, event.target.name)]

        setKeyToNote(updatedKeyToNote);
    }

    function getKeyByValue(object, value){
        return Object.keys(object).find((key) => object[key] === value);
    }

    const notesSetting = notes.map((note, index) =>{
        if (note.length < 3){
            return(
                <div className="settings-notes-text">
                    <p>
                        {note}:
                        <input 
                            className="button-input" 
                            type="text" 
                            value={noteToKey[note]} 
                            name={note} 
                            maxLength={1}
                            onChange={handleInputChange}
                        />
                    </p>
                </div>
            )
        }
    })

    const sharpNotesSetting = notes.map((note, index) =>{
        if (note.length > 2){
            return(
                <div className="settings-notes-text">
                    <p>
                        {note}:
                        <input 
                            className="button-input" 
                            type="text" 
                            value={noteToKey[note]} 
                            name={note} 
                            maxLength={1}
                            onChange={handleInputChange}
                        />
                    </p>
                </div>
            )
        }
    })

    return(
         <div className="piano">
            <div className="piano-title">
                <h1>Piano App</h1>
            </div>
            <div className="piano-settings">
                <button onClick={settingsToggle}>Settings</button>
                {!settings &&
                <div className="settings-page">
                    <div className="settings-page-title">
                        Settings Page
                        <img onClick={settingsToggle} src={closeIcon} alt="" />
                    </div>
                    <div>
                        Change the keys/controls
                    </div>
                    <div className="settings-page-content">
                        <div className="settings-notes">
                            {notesSetting.slice(0, 19)}
                        </div>
                        <div className="settings-notes">
                            {notesSetting.slice(19)}
                        </div>
                        <div className="settings-sharp-notes">
                            {sharpNotesSetting.slice(0, 19)}
                        </div>
                        <div className="settings-sharp-notes">
                            {sharpNotesSetting.slice(19)}
                        </div>
                    </div>
                    <div className="volume-control">
                        <div className="music-icons">
                            {mute &&
                                <img className="mute-icon" src={muteIcon} onClick={muteToggle}/>
                            }

                            {!mute &&
                                <img className="unmute-icon" src={unmuteIcon} onClick={muteToggle}/>
                            }

                        </div>
                        <div className="music-volume">
                                <p>Volume:</p>
                                <input type="range" className="volume-slider" min="0" max="100" step="1" onInput={(event) => handleVolumeChange(event)} onChange={(event) => handleVolumeChange(event)}></input>
                        </div>
                    </div>

                </div>
                }
            </div>

            <div className="piano-keys">
                {keys}
            </div>
         </div>
    )
}