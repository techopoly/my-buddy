import React from 'react';

const Scroll = (props) => {
    return (
        <div style={
            {
                overflow:'scroll',
                border: '5px solid black',
                height: '600px', 
                  
                borderRadius:'8px'
            }
        }>
            {props.childern}
        </div>
    );
};


export default Scroll;