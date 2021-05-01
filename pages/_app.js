import "../styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style global jsx>{`
        :root {
          --color-primary: #fbcf65;
          --color-primary-light: #fde68a;
          --color-primary-dark: #b59b35;
          --color-black: #222;
          --color-white: #fff;
          --primary-font: "Poppins";
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: var(--primary-font), sans-serif;
          color: var(--color-black);
        }

        * {
          margin: 0;
          padding: 0;
          list-style: none;
          box-sizing: border-box;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
