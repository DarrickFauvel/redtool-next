type PageTitleProps = {
  title: string
}

const PageTitle = ({ title }: PageTitleProps) => {
  return <h1 className="text-2xl font-bold mb-3">{title}</h1>
}

export default PageTitle
