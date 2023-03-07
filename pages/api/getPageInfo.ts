import { PageInfo} from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from 'next-sanity';
import { sanityClient } from "../../sanity";


const query = groq`
     *[_type == "pageInfo"][0]    
`;

//Next.js template end points

type Data = {
    pageInfo: PageInfo;
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
      const pageInfo: PageInfo = await sanityClient.fetch(query);

    res.status(200).json({ pageInfo });
  }