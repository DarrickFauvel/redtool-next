"use client"
import { useState } from "react"
import BackLink from "@/components/BackLink"
import PageTitle from "@/components/PageTitle"
import Form from "./components/Form"
import Barcode from "@/components/Barcode"

const GeneratorPage = () => {
  const [inputValue, setInputValue] = useState("")
  const [barcodeValue, setBarcodeValue] = useState("")

  return (
    <>
      <BackLink />
      <PageTitle title="Barcode Generator" />

      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        setBarcodeValue={setBarcodeValue}
      />

      <section className=" flex justify-center mt-16 text-center">
        {barcodeValue && <Barcode barcodeValue={barcodeValue} />}
      </section>
    </>
  )
}
export default GeneratorPage
