// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB, Movie } from "./_db";
connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
      console.log(Movie);
    } catch (error) {
      console.log("error ", error);
    }
  }
}
