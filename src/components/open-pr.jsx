import React from "react"

const githubConfig = {
  username: "carlosazaustre",
  repoName: "carlosazaustre.es"
};

export default ({ slugPost, text }) => {
  return (
    <p>
      {text}
      {` `}
      <a
        href={`https://github.com/${githubConfig.username}/${githubConfig.repoName}/blob/master/content/posts/${slugPost}/index.mdx`}
      >
        Haz una <strong>Pull Request</strong>.
      </a>
    </p>
  );
}