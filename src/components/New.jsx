import { news } from "../data.js";
import "./new.css";
const New = () => {
  return (
    <section className="new">
      <h2 className="new-heading">New</h2>
      {news.map((news) => (
        <aside className="subheading" key={news.newsTitle}>
          <h3 className="subheading-title">{news.newsTitle}</h3>
          <p className="subheading-desc">{news.newsDesc}</p>
        </aside>
      ))}
    </section>
  );
};

export default New;
