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
        title : 'Magnum Clothing',
        category : 'ERP (Dashboard)'
      },
      {
        title : 'Delta Dynamix',
        category : 'Website'
      },
      {
        title : 'Edwhizz',
        category : 'Website'
      }
    ]});
  }

  handleAddProject (project){
    // console.log(project);
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
