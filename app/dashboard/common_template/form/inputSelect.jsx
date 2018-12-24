import React from 'react';

export const Select = props => {
  const renderSelectOptions = (key, index) => {
    return (
      <option key={`${index}-${key}`} value={key}>
        {props.options[key]}
      </option>
    );
  };

  if (props && props.options) {
    return (
        <div className={`12u ${(props.meta && props.meta.error && props.meta.touched) ? 'error': '' }`}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="select-wrapper">
                <select {...props.input}>
                <option value="">- Selecione uma opção -</option>
                {Object.keys(props.options).map(renderSelectOptions)}
                </select>
            </div>
            {props.meta && props.meta.error && props.meta.touched && (
              <div className="msg-error">
                {props.meta.error}
              </div>
            )}
      </div>
    );
  }
};

export default Select;