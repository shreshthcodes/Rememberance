import React, {useState} from "react";
import ParticlesBg from "particles-bg";
import Navbar from "./components/Navbar/Navbar";
import ListInput from "./components/listInput/ListInput";
import taskContext from "./context/TaskContext";
import TaskCards from "./components/TaskCards/TaskCards";
import idContext from "./context/IdContext";
function App() {
  const [tasks, setTask] = useState([]);
  const [id,setId] = useState(0);
  return (
    <React.Fragment>
      <ParticlesBg
      color=" #EFB7B7"
        num={200}
        type="cobweb"
        bg={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}
      />
      <Navbar />
      <taskContext.Provider value={[tasks, setTask]}>
        <idContext.Provider value={[id,setId]}>
        <ListInput />
      {tasks && 
        <TaskCards />
        }
        </idContext.Provider>
      </taskContext.Provider>
    </React.Fragment>
  );
}

export default App;
