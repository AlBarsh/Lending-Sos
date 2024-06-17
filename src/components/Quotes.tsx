import QuotesData from "../servises/QuotesData";
import twitter from "../resurses/twitter.svg";

const Quotes = () => {
  const items = QuotesData.map((item, i) => {
    return (
      <div
        key={i}
        className="flex flex-col gap-[15px] justify-between min-w-[230px] p-[15px] bg-white rounded-[10px]  bg-opacity-10 max-w-[550px] w-full even:self-start desk: odd: justify-self-end desk:max-w-[450px]"
      >
        <div className="flex justify-between items-center ">
          <div className="flex gap-[20px]">
            <div className="flex items-center">
              <img
                src={item.photo}
                alt=""
                className="block size-fit rounded-[50%]"
              />
            </div>
            <div>
              <span className="block text-orange text-[21px] font-bold uppercase">
                {item.name}
              </span>
              <span className="block text-white text-[14px] opacity-30">
                {item.workPlace}
              </span>
            </div>
          </div>
          <img src={twitter} alt="" />
        </div>
        <p className="text-white text-[14px]">{item.quote}</p>
        <data className="text-white text-[12px] opacity-30">{item.data}</data>
      </div>
    );
  });
  return (
    <section
      id="quotes"
      className="px-[15px] bg-bgimg1 bg-cover pt-[36px] pb-[47px] desk:flex desk:px-[120px] desk:justify-between desk:gap-[100px] desk:pt-[160px] desk:pb-[150px]"
    >
      <div className="flex flex-col desk:max-w-[440px]">
        <div className="text-white">
          <h3 className="text-[18px]  desk:text-[24px] uppercase">
            What people think?
          </h3>
          <h1 className="text-[33px] font-bold desk:text-[50px] mb-[45px] uppercase">
            Press quotes
          </h1>
          <p className="text-[14px] mb-[40px]">
            Our goal is to create a product and service that you’re satisfied
            with and use it every day. This is why we’re constantly working on
            our services to make it better every day and really listen to what
            our users has to say.
          </p>
        </div>
        <button className="bg-orange rounded-[3px] desk:text-[16px] font-bold size-fit px-[15px] py-[10px] mb-[30px] mx-auto">
          Read more testemonials
        </button>
      </div>
      <div className="flex flex-col gap-[20px] items-end max-w-[800px] desk:w-full ">
        {items}
      </div>
    </section>
  );
};

export default Quotes;
