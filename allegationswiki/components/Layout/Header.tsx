import Link from "next/link";

function Header() {
    const padding = {
    padding: 5,
    fontSize: 22,
    textDecoration: "none",
  };

    return (
      <header className="main-nav-bar">
        <div className="header-gap-1"></div>
        <div className="main-nav-bar-home">
          <Link style={padding} href="/">
            <span>
              <span className="main-nav-bar-home-allegations">Allegations</span>
              <span className="main-nav-bar-home-wiki">.wiki</span>
            </span>
          </Link>
        </div>
        <div className="header-gap-2"></div>

        <div className="header-gap-2"></div>
        <div className="header-request-new">
          <Link style={padding} href="/perp/random">
            Random Perp
          </Link>
        </div>
      </header>
    );
}

export default Header;
