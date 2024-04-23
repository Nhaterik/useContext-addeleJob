import { setJob, addJob, deleteJob } from "./const";
export const AddJob = (load) => ({
  type: addJob,
  load,
});
export const SetJob = (load) => ({
  type: setJob,
  load,
});
export const DeleteJob = (load) => ({
  type: deleteJob,
  load,
});
