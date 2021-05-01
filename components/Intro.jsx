import { CompanyLogos } from "./CompanyLogos";
import { ButtonCTA } from "./ButtonCTA";

export const Intro = () => {
  return (
    <>
      <style jsx>{`
        .subtitle {
          font-size: 3rem;
        }
        .subtitleGreeting {
          display: inline-block;
          font-weight: 500;
        }
        .subtitleName {
          display: inline-block;
          font-weight: black;
        }

        .text {
          font-weight: normal;
          font-size: 1rem;
        }
      `}</style>
      <h2 className="subtitle">
        <span className="subtitleGreeting">Hola 👋🏼, soy</span>{" "}
        <span className="subtitleName">Carlos Azaustre</span>
      </h2>
      <h3 className="text">
        Llevo 10+ años trabajando en desarrollo web con JavaScript. He trabajado
        en Google, IBM y Eventbrite. Soy Google Developer Expert (GDE) en la
        categoría de Tecnologías Web y divulgador de contenido a través de
        YouTube, dónde ya somos más de 50,000 suscritos!!
      </h3>
      <ButtonCTA
        text="¡Quiero aprender JavaScript!"
        url="https://youtube.com/c/CarlosAzaustre?sub_confirmation=1"
      />
      <CompanyLogos />
    </>
  );
};
