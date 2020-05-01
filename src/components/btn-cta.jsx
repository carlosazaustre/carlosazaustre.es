import React from 'react'
import { css } from 'emotion';

export default ({ link, text }) => {
  return (
    <div
      className={css`
        display: block;
        margin: 1rem;
      `}
    >
      <a
        className={css`
          display: block;
          width: 300px;
          margin: 1rem auto;
          padding: 1rem;
          background-color: #fccb0b;
          border-radius: 10px;
          font-size: 1.5em;
          font-weight: 700;
          text-decoration: none;
          text-align: center;
        `}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );
}