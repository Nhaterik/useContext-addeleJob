import { addJob, setJob, deleteJob } from "./const";
const initState = {
  job: "",
  jobs: [],
};
function Reducer(state, action) {
  switch (action.type) {
    case setJob:
      return {
        ...state,
        job: action.load,
      };
    case addJob:
      return {
        ...state,
        jobs: [...state.jobs, action.load],
        job: "",
      };
    case deleteJob:
      const currentJobs = [...state.jobs];
      currentJobs.splice(action.load, 1);
      return {
        jobs: currentJobs,
        job: "",
      };
    default:
      throw new Error("Oh I love you NhatErik");
  }
}
export { initState };
export default Reducer;
