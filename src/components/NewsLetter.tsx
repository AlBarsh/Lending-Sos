import NewsForm from "./NewsForm";
const NewsLetter = () => {
  return (
    <section className="  bg-black px-[15px] py-[65px] desk:px-[120px]">
      <div className="flex">
        <div className="min-h-[300px] bg-bgScull h-full w-[600px] right-[15%] desk:right-0 bg-cover  opacity-40 relative ">
          <div className="  opacity-15 bg-bgShad  size-full min-h-[300px] bg-cover"></div>
        </div>
        <div className=" text-white flex flex-col">
          <h3 className="text-[12px] desk:text-[24px] uppercase">
            Want to stay in touch?
          </h3>
          <h1 className="text-[33px] desk:-[50px] font-bold uppercase mb-[30px]">
            newsletter SUBSCRIBE
          </h1>
          <p className="text-[14px] desk:text-[18px] desk:mb-[70px]">
            In order to start receiving our news, all you have to do is enter
            your email address. Everything else will be taken care of by us. We
            will send you emails containing information about game. We don’t
            spam.
          </p>
          <div className="hidden desk:block">
            <NewsForm />
          </div>
        </div>
      </div>
      <div className="desk:hidden max-w-[450px] mx-auto">
        <NewsForm />
      </div>
    </section>
  );
};

export default NewsLetter;
