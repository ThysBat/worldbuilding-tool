import useStore from "../../hook/useStore";
import { useProjectStore } from "../../stores/useProjectStore";
import { useRouter } from "next/router";

import InputField from "../InputField";

export default function NewProjectInput({ width, onCancel }) {
  const router = useRouter();
  const projectStore = useStore(useProjectStore, (state) => state);

  if (!projectStore) return <div>Loading...</div>;

  const { createNewProject, addProject } = projectStore;

  function onClickSave(projectName) {
    const newProject = createNewProject(projectName);
    addProject(newProject);
    router.push(`/project/${newProject.slug}`);
  }

  return <InputField width={width} onCancel={onCancel} onSave={onClickSave} />;
}
