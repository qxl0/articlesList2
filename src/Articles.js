import React, { useState } from "react";
import { id } from "./App";

export default function Articles({ articles }) {
  const [articlesList, setArticlesList] = useState(articles);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const onChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const onChangeSummary = (e) => {
    e.preventDefault();
    setSummary(e.target.value);
  };
  const onClickAdd = () => {
    // create
    const newatl = { id: id.next().value, title, summary, display: "none" };

    // add to
    setArticlesList([...articlesList, newatl]);
  };
  const onClickToggle = (id) => {
    setArticlesList((atllist) => {
      const newarticles = [...atllist];
      const index = newarticles.findIndex((article) => article.id === id);
      newarticles[index] = {
        ...newarticles[index],
        display: newarticles[index].display ? "" : "none"
      };

      return newarticles;
    });
  };
  const onClickRemove = (id) => {
    setArticlesList(articlesList.filter((atl) => atl.id !== id));
  };
  return (
    <section>
      <header>
        <h1>Articles List</h1>
        <input placeholder="Title" value={title} onChange={onChangeTitle} />
        <input
          placeholder="Summary"
          value={summary}
          onChange={onChangeSummary}
        />
        <button onClick={onClickAdd}>Add</button>
      </header>
      <article>
        <ul>
          {articlesList.map((atl) => (
            <li key={atl.id}>
              <a
                href={`#${atl.id}`}
                title="Toggle Summary"
                onClick={() => onClickToggle(atl.id)}
              >
                {atl.title}
              </a>
              &nbsp;
              <a
                href={`#${atl.id}`}
                title="Remove"
                onClick={() => onClickRemove(atl.id)}
              >
                X
              </a>
              <p style={{ display: atl.display }}>{atl.summary}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
