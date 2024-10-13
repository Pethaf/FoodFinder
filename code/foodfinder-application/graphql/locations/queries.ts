import {
  findAllLocations,
  findLocationsById,
  onUserWishlist,
} from "@/mongoose/locations/services";

export const locationQueries = {
  allocations: async (_: any) => {
    return await findAllLocations();
  },
  locatationsById: async (_: any, param: { location_ids: string[] }) => {
    return await findLocationsById(param.location_ids);
  },
  onUserWishlist: async (_: any, param: { user_id: string }) => {
    return await onUserWishlist(param.user_id);
  },
};
