import React from "react";

function Footer () {
  return (
    <footer className="footer root__footer">
      <p className="footer__copyright">&copy; {new Date().getFullYear()} Mesto</p>
    </footer>
  )
};

export default Footer