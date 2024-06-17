const Requirements = () => {
  return (
    <section
      id="system"
      className=" bg-slide4 bg-cover  bg-center px-[15px] pt-[65px] pb-[235px] desk:pb-[170px] desk:px-[120px]"
    >
      <div className=" text-white uppercase text-center mb-[72px] desk:mb-[133px]">
        <h3 className=" text-[18px] desk:-[24px]">
          Can My Computer Run this game?
        </h3>
        <h1 className=" text-[33px] desk:-[50px]">system requirements</h1>
      </div>
      <div className=" grid grid-cols-2 grid-rows-1 text-white text-[14px] border border-white border-opacity-30 desk:w-[574px]">
        <div className="flex flex-col border border-white border-opacity-30 p-[10px] h-fit">
          <span className=" block text-[18px] text-orange">os:</span>
          <span className="block">
            Windows 7 64-bit only (No OSX support at this time)
          </span>
        </div>
        <div className="flex flex-col border border-white border-opacity-30 p-[10px] h-fit">
          <span className=" block text-[18px] text-orange">processor:</span>
          <span className=" block">
            Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8GHZ
          </span>
        </div>
        <div className="flex flex-col border border-white border-opacity-30 p-[10px] h-fit">
          <span className=" block text-[18px] text-orange">memory:</span>
          <span className=" block">8 GB RAM</span>
        </div>
        <div className="flex flex-col border border-white border-opacity-30 p-[10px] h-fit">
          <span className=" block text-[18px] text-orange">storage:</span>
          <span className=" block "> 8 GB available space</span>
        </div>
        <div className=" col-span-2 flex flex-col border border-white border-opacity-30 p-[10px] h-fit  ">
          <span className=" block text-[18px] text-orange">graphics:</span>
          <span className="block ">
            NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11
            (Shader Model 5)
          </span>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
