import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <article className="card">
      <img src={article.image} alt={article.title} loading="lazy" />
      <div className="card-body">
        <p className="badge">{article.category}</p>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <Link to={`/article/${article.id}`} className="read-more">
          Read article →
        </Link>
      </div>
    </article>
  );
}