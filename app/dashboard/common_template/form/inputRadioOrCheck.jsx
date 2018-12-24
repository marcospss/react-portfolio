import React from 'react';
import { Field } from 'redux-form';

const RadioOrCheck = props => {

    if (props && props.input && props.options) {
      const renderButtons = (key, index) => {
        return (
            <div className={props.colsGrid} key={`${index}`}>
                <Field
                    id={`${props.input.name}_${index}`}
                    component="input"
                    name={props.input.name}
                    type={props.type}
                    value={key}
                />
                <label htmlFor={props.id}>{props.options[key]}</label>
            </div>
        )
      };
      return (
        <div>
            <div className="12u">
                <h4>{props.label}</h4>
            </div>
            {props.options && Object.keys(props.options).map(renderButtons)}
        </div>
      );
    }
};
  
export default RadioOrCheck;