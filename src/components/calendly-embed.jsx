import React, { useEffect } from 'react';

export const CalendlyEmbed = ({
  account,
  eventName,
}) => {
  const calendlyUrl = `https://calendly.com/${account}/${eventName}`;

  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    }
  }, []);

  return (
    <div id="schedule_form">
      <div
        className='calendly-inline-widget'
        data-url={calendlyUrl}
        style={{
          width: `1024px`,
          height: `650px`
        }}
      />
    </div>
  );
}