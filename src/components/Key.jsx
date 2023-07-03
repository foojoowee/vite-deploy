export default function Key(props){
    return(
         <div>
            <div className={`${props.note.length > 2? 
            "black-key": "key"} ${props.isPressed? "highlighted-key": ""}`} onMouseDown={()=>props.playNote(props.note)} onMouseUp={props.releaseNote}>
                <div className={`${props.note.length > 2 ? 
                "black-key-text": "key-text"}`}>
                    {props.note.toUpperCase()}
                </div>
            </div>
         </div>
    )
}