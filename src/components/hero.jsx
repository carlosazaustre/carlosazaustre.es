import React from 'react';
import ButtonCTA from '../components/btn-cta';
import ExternalLink  from '../components/external-link';

import './hero.css';

export const Hero = ({
  image,
  imageMini,
  imageAlt,
  title,
  subtitle
}) => {
  return (
    <div className='wrapper'>
      <div className='wrapper-text'>
        <h1>{title}</h1>
        <p>{subtitle} Llevo 8+ años trabajando en <strong>desarrollo web con JavaScript</strong>.
          Trabajando en empresas como <em> Google, IBM y Eventbrite</em>.
        </p>
        <p>
          Soy <strong>Google Developer Expert (GDE)</strong> en
          la categoría de <strong>Tecnologías Web</strong>. Divulgador de contenido a través
          de YouTube (¡Ya somos más de 30,000 suscritos!)
        </p>
        <p>
          Accede a mi <strong>curso gratuito para aprender a desarrollar un API REST con Node.js y Express</strong>
        </p>
        <ButtonCTA
          text="¡Quiero aprender JavaScript!"
          link="/curso-nodejs-gratis"
          width="450px"
        />
      </div>
      <picture className='wrapper-picture'>
        <source
          media="(max-width: 1024px)"
          srcset={imageMini}
        />
        <source 
          className='wrapper-picture-img'
          media="(min-width: 1025px)" 
          srcset={image}
        />
        <img 
          className='wrapper-picture-img'
          src={image}
          alt={imageAlt}
        />
      </picture>
    </div>
  );
}