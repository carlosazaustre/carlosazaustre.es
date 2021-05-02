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
          --screen-sm: 640px;
          --screen-md: 768px;
          --screen-lg: 1024px;
          --screen-xl: 1280px;
          --screen-2xl: 1536px;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: var(--primary-font), sans-serif;
          color: var(--color-black);
          background-color: var(--color-bg-gray);
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
