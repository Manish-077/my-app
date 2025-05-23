import React from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    if (!word) return '';
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
        style={{
          backgroundColor: props.mode === 'dark' ? '#15354A' : '',
          color: props.mode === 'dark' ? 'white' : ''
        }}
      >
        <strong>{capitalize(props.alert.type)}: </strong> {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
