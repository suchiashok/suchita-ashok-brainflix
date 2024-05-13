import "./Header.scss";
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <Link to='/'>
      <div className="header__logo">
        <img
          className="header__logoImage"
          src="/src/assets/Logo/BrainFlix-logo.svg"
          alt="brainFlix-logo"
        />
      </div>
      </Link>
      <section className="header__allElements">
        <div className="header__sideElements">
          <form className="header__searchInput">
            <input
              className="header__searchField"
              type="search"
              id="searchInput"
              name="SearchInput"
              placeholder="Search"
            />
            <img
              className="header__searchIcon"
              src="/src/assets/Icons/search.svg"
              alt="search-icon"
            ></img>
          </form>
          <img
            className="header__avatar"
            src="/src/assets/Images/Mohan-muruge.jpg"
            alt="avatar-image"
          ></img>
        </div>
        <Link to='/upload'>
        <div className="header__button">
          <button className="header__buttonEl">
            <img
              className="header__buttonIcon"
              src="/src/assets/Icons/upload.svg"
              alt="upload-icon"
            ></img>
            UPLOAD
          </button>
        </div>
        </Link>
      </section>
    </header>
  );
}

export default Header;
