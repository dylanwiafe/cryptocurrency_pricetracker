import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="nav">
          {/* <Link to="/Home" exact> lorem <Link/>
              <Link to="/upload"> lorem<Link/> */}
          {/* <Link to="/"> */}
          <div className="nav__logo">
            <img className="nav__image" alt="logo" />
          </div>
          {/* </Link> */}
          <div className="nav__user">
            <input
              className="nav__input"
              placeholder="Search"
              type="text"
            ></input>
            {/* <Link to="/upload"> */}
            <button className="nav__button"> UPLOAD </button>
            {/* </Link> */}
            <img className="nav__avatar" alt="avatar" />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
