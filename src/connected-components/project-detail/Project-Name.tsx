import React from 'react';

/**
 * @type ProjectNamePropsType Type checking for project name container and connected component.
 */
export type ProjectNamePropsType = {
    projectName: string;
};

/**
 * @function ProjectName Display name of web-project.
 * @returns JSX with dynamic plain text.
 */
const ProjectName: React.FC<ProjectNamePropsType> = ({ projectName }) => {
    return (
        <>
            {projectName}
        </>
    );
};

export default ProjectName;