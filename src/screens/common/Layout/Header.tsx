import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            MAKUAKE
          </a>
        </div>
      </nav>
    </>
  );
};

export default React.memo(Header);
