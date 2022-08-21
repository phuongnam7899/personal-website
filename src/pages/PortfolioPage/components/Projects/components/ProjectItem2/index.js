import { Chip } from "@components";
import "./index.scss";

export const ProjectItem2 = ({ project, setSelectedProject }) => {
  const { name, tags, description, thumbnailImg } = project;
  return (
    <div
      className="project-item"
      onClick={() => {
        setSelectedProject(project);
      }}
    >
      <img src={thumbnailImg} />
      <div className="detail">
        <h3 className="prj-name">{name}</h3>
        {/* <div className="tags">
          {tags.map((tag) => (
            <Chip>{tag}</Chip>
          ))}
        </div> */}
        <div className="description">{description}</div>
      </div>
    </div>
  );
};
