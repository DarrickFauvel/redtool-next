import { roboto_mono } from "@/lib/fonts"
import ReactBarcode from "react-barcode"

type BarcodeProps = {
  barcodeValue: string
  dpci?: string
}

const Barcode = ({ barcodeValue, dpci }: BarcodeProps) => {
  return (
    <div className="flex flex-col items-center">
      <ReactBarcode
        value={barcodeValue}
        height={50}
        fontSize={15}
        displayValue={false}
      />
      {dpci && <p>{dpci}</p>}
    </div>
  )
}

export default Barcode
