import React from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import Barcode from "@/components/Barcode"
import Icon from "@/components/Icon"

interface Item {
  name: string
  upc: string
  dpci: string
  imgUrl: string
}

interface Props {
  selectedProduceItem: Item
}

const CardComponent: React.FC<Props> = ({ selectedProduceItem }) => {
  const item = selectedProduceItem
  return (
    <>
      <Card
        className="relative bg-white text-black/80"
        key={item.name}
        id={item.upc}>
        <CardHeader className="px-4 pt-3 pb-0">
          <CardTitle className="text-xl font-semibold">{item.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-start px-4 pt-2 pb-3">
          <Image
            className="mt-2"
            src={item.imgUrl}
            width={50}
            height={50}
            alt={item.name}
          />
          {item.upc && <Barcode barcodeValue={item.upc} dpci={item.dpci} />}
        </CardContent>
        <div className="absolute w-8 h-8 -top-3 -right-3 flex justify-center items-center bg-red-500 hover:bg-red-500/95 rounded-full leading-none shadow-md cursor-pointer">
          <Icon className="text-white" icon="ep:close-bold" />
        </div>
      </Card>
    </>
  )
}

export default CardComponent
