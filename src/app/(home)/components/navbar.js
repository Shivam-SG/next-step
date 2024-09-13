import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-400">
      <Image src={"/logo.jpg"} alt="" width={20} height={20} />
    </div>
  );
};

export default Navbar;
