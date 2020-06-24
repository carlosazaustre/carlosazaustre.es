import React from "react"
import { Global } from "@emotion/core"
import { Box, Styled, Container, css } from "theme-ui"
import "typeface-ibm-plex-sans"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => (
  <Styled.root
    data-testid="theme-root"
    style={{
      borderTop: `.5em solid #FCCB0B`
    }}
  >
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`
        },
        "::selection": {
          backgroundColor: `secondary`,
          color: `white`
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`
        }
      })}
    />
    <SEO />
    <SkipNavLink>Ver contenido</SkipNavLink>
    <Container css={css`
      margin: 0 auto;
      margin-top: 2em;
      max-width: 800px;
    `}>
      <Header />
      <div id="skip-nav" css={css({ ...CodeStyles })} className={className}>
        {children}
      </div>
      <Footer />
    </Container>
  </Styled.root>
);

export default Layout
