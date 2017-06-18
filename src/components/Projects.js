import React, { Component } from 'react';
import ProjectItem from './ProjectItem';


class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects){
      projectItems = this.props.projects.map(projects => {
        return(
          <ProjectItem key={projects.title} projects = {projects} />
        );
      });
    }
    return (
      <div className="container">
        <div className="projects_con">
        <h4>Latest Projects</h4>
          {projectItems}
        </div>
      </div>
    );
  }
}

export default Projects;
