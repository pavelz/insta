import React, {useState} from 'react'


export default function Button({name = 'Untitles', type='file',title="...",change = {}}) {
    //const [name, setName ] = useState("Untitled")
    //const [type, setType ] = useState("button")

    let button = ""
    switch(type){
        case 'button':
            button = (<button class="btn btn-primary">
                {name}
            </button>)
            break;
        case 'file':
            button = (<div className="custom-file"><input onChange={(e) => change(e)} type="file" className="custom-file-input" name={name}/><label className="custom-file-label">{title}</label></div>)
            break;
        case 'submit':
            button = (<input type="submit" class="btn btn-primary" name={name}/>)
            break;

    }
    return (
       button
    )
}