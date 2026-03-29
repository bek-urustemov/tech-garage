import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export default function HomePage() {
  const latest = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
  const hero = latest[0];
  const side = latest.slice(1, 6);

  const events = [
    { name: "Vivo X300 Ultra Launch", date: "30 Mar 2026" },
    { name: "Computex 2026", date: "02 May 2026" },
    { name: "Google I/O 2026", date: "19 May 2026" },
    { name: "Microsoft Build 2026", date: "02 Jun 2026" },
    { name: "WWDC 2026", date: "08 Jun 2026" },
  ];

  return (
    <section className="home-grid">
      <div className="left-col">
        <div className="panel headlines">
          <h2>Top Stories Today</h2>
          <ul>
            {latest.slice(0, 5).map((a, i) => (
              <li key={a.id}>
                <span className="t">{`${19 - i}:${(i * 7 + 10) % 60}`.padStart(5, "0")}</span>
                <Link to={`/article/${a.id}`}>{a.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link to={`/article/${hero.id}`} className="hero-card">
          <img src={hero.image} alt={hero.title} />
          <div className="hero-overlay">
            <span className="tag">{hero.category}</span>
            <h3>{hero.title}</h3>
          </div>
        </Link>
      </div>

      <aside className="right-col">
        <div className="panel events">
          <h3>Upcoming Events</h3>
          <ul>
            {events.map((e) => (
              <li key={e.name}>
                <strong>{e.name}</strong>
                <span>{e.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="submit-btn">Submit News</button>

        <div className="panel mini-list">
          {side.slice(0, 2).map((a) => (
            <Link to={`/article/${a.id}`} key={a.id} className="mini-item">
              <img src={a.image} alt={a.title} />
              <p>{a.title}</p>
            </Link>
          ))}
        </div>
      </aside>
    </section>
  );
}