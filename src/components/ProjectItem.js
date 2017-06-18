import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
        <strong>{this.props.projects.title}</strong> : {this.props.projects.category}
      </li>
    );
  }
}

export default ProjectItem;
