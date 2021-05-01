import Head from "next/head";

import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Book } from "../components/Book";

export default function Home() {
  return (
    <div>
      <style jsx>{`
        .hero {
          background-color: var(--color-primary);
          max-width: 1440px;
          margin: 0 auto;
        }

        .main {
          margin: 0 auto;
          /*height: 85vh; */
          padding: 2rem 4rem 0 4rem;
          display: flex;
          background-image: url("/assets/carlosazaustre-profile-image-large.png");
          background-repeat: no-repeat;
          background-position: right bottom;
          background-size: contain;
        }

        .mainLeft {
          width: 35%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .mainRight {
          width: 65%;
        }
      `}</style>
      <Head>
        <title>Carlos Azaustre - Desarrollo JavaScript y Formación</title>
        <meta
          name="description"
          content="Tutoriales JavaScript, formación en desarrollo web fullstack con React y Node.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <Header />

        <main role="main" className="main">
          <section className="mainLeft">
            <Intro />
          </section>
          <section className="mainRight">
            <Book
              imageSrc="/assets/aprendiendo-javascript-libro.png"
              url="https://www.amazon.com/-/es/Carlos-Azaustre/dp/B08TZ3HSYZ/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1619807979&sr=8-1"
            />
          </section>
        </main>
      </div>
    </div>
  );
}
