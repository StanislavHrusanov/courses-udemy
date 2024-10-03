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

  function handleAddProject(projectData) {
    setProjectState((state) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...state,
        selectedProjectId: undefined,
        projects: [...state.projects, newProject]
      }
    });
  }

  let addingProjectStatus;

  if (projectState.selectedProjectId === undefined) {
    addingProjectStatus = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    addingProjectStatus = <NewProject onAddProject={handleAddProject} />;
  }

  console.log(projectState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {addingProjectStatus}
    </main>
  );
}

export default App;
