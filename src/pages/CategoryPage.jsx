import { useParams } from "react-router-dom";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function CategoryPage() {
  const { slug } = useParams();
  const items = articles.filter((a) => a.category === slug);

  return (
    <section>
      <h1 className="section-title">{slug.replace("-", " ")}</h1>
      {items.length ? (
        <div className="grid">
          {items.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      ) : (
        <p>No articles yet in this category.</p>
      )}
    </section>
  );
}