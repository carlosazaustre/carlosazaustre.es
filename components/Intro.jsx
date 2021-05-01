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
        Desarrollador JavaScript con 10+ años de experiencia. Actualmente
        formador y divulgador en tecnologías web a través de YouTube, dónde ya
        somos más de 50,000!!.
        <br />
        <br />
        Reconocido por Google como Developer Expert (GDE) en Web, y Auth0
        Ambassador.
      </h3>
      <ButtonCTA
        text="¡Quiero aprender JavaScript!"
        url="https://youtube.com/c/CarlosAzaustre?sub_confirmation=1"
      />
      <CompanyLogos />
    </>
  );
};
