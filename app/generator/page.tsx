"use client"
import { useState } from "react"
import Barcode from "@/components/Barcode"
import PageTitle from "@/components/PageTitle"
import BackLink from "@/components/BackLink"
import Form from "./components/Form"

const GeneratorPage = () => {
  const [inputValue, setInputValue] = useState("")
  const [barcodeValue, setBarcodeValue] = useState("")

  const displayBarcodeSegments = () => {
    let barcodeSegments = []
    barcodeSegments[0] = barcodeValue.slice(0, 3)
    barcodeSegments[1] = barcodeValue.slice(3, 6)
    barcodeSegments[2] = barcodeValue.slice(6)
    return (
      <>
        <span>{barcodeSegments[0]}</span>
        <span>{barcodeSegments[1]}</span>
        <span>{barcodeSegments[2]}</span>
      </>
    )
  }

  return (
    <>
      <BackLink />
      <PageTitle title="Barcode Generator" />

      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        setBarcodeValue={setBarcodeValue}
      />

      <section className=" flex justify-center mt-8 text-center">
        {barcodeValue && <Barcode barcodeValue={barcodeValue} />}
      </section>
    </>
  )
}
export default GeneratorPage
