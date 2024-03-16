"use client";

const Error = ({ error }) => {
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
