import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/middleware/db-connect";

import { findAllLocations } from "@/mongoose/locations/services";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await dbConnect();
  const locations = await findAllLocations();
  res.status(200).json(locations)
}

