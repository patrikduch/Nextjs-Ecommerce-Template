import React from 'react';
import { connect, ConnectedComponent } from 'react-redux';

// Components to connect
import ProjectName, { ProjectNamePropsType } from 'src/connected-components/project-detail/Project-Name';

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: { projectDetail: { projectName: string } }) => {
    return {
        projectName: state.projectDetail.projectName
    };
};

/**
 * Creation of Connected Redux component for displaying project name.
 */
const ProjectNameContainer = connect(
    mapStateToProps,
    null
)(
    (ProjectName as unknown) as ConnectedComponent<
        React.FC<ProjectNamePropsType>,
        Pick<never, never>
    >
);

export { ProjectNameContainer };
