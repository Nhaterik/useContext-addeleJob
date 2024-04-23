import "./styles.css";
import { useStore, actions } from "./store";
function App() {
  const [state, dispatch] = useStore();
  const { job, jobs } = state;
  console.log(job);
  return (
    <div>
      <input
        value={job}
        placeholder="write something"
        onChange={(e) => dispatch(actions.SetJob(e.target.value))}
      />
      <button onClick={() => dispatch(actions.AddJob(job))}> Add</button>
      {jobs.map((job, idx) => (
        <li key={idx}>
          {" "}
          {job}
          <span onClick={() => dispatch(actions.DeleteJob(idx))}>
            {" "}
            &nbsp;&times;{" "}
          </span>
        </li>
      ))}
    </div>
  );
}
export default App;
