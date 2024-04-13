
const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <i className="ri-facebook-circle-line text-gray text-xl"></i>
          <i className="ri-instagram-line text-gray text-xl"></i>
          <i className="ri-github-fill text-gray text-xl"></i>
          <i className="ri-twitter-x-line text-gray text-xl"></i>
          <i className="ri-linkedin-box-line text-gray text-xl"></i>
        </div>
      </div>
      <div className="h-32 text-center ml-2 w-[1px] bg-[#09606b73] sm:hidden"></div>
    </div>
  );
};

export default LeftSider;
