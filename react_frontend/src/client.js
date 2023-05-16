import  SanityClient  from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client =new  SanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: '2021-11-16',
  useCdn: true, 
  token: process.env.REACT_APP_SANITY_TOKEN_ID,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
