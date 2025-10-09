import React from 'react';
import playStore from "../../assets/Group.png";
import appStore from "../../assets/Group2.png";
import heroImg from "../../assets/hero.png"

const Trusted = () => {
    return (
    <div>

       <div className="container mx-auto text-center pt-12 px-3 md:px-1">
            <p className="text-3xl md:text-5xl font-extrabold">We Build <br /> <span className="text-[#9F62F2]">Productive </span>Apps</p>
            <p className="text-gray-500 font-normal my-4">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="flex justify-center gap-3">
                <a href="https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox&hl=en"  target="_blank"  rel="noopener noreferrer">
                  <button className="flex border-1 border-gray-400 px-4 py-1 rounded items-center"> <span className="mr-2 cursor-pointer " ><img src={playStore} alt="" /></span> Google Pay</button>
                </a>
                <a href="https://play.google.com/store/apps?hl=en"  target="_blank"  rel="noopener noreferrer">
                  <button className="flex border-1 border-gray-400 px-4 py-1 rounded items-center"> <span className="mr-2 cursor-pointer " ><img src={appStore} alt="" /></span> App Store</button>
                </a>
            </div>
            <div className="flex justify-center mt-10">
                <img src={heroImg} alt="hero image" />
            </div>
        </div>

        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            <div className="container mx-auto text-center text-white py-15">
                <div>
                    <p className="text-2xl md:text-4xl font-extrabold" >Trusted By Millions, Built For You</p>
                </div>

                <div className="flex justify-evenly p-2 md:p-5">
                     <div>
                        <small className="text-gray-200" >Total Downloads</small>
                        <p className="text-xl md:text-3xl font-bold">29.6M</p>
                        <small className="text-gray-200" >21% More Than Last Month</small>
                     </div>
                     <div>
                        <small className="text-gray-200" >Total Reviews</small>
                        <p className="text-xl md:text-3xl font-bold">906K</p>
                        <small className="text-gray-200" >46% More Than Last Month</small>
                     </div>
                     <div>
                        <small className="text-gray-200" >Active Apps</small>
                        <p className="text-xl md:text-3xl font-bold">132+</p>
                        <small className="text-gray-200" >31 More Will Launch</small>
                     </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto text-center my-8 mt-15">
           <span>
             <p className="font-bold text-4xl mb-1">Trending Apps</p>
             <small className="text-gray-500 font-light">Explore All Trending Apps on the Market developed by us</small>
           </span>
        </div>

    </div>
    );
};

export default Trusted;