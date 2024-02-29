"use client"
import React, { type ChangeEvent, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type FormProps = {
  inputValue: string
  setInputValue: (arg0: string) => void
  setBarcodeValue: (arg0: string) => void
}

const Form = ({ inputValue, setInputValue, setBarcodeValue }: FormProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toUpperCase())
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue) {
      return
    }
    setBarcodeValue(inputValue)
  }

  return (
    <form className="flex flex-col gap-4" id="form" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <Input
          className="border-gray-500"
          type="search"
          id="inputValue"
          name="textInput"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter location identifier..."
          autoComplete="off"
        />
        <p className="flex justify-center items-center gap-1 text-gray-400 text-xs font-normal">
          example: 01A035M02, 99B106A05, SHPQB01, etc.
        </p>
      </div>

      <Button className="bg-red-600 hover:bg-red-600/90 tracking-wider mt-4">
        GENERATE
      </Button>
    </form>
  )
}

export default Form
