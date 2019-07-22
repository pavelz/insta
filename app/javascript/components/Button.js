import React, {useState} from 'react'


export default function Button({name = 'Untitles', type='file',title="...",change = {}}) {

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
        default:
            button = (<div className="text-danger">Unknown button type</div>)
    }
    return (
       button
    )
}
