import { blogs } from "../data";
import "./blog.css";
const Blog = () => {
  return (
    <section className="blog-section">
      {blogs.map((blog, index) => (
        <div key={blog.blogTitle} className="blog-setting">
          <aside className="blog-image">
            <img src={blog.blogImage} alt={blog.blogTitle} />
          </aside>
          <div className="blog-text ">
            <h2 className="blog-heading">{String(index + 1).padStart(2, 0)}</h2>
            <h3 className="blog-subheading">{blog.blogTitle}</h3>
            <p className="blog-description">{blog.blogDesc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Blog;
