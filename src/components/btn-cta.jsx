import React from 'react'
import { css } from 'emotion';

export default ({ link, text, width = '300px' }) => {
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
          width: 200px
          margin: 1rem auto;
          padding: 1rem;
          color: #222;
          background-color: #FFB934;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1.5em;
          text-decoration: none;
          text-align: center;

          @media and (min-width: 501px) {
            width: ${width};
            font-size: 1.5em;
          }
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