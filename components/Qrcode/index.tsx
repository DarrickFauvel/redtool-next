import Image from "next/image"
import qrcodeImage from "@/assets/images/redtool-qrcode.svg"

const Qrcode = () => (
  <>
    <span className="uppercase text-primary font-bold">Share this app</span>
    <div className="flex flex-col gap-2 p-2 w-44 bg-white border-[1px] border-primary rounded-lg text-center text-red-700 uppercase text-sm">
      <Image src={qrcodeImage} alt="qrcode for redTool" priority />
      <span
        className="text-xs lowercase text-gray-800
      ">
        redtool.darrickdevelops.com
      </span>
    </div>
  </>
)

export default Qrcode
