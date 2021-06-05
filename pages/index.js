import Head from "next/head";

import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Book } from "../components/Book";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <style jsx>{`
        .hero {
          background-color: var(--color-primary);
        }
        .main {
          display: flex;
          flex-direction: column;
        }
        .main-left {
          display: flex;
          flex-direction: column;
          padding: 0 0 1.5rem 1.5rem;
        }
        .main-right {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        @media screen and (min-width: 1024px) {
          .hero {
            overflow: hidden;
            max-width: var(--max-width);
          }
          .main {
            margin: 0 auto;
            height: 80vh;
            flex-direction: row;
            background-image: url("/assets/carlosazaustre-profile-image-large.png");
            background-repeat: no-repeat;
            background-position: right bottom;
            background-size: contain;
          }
          .main-left {
            width: 35%;
            height: 100%;
            padding: 0 0 4rem 4rem;
            justify-content: flex-end;
            background: url("/assets/ellipse-left.png") no-repeat bottom left;
          }
          .main-right {
            width: 65%;
            flex-direction: row;
            justify-content: flex-start;
          }
        }
        @media screen and (min-width: 1441px) {
          .hero {
            border-radius: var(--radius);
            margin: 0 auto;
          }
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
          <section className="main-left">
            <Intro />
          </section>
          <section className="main-right">
            <Book
              imageSrc="/assets/aprendiendo-javascript-libro.png"
              url="https://www.amazon.com/-/es/Carlos-Azaustre/dp/B08TZ3HSYZ/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1619807979&sr=8-1"
            />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
