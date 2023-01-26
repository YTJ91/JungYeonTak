import React, { useInsertionEffect, useRef, useState } from "react";

function UserCreate({ handleSubmit, handleInput, inputs }) {
  const { email, name } = inputs;

  const inputRef = useRef();

  useInsertionEffect(() => {
    console.log("render!");
  });

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInput}
        ref={inputRef}
      />
      <input type="text" name="email" value={email} onChange={handleInput} />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

export default React.memo(UserCreate);
