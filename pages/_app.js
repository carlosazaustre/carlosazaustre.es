import "../styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style global jsx>{`
        :root {
          --color-bg-gray: #e5e5e5;
          --color-primary: #fbcf65;
          --color-primary-light: #fde68a;
          --color-primary-dark: #ffb500;
          --color-black: #222;
          --color-dark: #323232;
          --color-white: #fff;
          --primary-font: "Poppins";
          --radius: 20px;
          --animation: all 0.3s ease;
          --heading-1-size: 3rem;
          --heading-2-size: 1.5rem;
          --max-width: 1440px;
        }

        * {
          margin: 0;
          padding: 0;
          list-style: none;
          box-sizing: border-box;
          text-decoration: none;
        }
        html,
        body {
          font-family: var(--primary-font), sans-serif;
          font-size: 16px;
          color: var(--color-black);
          background-color: var(--color-bg-gray);
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
