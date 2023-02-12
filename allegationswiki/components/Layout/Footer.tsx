

import Link from "next/link";

function Footer() {
    const padding = {
    padding: 5,
    fontSize: 22,
    textDecoration: "none",
  };

    return (
      <div className="bottom-bar">
        <br />
        <span>
          <em>Mysterious Wolf Treehouse: </em>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            href="/about"
          >
            <u>About</u>
          </Link>

          <Link
            style={{
              textDecoration: "none",
              color: "black",
              padding: 5,
            }}
            href="/disclaimer"
          >
            <u>Disclaimer</u>
          </Link>
        </span>
      </div>
    );
}

export default Footer;