import ReactBarcode from "react-barcode"

const Barcode = (props) => {
  return (
    <ReactBarcode
      value={props.barcodeValue}
      height={50}
      text={props.dpci || undefined}
      fontSize={15}
    />
  )
}

export default Barcode
