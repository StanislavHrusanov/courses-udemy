import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectState((state) => {
      return {
        ...state,
        selectedProjectId: null
      }
    });
  }

  let addingProjectStatus;

  if (projectState.selectedProjectId === undefined) {
    addingProjectStatus = <NoProjectSelected onAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    addingProjectStatus = <NewProject onAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject={handleStartAddProject} />
      {addingProjectStatus}
    </main>
  );
}

export default App;
