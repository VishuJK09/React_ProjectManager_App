import React, { Component } from 'react';
import ProjectItem from './ProjectItem';


class Projects extends Component {

  render() {
    let projectItems;
    if (this.props.projects){
      projectItems = this.props.projects.map(projects => {
        // console.log(projects);
        return(
          <ProjectItem key={projects.title} projects = {projects} />
        );
      });
    }
    return (
      <div className="container">
        <div className="projects_con">
        <h6>Latest Projects</h6>
          {projectItems}

        </div>
      </div>
    );
  }
}

export default Projects;
