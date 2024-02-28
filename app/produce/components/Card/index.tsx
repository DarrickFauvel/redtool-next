import Image from "next/image"
import Barcode from "@/components/Barcode"
import React from "react"

interface Item {
  name: string
  upc: string
  dpci: string
  imgUrl: string
}

interface Props {
  selectedProduceItem: Item
}

const Card: React.FC<Props> = ({ selectedProduceItem }) => {
  const item = selectedProduceItem
  return (
    <article
      className="bg-white rounded-lg pt-2 pb-0 px-3"
      key={item.name}
      id={item.upc}>
      <h3 className="font-bold capitalize">{item.name}</h3>

      <div className="flex items-center leading-none p-0">
        <div className="w-10 h-10">
          <Image src={item.imgUrl} width={40} height={40} alt={item.name} />
        </div>

        <section>
          {item.upc && <Barcode barcodeValue={item.upc} dpci={item.dpci} />}
        </section>
      </div>
    </article>
  )
}

export default Card
