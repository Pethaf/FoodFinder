import mongoose, { model }  from "mongoose";
import { LocationSchema, LocationType } from "../schema";
export default mongoose.models.location || model<LocationType>("locations", LocationSchema)

