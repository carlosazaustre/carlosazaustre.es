const jimp = require("jimp");
const path = require("path");

module.exports = ({ markdownNode }) => {
  const { frontmatter, fields } = markdownNode;

  console.log(fields.slug);

  const output = path.join("./public", fields.slug, "seo.jpg");

  return Promise.all([
    jimp.read(path.join(__dirname, "base.jpg")),
    jimp.loadFont(
      path.join(__dirname, "fonts/Montserrat-Black-80/Montserrat-Black-80.fnt")
    )
  ]).then(([image, msb80]) => {
    const WIDTH = 1200;
    const HEIGHT = 630;
    const PADDING = 40;

    image
      .resize(WIDTH, HEIGHT)
      .print(
        msb80,
        PADDING,
        140 + PADDING,
        frontmatter.title,
        WIDTH - PADDING * 2
      )
      .write(output);
  });
};
