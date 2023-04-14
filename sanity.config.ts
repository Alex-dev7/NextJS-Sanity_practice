import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"

const config = defineConfig({

    projectId: "9b2hl3ye",
    dataset: "production",
    title: "My Personal Project",
    apiVersion: "2023-14-04",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }

})



export default config