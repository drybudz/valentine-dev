import {defineConfig} from 'sanity'
// import {deskTool} from "sanity/desk"
import {structureTool} from 'sanity/structure'
// import project from './sanity/schemas/project-schema'; //old version before refactor
import schemas from './sanity/schemas'; //Barrel file
// import {visionTool} from '@sanity/vision'

const config = defineConfig({
    title: 'Valentine Studio Dev',
    // projectId :2j7eol5d

    projectId: 'm2vd2mbt',
    dataset: 'production',
    apiVersion: "2025-05-10",
    basePath: "/admin", //it could be studio
  
    plugins: [structureTool()],
    schema: {
        types: schemas
    },
})
export default config;
