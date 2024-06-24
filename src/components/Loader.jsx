import React from "react";

const Loader = () => {
  return (
    <>
      <div id="preloader">
        <div id="container" className="container-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <div data-preloader-text="K" className="characters">
                K
              </div>
              <div data-preloader-text="A" className="characters">
                A
              </div>
              <div data-preloader-text="W" className="characters">
                W
              </div>
              <div data-preloader-text="T" className="characters">
                T
              </div>
              <div data-preloader-text="A" className="characters">
                A
              </div>
              <div data-preloader-text="R" className="characters">
                R
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loader;