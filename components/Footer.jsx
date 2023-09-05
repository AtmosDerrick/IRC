import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-[url('../assets/footer.png')] w-full h-[10vh] text-lg lg:text-3xl text-white drop-shadow-xl font-bold text-center py-4">
        Empowering Communities, Elevating Lives
      </div>
      <div className="lw-full g:w-3/4 mx-auto">
        <p className="w-full text-right py-2 italic text-sm lg:text-base">
          ;&copy 2023 Integrity Research and Consultancy
        </p>
      </div>
    </div>
  );
}

export default Footer;
