import { createClient} from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url';

//config

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production0",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion:"2022-11-16",
    useCdn:process.env.NODE_ENV === "production",
};

//Set up the client for fetching data in the getProps page functions
export const  sanityClient = createClient(config);


//helper function
export const urlFor =(source: any) =>
        createImageUrlBuilder(config).image(source);