import React from "react";
import { ReactComponent as Brand1 } from "../../assets/brand1.svg";
import { ReactComponent as Brand2 } from "../../assets/brand2.svg";
import { ReactComponent as Brand3 } from "../../assets/brand3.svg";
import { ReactComponent as Brand4 } from "../../assets/brand4.svg";
import { ReactComponent as Brand5 } from "../../assets/brand5.svg";

const BrandsSection = () => {
  // render the brands section component
  return (
    <div className="flex justify-center items-center gap-14 flex-wrap my-6">
      <div>
        <Brand1 className="fill-white" />
      </div>
      <div>
        <Brand2 className="fill-white" />
      </div>
      <div>
        <Brand3 className="fill-white" />
      </div>
      <div>
        <Brand4 className="fill-white" />
      </div>
      <div>
        <Brand5 className="fill-white" />
      </div>
    </div>
  );
};

export default BrandsSection;
