import { MdFavorite } from "react-icons/md";

const Footer = () => {
  return( 
  <div className="py-10">
    <div className="h-[1px] w-full bg-gray-700"></div>
    <div className="flex flex-col items-center justify-center py-5">
        <h1 className="text-white">
            <span>Designed and Developed With By</span>
            <span className="text-red">
                <MdFavorite size={24} />
            </span>
        </h1>
        <h1 className="text-white">
            <span>Richmond Andoh</span>
        </h1>
    </div>
  </div>
)};

export default Footer;
