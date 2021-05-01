import Link from "next/link";
import { useRouter } from "next/router";
import { YouTube, Twitch } from "./Icons";

export const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <>
      <style jsx>{`
        .menu {
          display: flex;
          font-size: 1.25rem;
        }
        .menu li {
          margin: 1em;
        }
        .menu a {
          text-decoration: none;
          color: var(--color-black);
          padding: 0.75rem;
          transition: all 0.2s ease;
        }
        .menu a:hover,
        .active {
          background-color: var(--color-white);
          border-radius: 20px;
        }

        .social {
          display: flex;
          justify-content: space-between;
        }
        .social li {
          margin: 1em;
          transition: all 0.2s ease;
        }
        .social li:hover {
          fill: var(--color-white);
        }
      `}</style>
      <nav>
        <ul className="menu">
          <li>
            <Link href="/">
              <a className={pathname === "/" ? "active" : ""}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className={pathname === "/blog" ? "active" : ""}>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre-mi" passHref>
              <a className={pathname === "/sobre-mi" ? "active" : ""}>
                Sobre Mi
              </a>
            </Link>
          </li>
          <li>
            <Link href="/mentoria" passHref>
              <a className={pathname === "/mentoria" ? "active" : ""}>
                Mentoría
              </a>
            </Link>
          </li>
          <li>
            <Link href="/cursos" passHref>
              <a className={pathname === "/cursos" ? "active" : ""}>Cursos</a>
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="social">
        <li>
          <Link href="//youtube.com/c/CarlosAzaustre?sub_confirmation=1">
            <a>
              <YouTube size="30px" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="//twitch.tv/carlosazaustre">
            <a>
              <Twitch size="30px" />
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};
