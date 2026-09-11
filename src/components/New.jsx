import { news } from "../data.js";
import "./new.css";
const New = () => {
  return (
    <section className="new">
      <h2 className="new-heading">New</h2>
      {news.map((newsItem) => (
        <aside className="subheading" key={newsItem.newsTitle}>
          <h3 className="subheading-title">{newsItem.newsTitle}</h3>
          <p className="subheading-desc">{newsItem.newsDesc}</p>
        </aside>
      ))}
    </section>
  );
};

export default New;
