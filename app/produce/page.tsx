"use client"
import React, { useState } from "react"
import { produceData } from "@/config"
import BackLink from "@/components/BackLink"
import PageTitle from "@/components/PageTitle"
import Card from "./components/Card"
import Image from "next/image"

type Item = {
  name: string
  upc: string
  dpci: string
  imgUrl: string
}

const ProducePage = () => {
  const [selectedProduceItem, setSelectedProduceItem] = useState({})
  const [isModelShown, setIsModelShown] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target) {
      const itemUpc = (e.target as HTMLButtonElement).closest("button")?.dataset
        .itemUpc
      const newItem = produceData.find((item) => item.upc === itemUpc)
      if (newItem) {
        setSelectedProduceItem(newItem)
        setIsModelShown((prev) => !prev)
      }
    }
  }

  return (
    <>
      <BackLink />
      <PageTitle title="Produce Codes" />

      <ul className="flex flex-wrap gap-4 mb-20">
        {produceData
          .sort((a, b) => {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            return 0
          })
          .map((item) => (
            <li key={item.name}>
              <button
                className="flex items-center gap-1 border border-gray-300 rounded-lg py-1 pr-4 pl-3 no-underline text-black overflow-hidden cursor-pointer hover:border-gray-400"
                onClick={handleClick}
                data-item-upc={item.upc}>
                <Image
                  src={item.imgUrl}
                  width={40}
                  height={40}
                  alt={item.name}
                />
                {item.name}
              </button>
            </li>
          ))}
      </ul>

      {isModelShown && (
        <section>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 bg-gray-800 bg-opacity-80 flex justify-center items-center z-30"
            onClick={() => setIsModelShown((prev) => !prev)}>
            <div className="modalCard">
              <Card selectedProduceItem={selectedProduceItem} />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
export default ProducePage
