import bannerImg from "../../../assets/banner-ship-image.jpg";

const Banner = () => {
  return (
    <div>
      {" "}
      <div className="relative z-0">
        <img src={bannerImg} className="w-full h-[600px] object-cover" alt="" />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <p className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="40"
              viewBox="0 0 640 512"
            >
              <path
                fill="#ffffff"
                d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </p>
          <p className="my-8 lg:text-xl">
            FAST <span>&nbsp;.&nbsp;</span> SECURED<span>&nbsp;.&nbsp;</span>{" "}
            WORLDVIEW
          </p>
          <p className="lg:text-5xl text-2xl font-extrabold">
            AWESOME TEMPLATE FOR <br />{" "}
            <span className="text-yellow-500">COURIER</span> &{" "}
            <span className="text-yellow-500">DELIVERY</span> SERVICES
          </p>
        </div>
      </div>
      <div className="w-full absolute">
        <div className="lg:w-1/2 w-full mx-auto bg-white border-2 border-red-500 h-32 -mt-24 z-10">
          <p className="font-medium text-xl px-8 py-4">
            TRACK YOUR PRODUCT{" "}
            <span className="font-light text-sm text-slate-500">
              Now you can track your product easily
            </span>
          </p>
          <div className="flex justify-center">
            <input
              type="text"
              name="productID"
              className="border-2 border-slate-300 px-3 h-14 w-[400px]"
              id=""
              placeholder="Enter your product ID"
            />
            <button className="btn bg-red-500 hover:bg-black  h-14 w-72 ml-4 text-white">
              TRACK YOUR PRODUCT
            </button>
          </div>
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default Banner;
