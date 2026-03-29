import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section>
      <h1 className="section-title">404</h1>
      <p>Page not found. <Link to="/">Go home</Link>.</p>
    </section>
  );
}