"use client"
import { useState } from "react"
import { roboto_mono } from "@/lib/fonts"
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
      {barcodeValue && (
        <section className="relative flex flex-col w-min mx-auto items-center mt-8 px-4 py-2 border border-gray-400 rounded-xl animate-slide-up shadow-xl">
          <Barcode barcodeValue={barcodeValue} />
          <p
            className={`z-10 flex gap-2 -mt-[8px] tracking-wider ${roboto_mono.className}`}>
            {displayBarcodeSegments()}
          </p>
        </section>
      )}
    </>
  )
}
export default GeneratorPage
