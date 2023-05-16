import vactor from "./../../../../../../assets/dln/Vector.png";
import ckoutimg from "./../../../../../../assets/images/checkout/checkout.png";
const ShortBannar = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-full" src={ckoutimg} alt="" />
        <div className="absolute flex items-end justify-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white  left-0 right-0 gap-5 top-0 bottom-0   rounded-xl">
          <div>
            <div className="relative">
              <img className="bottom-0" src={vactor} alt="" />
            </div>
            <div className="absolute text-center -mt-10 text-2xl ms-16">
              Home/Checkout
            </div>
          </div>
        </div>
        { 
          <div className="absolute text-white -mt-44">
            <h2 className="ms-24 text-4xl font-bold ">Check Out</h2>
          </div>
        }
      </div>
    </div>
  );
};

export default ShortBannar;
