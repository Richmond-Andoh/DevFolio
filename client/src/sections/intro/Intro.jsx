import Profile from "/profileImg.png"

const Intro = () => {
  return (
    <div className="flex w-full items-center justify-center sm:flex-col-reverse sm:items-center sm:justify-center">
      <div className="h-[100vh] w-4/6 bg-primary-content flex flex-col items-start justify-center gap-9 py-10 sm:w-auto sm:h-auto">
        <h1 className="text-white mt-12 pt-12 font-semibold">Hi There, I am</h1>
        <h1 className="text-primary text-6xl sm:text-3xl md:text-4xl font-semibold">
          Richmond Manu Andoh
        </h1>
        <h1 className="text-white text-5xl sm:text-2xl md:text-3xl font-semibold">
          I Build Things For The Web.
        </h1>
        <p className="text-white w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt
          exercitationem eius, rerum architecto earum ex dolore minus
          consequatur totam maiores culpa odit
        </p>
        <div className="flex gap-5">
          <button className="text-teal border border-teal px-7 py-3 text-center">
            Download CV
          </button>
          <button className="text-teal border border-teal px-7 py-3 text-center">
            Hire Me
          </button>
        </div>
      </div>
      <div className="w-2/6 sm:mt-12 sm:h-auto sm:w-auto">
        <img src={ Profile } alt="" />
      </div>
    </div>
  );
};

export default Intro;
