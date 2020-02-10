/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} por {siteTitle}. All rights reserved.
      </div>
      <div>
      <Link
          to={`/legal`}
          aria-label={`${siteTitle} - Aviso Legal y Política de Privacidad`}
          sx={{ color: `heading`, textDecoration: `none` }}>
            Aviso Legal y Política de Privacidad
      </Link>
      </div>
    </footer>
  )
}

export default Footer
