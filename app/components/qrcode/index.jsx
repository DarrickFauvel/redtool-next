import qrcode from "@/assets/images/redtool-qrcode.svg"
// import ImageWithFixedSize from "../ImageWithFixedSize"
// import classes from "./qrcode.module.css"

import Image from "next/image"

const Qrcode = () => (
  <>
    <span className="uppercase bg-red-700 font-bold">Share this app</span>
    <div className="flex flex-col gap-2 p-2 border-[1px] border-red-700 rounded-lg text-center text-red-700 uppercase text-sm">
      {/* <ImageWithFixedSize src={qrcode} width={145} height={145} />
      <img src={qrcode} alt="" /> */}
      <Image src={qrcode} alt="qrcode for redTool" />
      <span className="text-sm lowercase text-stone-300">
        redtool.darrickdevelops.com
      </span>
    </div>
  </>
)

export default Qrcode
