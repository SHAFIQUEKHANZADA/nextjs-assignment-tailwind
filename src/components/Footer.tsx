import Image from "next/image"
import { FaApple, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

 
const Footer = () => {
  return (
   <div>
     <div className="flex lg:flex-row flex-col lg:gap-0 gap-[10vw] sm:mx-[4vw] mx-[6vw] justify-evenly my-20">
        <div className="md:w-[20%]">
            <h1 className="text-5xl font-semibold">Roamly.</h1>
            <p className="text-[#5E6282] w-[90%]  text-[14px] mt-6">Book your trip in minute, get full control for much longer.</p>
        </div>

        <div className="flex sm:flex-row flex-col sm:gap-16 gap-10">
            {/* 1 */}
          <div>
          <h1 className="text-[24px] font-bold">Company</h1>
            <ul className="sm:mt-6 mt-1 text-[#5E6282] text-[19px] flex flex-col gap-[2px]">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
            {/* 2 */}
          <div>
          <h1 className="text-[24px] font-bold">Contact</h1>
            <ul className="sm:mt-6 mt-1 text-[#5E6282] text-[19px] flex flex-col gap-[2px]">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </div>
            {/* 3 */}
          <div>
          <h1 className="text-[24px] font-bold">More</h1>
            <ul className="sm:mt-6 mt-1 text-[#5E6282] text-[19px] flex flex-col gap-[2px]">
              <li>Airlinefess</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
            <div className="flex gap-5">
                <span className="rounded-full p-3 text-[19px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:text-white hover:bg-[#1877F2]"><FaFacebookF /></span>
                <span className="rounded-full p-3 text-[19px] text-white bg-gradient-to-r from-purple-400 via-pink-500  to-orange-400"><FaInstagram /></span>
                <span className="rounded-full p-3 shadow-[0_4px_12px_rgba(0,0,0,0.2)] text-[19px] hover:text-white hover:bg-[#1DA1F2]"><FaTwitter /></span>
            </div>

            <h1 className="text-[#5E6282] text-[24px]">Discover our app</h1>

            <div className="flex gap-2">

                <div className="flex bg-[#080808] items-center py-2 px-5 rounded-[50px] gap-2">
                  <div className="flex items-center">
                  <Image src={"/images/play.png"} alt="playstore" width={20} height={20}/>
                  </div>
                  <div>
                    <h1 className="text-white text-[10px] font-semibold leading-none">GET IT ON</h1>
                    <p className="text-white/80 text-[8px] font-light">GOOGLE PLAY</p>
                  </div>
                </div>

                <div className="flex bg-[#080808] items-center py-2 px-5 rounded-[50px] gap-2">
                <div className="flex items-center">
                <FaApple className="text-white text-[19px]" />
                </div>
                <div>
                    <p className="text-white text-[8px] font-light">Available on the</p>
                    <h1 className="text-white text-[10px] font-semibold leading-none">App Store</h1>
                  </div>
                </div>
            </div>
        </div>
    </div>

    <div className="flex justify-center items-center py-5">
         <p className="text-[#5E6282] text-[16px]">All rights reserved@roamly</p>
    </div>
   </div>
  )
}

export default Footer