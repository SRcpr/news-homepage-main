import "./App.css";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Hero from "./components/Hero";
import New from "./components/New";

function App() {
  return (
    <>
      <div>
        <Header />
        <main className="">
          <div className="d-flex ">
            <div className="w-82">
              <Hero />
            </div>
            <div className="w-40">
              <New />
            </div>
          </div>

          <Blog />
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
