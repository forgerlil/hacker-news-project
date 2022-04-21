import './App.css';

function App() {
  return (
    <>
      <nav>
      <div className="nav-links">
        <div className="logo">Y</div>
        <p><strong className="logo-text">Hacker News</strong><a>new</a> | <a>past</a> | <a>comments</a> | <a>ask</a> | <a>show</a> | <a>jobs</a>  | <a>submit</a></p>
      </div>
      <div className="login">login</div>
    </nav>
    <main>
      <article>
        <p>1.</p>
        <img className="arrow-up" src="https://w7.pngwing.com/pngs/711/104/png-transparent-computer-icons-arrow-down-arrow-up-right-left-up-up-arrow-angle-triangle-black.png" />
        <div className="article-content">
          <p>Title of a given article here (<a>link.com</a>)</p>
          <p className="article-links">??? points by <a>user1</a><a>time elapsed</a> | <a>hide</a> | <a>?? comments</a></p>
        </div>
      </article>
      <article>
        <p>1.</p>
        <img className="arrow-up" src="https://w7.pngwing.com/pngs/711/104/png-transparent-computer-icons-arrow-down-arrow-up-right-left-up-up-arrow-angle-triangle-black.png" />
        <div className="article-content">
          <p>Title of a given article here (<a>link.com</a>)</p>
          <p className="article-links">??? points by <a>user1</a><a>time elapsed</a> | <a>hide</a> | <a>?? comments</a></p>
        </div>
      </article>      <article>
        <p>1.</p>
        <img className="arrow-up" src="https://w7.pngwing.com/pngs/711/104/png-transparent-computer-icons-arrow-down-arrow-up-right-left-up-up-arrow-angle-triangle-black.png" />
        <div className="article-content">
          <p>Title of a given article here (<a>link.com</a>)</p>
          <p className="article-links">??? points by <a>user1</a><a>time elapsed</a> | <a>hide</a> | <a>?? comments</a></p>
        </div>
      </article>      <article>
        <p>1.</p>
        <img className="arrow-up" src="https://w7.pngwing.com/pngs/711/104/png-transparent-computer-icons-arrow-down-arrow-up-right-left-up-up-arrow-angle-triangle-black.png" />
        <div className="article-content">
          <p>Title of a given article here (<a>link.com</a>)</p>
          <p className="article-links">??? points by <a>user1</a><a>time elapsed</a> | <a>hide</a> | <a>?? comments</a></p>
        </div>
      </article>      <article>
        <p>1.</p>
        <img className="arrow-up" src="https://w7.pngwing.com/pngs/711/104/png-transparent-computer-icons-arrow-down-arrow-up-right-left-up-up-arrow-angle-triangle-black.png" />
        <div className="article-content">
          <p>Title of a given article here (<a>link.com</a>)</p>
          <p className="article-links">??? points by <a>user1</a><a>time elapsed</a> | <a>hide</a> | <a>?? comments</a></p>
        </div>
      </article>
    </main>
    <footer>
      <p><a>Guidelines</a> | <a>FAQ</a> | <a>Lists</a> | <a>API</a> | <a>Security</a> | <a>Legal</a> | <a>Apply to YC</a> | <a>Contact</a></p>
      <form>
        <input type="text" name="search-bar" id="search-bar" placeholder="Type in search" />
        <button type="submit">Search</button>
      </form>
    </footer>
    </>
  );
}

export default App;
