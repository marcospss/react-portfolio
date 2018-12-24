import React from 'react';

const TextArea = props => {
    return (
        <div className={`${props.colsGrid} ${(props.meta && props.meta.error && props.meta.touched) ? 'error': '' }`}>
            <label htmlFor={props.name}>{props.label}</label>
            <textarea 
                {...props.input} 
                name={props.name} 
                id={(props.id) ? props.id : props.name} 
                placeholder={props.placeholder} 
                maxLength={props.maxlength} 
            ></textarea>
            {props.meta && props.meta.error && props.meta.touched && (
              <div className="msg-error">
                {props.meta.error}
              </div>
            )}
        </div>
    );
};

export default TextArea;
