import "./Navbar.css";
import LinkWithIcon from "./LinkWithIcon";
import rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import order from "../../assets/package.png";
import lock from "../../assets/locked.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="align_center">
        <h1 className="navbar_heading">ShoppingCart</h1>
        <form className="navbar_form align_center">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <LinkWithIcon title="Home" link="#" icon={rocket} />
        <LinkWithIcon title="Products" link="#" icon={star} />
        <LinkWithIcon title="LogIn" link="#" icon={idButton} />
        <LinkWithIcon title="SignUp" link="#" icon={memo} />
        <LinkWithIcon title="My Orders" link="#" icon={order} />
        <LinkWithIcon title="LogOut" link="#" icon={lock} />
        <a href="/cart" className="align_center">
          Cart <p className="align_center cart_counts">0</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
