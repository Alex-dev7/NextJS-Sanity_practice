import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Projects";
import clientConfig from "./config/client-config";
import { Page } from "@/types/page";


export async function getProjects(): Promise<Project[]> {

    // this also works bu it doesn make our code DRY
    // const client = createClient({
    //     projectId: "9b2hl3ye",
    //     dataset: "production",
    //     apiVersion: "2023-04-14",
    // })
    // return client.fetch(...)

    return createClient(clientConfig).fetch(
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


// get individual project
export async function getProject(slug: string): Promise<Project>{



    return createClient(clientConfig).fetch(
        groq`*[_type=="project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            alt,
            content
        }`,
        { slug: slug}
    )
}



// pages

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            
        }`
    )
}


export async function getPage(slug: string): Promise<Page>{
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        {slug}
    )
}


