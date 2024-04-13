const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary-content flex flex-col items-start justify-center gap-9 py-10">
      <h1 className="text-white mt-12 pt-12 font-semibold">Hi There, I am</h1>
      <h1 className="text-primary text-7xl sm:text-3xl md:text-4xl font-semibold">
        Richmond Manu Andoh
      </h1>
      <h1 className="text-white text-6xl sm:text-2xl md:text-3xl font-semibold">
        I Build Things For The Web.
      </h1>
      <p className="text-white w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt
        exercitationem eius, rerum architecto earum ex dolore minus consequatur
        totam maiores culpa odit
      </p>
      <button className="text-teal border border-teal px-9 py-4 text-center">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
