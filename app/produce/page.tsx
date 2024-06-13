"use client"
import React, { useState } from "react"
import { produceData } from "@/lib/config"
import CardComponent from "./components/Card"
import Image from "next/image"
import PageTitle from "@/components/PageTitle"
import BackLink from "@/components/BackLink"

type Item = {
  name: string
  upc: string
  dpci: string
  imgUrl: string
}

const ProducePage = () => {
  const [selectedProduceItem, setSelectedProduceItem] = useState({
    name: "",
    upc: "",
    dpci: "",
    imgUrl: "",
  })
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
                className="flex items-center gap-1 bg-white text-black/80 border border-secondary hover:border-secondary/80 rounded-lg py-1 pr-4 pl-3 no-underline overflow-hidden cursor-pointer"
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
            className="fixed top-0 bottom-0 left-0 right-0 bg-gray-800 bg-opacity-80 backdrop-blur-[2px] flex justify-center items-center z-30"
            onClick={() => setIsModelShown((prev) => !prev)}>
            <div className="modalCard animate-slide-up">
              <CardComponent selectedProduceItem={selectedProduceItem} />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
export default ProducePage
