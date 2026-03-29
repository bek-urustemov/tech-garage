import { useParams } from "react-router-dom";
import { articles } from "../data/articles";
import ComparisonTable from "../components/ComparisonTable";

export default function ArticlePage() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) return <p>Article not found.</p>;

  return (
    <article className="article-page">
      <img src={article.image} alt={article.title} className="article-cover" />
      <p className="badge">{article.category}</p>
      <h1>{article.title}</h1>
      <p className="meta">By {article.author} • {article.date}</p>
      <p className="article-content">{article.content}</p>
      <ComparisonTable data={article.comparison} />
    </article>
  );
}