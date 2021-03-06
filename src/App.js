import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';

class App extends Component {
  constructor (){
    super();
    this.state = {
      projects : []
    }
  }

  componentWillMount(){
    this.setState({projects : [
      {
        title : 'Business Website',
        category : 'Web Design'
      },
      {
        title : 'Social App',
        category : 'Mobile Application'
      },
      {
        title : 'Ecommerce App',
        category : 'Web Development'
      }
    ]});
  }

  handleAddProject (project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="container-fluid">
        <h2 className="text-center">Welcome to Project Manager</h2>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects  projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
