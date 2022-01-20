import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://est-rouge.com/wp-content/uploads/2016/12/cropped-square_icon_white@8x-32x32.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            EST ROUGE Test
          </a>
        </div>
      </nav>
    </>
  );
};

export default React.memo(Header);
