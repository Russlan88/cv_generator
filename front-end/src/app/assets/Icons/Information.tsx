import React, { useState } from 'react';
import './Information.css';

const InformationIco: React.FC = () => {
  return (
    <svg version="1.1" width="256" height="256" viewBox="0 0 256 256">
      <defs></defs>
      <g
        style={{
          stroke: 'none',
          strokeWidth: 0,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'none',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 49.083 71.489 l 5.776 -21.96 l 4.186 -15.247 c 3.497 -16.18 -32.704 -2.439 -38.002 1.695 l 0.425 4.853 c 4.824 -3.395 23.091 -7.744 19.449 4.275 l -1.634 6.135 l 0 0 l -8.329 31.071 c -3.497 16.18 32.704 2.439 38.002 -1.695 l -0.425 -4.853 C 63.708 79.159 45.441 83.508 49.083 71.489 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: '#cacaca',
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <circle
          cx="53.871"
          cy="11.201"
          r="11.201"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: '#cacaca',
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
        />
      </g>
    </svg>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '1px solid #e2e2e2',
    backgroundColor: 'white',
    position: 'relative',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  hiddenInput: {
    display: 'none',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};

export default InformationIco;
