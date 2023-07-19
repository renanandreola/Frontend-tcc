import React, { cloneElement } from 'react';

export default (props) => {
    return (
        <div>
            {
                /* {React.cloneElement(props.children, props)} */
                props.children.map((el, i) => {
                    return cloneElement(el, {...props, key: i})
                })
            }
        </div>
    )
}