import React from 'react';

function Title({ text, dec }) {
  return (
    <div className="text-center my-4">
      <h2 className="text-3xl font-bold">
        {text}
      </h2>
      {dec && (
        <p className="text-gray-600 mt-2 max-w-5xl mx-auto">
          {dec}
        </p>
      )}
    </div>
  );
}

export default Title;
