import React, { Component } from 'react';

class AddProject extends Component {
  constructor(){
    super();
    this.state= {
      newProject:{}
    }
  }

  static defaultProps = {
    categories : ['Web Design' , 'Web Development', 'Mobile Application']
  }

  handleSubmit(e) {
    if(this.refs.title.value === ''){
      alert('Title is required')
    }
    else {
      this.setState({newProject:{
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        // console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }
  render() {
    let categoryOption = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div className="container">
        <h5 className="text-center add-project-title">Add Projects</h5>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form onSubmit = {this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" ref="title" placeholder="Enter Title" />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select className="form-control" ref="category">
                  {categoryOption}
                </select>
              </div>
              <div className="text-center">
              <button type="submit" className="primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <hr />


      </div>
    );
  }
}

export default AddProject;
