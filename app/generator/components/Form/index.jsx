"use client"

// import { useStore } from "@nanostores/react"
// import { generatorFormData } from "../../../../stores/barcodeGeneratorStore"

// import classes from "./form.module.css"

const Form = ({ inputValue, setInputValue, barcodeValue, setBarcodeValue }) => {
  // const $generatorFormData = useStore(generatorFormData)

  const handleChange = (e) => {
    // const { name, value } = e.target
    // generatorFormData.set({
    //   ...$generatorFormData,
    //   [name]: value?.toUpperCase(),
    // })
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue) {
      return
    }
    // generatorFormData.set({
    //   ...$generatorFormData,
    //   barcodeValue: $generatorFormData.inputValue,
    // })
    setBarcodeValue(inputValue)
  }

  return (
    <form className="flex flex-col gap-4" id="form" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <input
          className="w-full p-4 border-[1px] border-gray-600 rounded-lg"
          type="search"
          id="inputValue"
          name="textInput"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter location identifier..."
          autoComplete="off"
        />
        <label
          className="flex justify-center gap-1 text-gray-500 text-sm"
          htmlFor="textInput">
          <span className="inline-block pb-1 text-xs">example:</span> 01A035M02,
          99B106A05, etc.
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
