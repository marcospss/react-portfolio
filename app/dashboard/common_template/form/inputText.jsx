import React from 'react';

const InputText = props => {
    return (
        <div className={`${props.colsGrid} ${(props.meta && props.meta.error && props.meta.touched) ? 'error': '' }`}>
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                {...props.input} 
                name={props.name} 
                id={(props.id) ? props.id : props.name} 
                placeholder={props.placeholder} 
                type={props.type} 
                maxLength={props.maxlength} 
            />
            {props.meta && props.meta.error && props.meta.touched && (
              <div className="msg-error">
                {props.meta.error}
              </div>
            )}
        </div>
    );
};

export default InputText;
