import React from 'react';

const Card = (props) => {
    // eslint-disable-next-line 
    const { name, email, id } = props;
    return(
        
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt ='robots' src={`https://robohash.org/${props.id}?200x200`}/>
            <div>
                <h2>{name}</h2> 
                {/* Al llamar const = props arriba, puedes solo poner el nombre del atributo  */}
                <p>{props.email}</p>
                {/* En cambio, si no llamaramos esa variable de props, si tendríamos que escribir props.atritubuto (email) */}
            </div>
        </div>
    );
}
export default Card;