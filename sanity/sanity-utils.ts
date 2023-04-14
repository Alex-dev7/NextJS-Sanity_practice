import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Projects";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "9b2hl3ye",
        dataset: "production",
        apiVersion: "2023-04-14",
    })

    return client.fetch(
        groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            alt,
            content
        }`
    )

}