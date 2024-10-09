import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/middleware/db-connect";
import Locations from "@/middleware/mongoose/locations/model";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  await dbConnect();
  const locations = await Locations.find({});
  res.status(200).json(locations);
}
