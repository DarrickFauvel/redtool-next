"use client"
import { roboto_mono } from "@/lib/fonts"
import React, { type ChangeEvent, type FormEvent } from "react"

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
        <input
          className="w-full p-4 border-[1px] border-gray-600 rounded-lg tracking-widest"
          type="search"
          id="inputValue"
          name="textInput"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter location identifier..."
          autoComplete="off"
        />
        <label
          className="flex justify-center items-center gap-1 text-gray-500 text-sm"
          htmlFor="textInput">
          <span className="text-xs">example:</span>{" "}
          <span>01A035M02, 99B106A05, SHPQB01, etc.</span>
        </label>
      </div>
      <button
        className="px-3 py-4 tracking-wider rounded-lg border-none cursor-pointer bg-red-600 text-white font-bold hover:bg-red-800"
        type="submit">
        GENERATE
      </button>
    </form>
  )
}

export default Form
