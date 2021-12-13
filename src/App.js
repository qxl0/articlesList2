import "./styles.css";
import Articles from "./Articles";

export const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

const articles = [
  {
    id: id.next().value,
    title: "Article 1",
    summary: "Summary of Article 1",
    display: "none"
  },
  {
    id: id.next().value,
    title: "Article 2",
    summary: "Summary of Article 2",
    display: "none"
  },
  {
    id: id.next().value,
    title: "Article 3",
    summary: "Summary of Article 3",
    display: "none"
  }
];
export default function App() {
  return <Articles articles={articles} />;
}
