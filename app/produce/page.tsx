import BackLink from "@/components/BackLink"

export default function ProduceCodes() {
  return (
    <main>
      <BackLink />
      {/* <PageTitle title={title} /> */}

      {/* <ul className={classes.produceIndex}>
        {produceData
          .sort((a, b) => {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            return 0
          })
          .map((item) => (
            <li key={item.name} onClick={handleClick} data-item-upc={item.upc}>
              <ImageWithFixedSize src={item.imgUrl} width={40} height={40} />
              {item.name}
            </li>
          ))}
      </ul> */}

      {/* <section className={`modal ${!$isModalShown && "hide"}`}>
        <div
          className="backdrop"
          onClick={() => isModalShown.set(!$isModalShown)}>
          <div className="modalCard">
            <Card item={$selectedProduceItem} />
          </div>
        </div>
      </section> */}
    </main>
  )
}
