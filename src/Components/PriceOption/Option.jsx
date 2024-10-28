import PropTypes from "prop-types";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import Features from "./Features";

export default function Option({ option }) {
  const { name, currency, price, features } = option;
  return (
    <div className=" p-4 rounded-lg bg-blue-500 flex flex-col">
      <h1 className="text-center text-white">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-4xl font-bold">/mon</span>
      </h1>
      <h4 className="text-4xl font-bold text-center text-white my-4 flex justify-center items-center ">
        {name}
        <span>
          <MdOutlineWorkspacePremium></MdOutlineWorkspacePremium>
        </span>
      </h4>
      <div className="flex-grow">
      {features.map((feature, index) => (
        <Features key={index} feature={feature}></Features>
      ))}
      </div>
      <div className="my-6">
      <button className="text-xl font-bold w-full py-2 rounded-xl text-white bg-green-500 hover:bg-green-700 duration-700">
        Buy Now
      </button>
      </div>
    </div>
  );
}
Option.prototype = {
  option: PropTypes.object,
};
