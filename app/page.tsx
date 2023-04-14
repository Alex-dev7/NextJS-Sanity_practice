import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"


export default async function Home() {

  const projects = await getProjects()
  console.log(projects)
  return (
    <div className="max-w-5xl mx-auto py-20 px-10">
      <h1 className="text-7xl font-extrabold">Hello I&apos;m <span className="bg-gradient-to-r from-green-400 via-lime-400 to-blue-600 bg-clip-text text-transparent">Alexei</span>!</h1>
    <p className="mt-3 text-xl text-gray-500">Thanks for visiting my website!</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
     {projects.map((project) => (
      <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:bg-slate-900 transition-all duration-200">
        
        {
          project.image && (
            <Image 
            src={project.image}
            alt={project.alt}
            width={750}
            height={300}
            className="max-h-[300px] object-cover rounded-lg border border-gray-500"
            />
          )
        }
          <div className="mt-2 font-extrabold bg-gradient-to-r from-green-400 via-lime-400 to-blue-600 bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
     ))}
     </div>
    </div>
  )
}
