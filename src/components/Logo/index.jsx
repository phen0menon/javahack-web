import React from "react";
import logoIcon from "#/assets/img/logo-icon.svg";
import logoBrand from "#/assets/img/logo-brand.svg";
import "./index.scss";

const Logo = () => {
  return (
    <div>
      <div className="rf-logo">
        <div className="rf-logo__inner">
          <div className="rf-logo__box">
            <img src={logoIcon} alt="" />
          </div>
          <div className="rf-logo__brand">
            <img src={logoBrand} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
