"use client"
import { useState } from "react"
import Barcode from "@/components/Barcode"
import PageTitle from "@/components/PageTitle"
import BackLink from "@/components/BackLink"
import Form from "./components/Form"

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

      <section className=" flex justify-center mt-8 text-center">
        {barcodeValue && <Barcode barcodeValue={barcodeValue} />}
      </section>
    </>
  )
}
export default GeneratorPage
