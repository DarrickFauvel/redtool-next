import Image from "next/image"
import qrcode from "@/assets/images/redtool-qrcode.svg"

const Qrcode = () => (
  <>
    <span className="uppercase text-red-700 font-bold">Share this app</span>
    <div className="flex flex-col gap-2 p-2 border-[1px] border-red-700 rounded-lg text-center text-red-700 uppercase text-sm">
      <Image src={qrcode} alt="qrcode for redTool" priority />
      <span
        className="text-sm lowercase text-gray-800
      ">
        redtool.darrickdevelops.com
      </span>
    </div>
  </>
)

export default Qrcode
