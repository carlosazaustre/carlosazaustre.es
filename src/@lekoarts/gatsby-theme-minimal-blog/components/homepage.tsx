/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import NewsletterForm from "../../../components/newsletter";

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <section sx={{ mb: [3, 4, 5], }}>
        <Hero />
      </section>
      <Title text="📝 Blog">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Leer todas las entradas
        </Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List>
        <Bottom />
      </List>
      <NewsletterForm
        title="📬 Únete a la Newsletter"
        text="Recibe puntualmente información sobre las últimas novedades en tecnologías
            web y desarrollo web moderno para que estés siempre actualizad_:"
      />
    </Layout>
  );
}

export default Homepage
