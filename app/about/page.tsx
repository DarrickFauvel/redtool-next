import BackLink from "@/components/BackLink"
import PageTitle from "@/components/PageTitle"
import { appTitle, authorData, techStack } from "@/config"

const AboutPage = () => {
  return (
    <>
      <BackLink />
      <PageTitle title="About" />

      <div className="flex flex-col gap-4">
        <p>
          <strong>{appTitle}</strong> is a personal web application project
          created by Fulfillment Team Member, {authorData.name}, at Target Store
          #2480 in Lowell, Massachusetts, USA.
        </p>
        <p>
          It&apos;s purpose is to help me do my job at Target, more effectively
          and efficiently.
        </p>
        <p>If you find this app useful too, let me know.</p>
        <p>:Darrick</p>
      </div>

      <article className="text-sm my-10 p-4 bg-pink-100 rounded-md leading-6">
        <p>This web app was developed using:</p>
        <ul className="list-disc ml-6">
          {techStack.map((item) => (
            <li key={item.name}>
              <strong>
                <a href={item.url} target="_blank">
                  {item.name}
                </a>
              </strong>{" "}
              - {item.description}
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default AboutPage
