const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200 rounded-lg min-h-max">
        <div className="hero-content flex-col lg:flex-row-reverse m-4 md:m-6 lg:m-12">
          <img
            src="https://pngimg.com/d/book_PNG2111.png"
            className="lg:w-2/5 w-2/3 md:w-2/4 mx-auto rounded-lg z-0"
          />
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>
            <button
              className="btn text-white bg-green-500 hover:text-green-500 hover:bg-transparent border-2
                        hover:border-green-500 border-green-500"
            >
              {" "}
              View the list
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
