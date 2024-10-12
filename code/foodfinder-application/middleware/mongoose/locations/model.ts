import mongoose, { model }  from "mongoose";
import { LocationType, LocationSchema } from "../schema";
export default mongoose.models.location || model<LocationType>("locations", LocationSchema)

