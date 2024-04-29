import Image from "next/image";
import React from "react";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-vAppBg text-vForeground gap-2">
          <ValoBtn to={"google.com"}>LEARN THE GAME</ValoBtn>
          <ValoBtn to={"google.com"}>VIEW ALL AGENTS</ValoBtn>
          <ValoBtn to={"google.com"}>VIEW ALL MAP</ValoBtn>
      </main>
  );
}

const ValoBtn:React.FC<React.HTMLAttributes<HTMLAnchorElement>&{to: string}> = ({children, to, ...props})=> {

    return (
        <a {...props}>
            <div className={`w-[277px] flex flex-col items-center relative`}>
                <div className={`border mb-[-20px] w-full h-[27px] border-[#bdbcb7] border-b-0`}></div>
                <div className="relative group z-50">
                    <div className="relative cursor-pointer overflow-hidden">
                        <div className={`h-[53px] w-[264px] pl-1`}>
                            <div
                                className="absolute z-20 flex items-center justify-center w-[264px] h-[53px] font-bold text-[14px] text-vAppBg">
                                {children}
                            </div>
                            <div
                                className="skew-x-[-10deg] absolute top-0 left-[-280px] h-[53px] w-[275px] bg-vForeground transition-all duration-300 ease-in-out group-hover:left-[-5px] z-10">
                            </div>
                            <div className="relative bg-vPrimary h-[53px] w-[261px]">
                                <div className="absolute bottom-0 right-0 bg-vPrimary h-[50px] w-[264px]">
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 h-1 w-[4px]
                      bg-vForeground group-hover:bg-vAppBg z-20 transition-all delay-150 ease-in-out
                      "></div>
                        </div>
                    </div>
                </div>
                <div className={`border mt-[-20px] w-full h-[27px] border-[#bdbcb7] border-t-0`}></div>
            </div>
        </a>
    )
}