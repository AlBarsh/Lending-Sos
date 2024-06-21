import NewsForm from "./NewsForm";
import shad from "../resurses/shad.jpg";
import skull from "../resurses/scull.jpg";

const NewsLetter = () => {
  return (
    <section className="  bg-black px-[15px] py-[65px] desk:px-[120px]">
      <div className="flex ">
        <div className="   min-h-[300px] 	 min-w-[100px] w-full right-[15px] desk:right-0 bg-black overflow-hidden relative desk:mr-[67px]">
          <img
            src={skull}
            alt="skull"
            className="object-contain h-[310px] desk:h-auto opacity-50 min-w-[213px] block absolute right-[15px] desk:static"
          />
        </div>

        <div className=" text-white flex flex-col">
          <h3 className="text-[12px] font-bebas tracking-[3px] desk:text-[24px] uppercase">
            Want to stay in touch?
          </h3>
          <h1 className="text-[33px] font-bebas tracking-[3px] desk:text-[70px] font-bold uppercase mb-[30px]">
            newsletter SUBSCRIBE
          </h1>
          <p className="text-[14px] font-open desk:text-[18px] desk:mb-[70px]">
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
