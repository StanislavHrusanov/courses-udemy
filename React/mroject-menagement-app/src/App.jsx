import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleDeleteProject(id) {
    setProjectState((state) => {
      return {
        ...state,
        selectedProjectId: undefined,
        projects: state.projects.filter((p) => p.id !== id)
      }
    });
  }

  function handleSelectProject(id) {
    setProjectState((state) => {
      return {
        ...state,
        selectedProjectId: id
      }
    });
  }

  function handleStartAddProject() {
    setProjectState((state) => {
      return {
        ...state,
        selectedProjectId: null
      }
    });
  }

  function handleCancelAddProject() {
    setProjectState((state) => {
      return {
        ...state,
        selectedProjectId: undefined
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

  const selectedProject = projectState.projects.find((p) => p.id === projectState.selectedProjectId);

  let content;

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancelProject={handleCancelAddProject} />;
  } else {
    content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  }

  console.log(projectState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
