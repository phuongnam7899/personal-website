import { Chip, Dialog } from "@components";
import _ from "lodash";
import "./index.scss";

export const ProjectDetailDialog = ({ project, onCloseDialog }) => {
  const { name, tags, description, url, sourceCode, features } = project;
  return (
    <Dialog onCloseDialog={onCloseDialog}>
      <div className="project-detail-dialog">
        <h3 className="project-name">{name}</h3>
        <div className="tags">
          {tags.map((tag) => (
            <Chip>{tag}</Chip>
          ))}
        </div>
        <div className="description">{description}</div>
        <div className="url">
          <b>Url:</b>
          {url ? (
            <a target="__blank" href={url}>
              {url}
            </a>
          ) : (
            "Private/Not available"
          )}
        </div>
        <div className="url">
          <b>Source code:</b>
          {sourceCode ? (
            <>
              {_.isString(sourceCode) ? (
                <a target="__blank" href={sourceCode}>
                  {sourceCode}
                </a>
              ) : (
                <>
                  <a target="__blank" href={sourceCode[0]}>
                    {sourceCode[0]}
                  </a>{" "}
                  <b>|</b>
                  <a target="__blank" href={sourceCode[1]}>
                    {sourceCode[1]}
                  </a>
                </>
              )}
            </>
          ) : (
            "Private/Not available"
          )}
        </div>
        <b className="title">Some images of its features:</b>
        <i>(Because of privacy, data in images may be made up)</i>
        <div className="features-images">
          {features.map(({ name, image }) => {
            return (
              <>
                <div className="feature-name">• {name}:</div>
                <img src={image} />
              </>
            );
          })}
        </div>
      </div>
    </Dialog>
  );
};
