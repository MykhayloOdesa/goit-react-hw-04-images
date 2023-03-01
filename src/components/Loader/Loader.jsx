import React from 'react';
import { Triangle } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% -50%)',
      }}
    >
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        visible={true}
      />
    </div>
  );
}
