import React from 'react';

export default ({
  text,
  href, 
  target = "_blank", 
  rel = "noopener noreferrer"
}) => {
  return (
    <a
      style={{
        textDecoration: `none`
      }}
      href={href}
      target={target}
      rel={rel}
    >
      {text}
    </a>
  );
}