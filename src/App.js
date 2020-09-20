import React, { Component } from 'react'
import ActivityList from './ActivityList'
import CreateActivity from './CreateActivity'

const activitys = [
];

localStorage.setItem('activitys', JSON.stringify(activitys));

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activitys: JSON.parse(localStorage.getItem('activitys'))
    };
    this.onCreate = this.onCreate.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.EditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const activitys = this.getactivitys();

    this.setState({ activitys });
  }

  getactivitys() {
    return this.state.activitys;

  }

  onCreate(name,date,description) {
    // console.log(name+date+description)
    const activitys = this.getactivitys();

    activitys.push({
      name,
      date,
      description
    });
    this.setState({ activitys });
  }

  onDelete(name) {
    const activitys = this.getactivitys();

    const filteredactivitys = activitys.filter(product => {
      return product.name !== name;
    })
    this.setState({ activitys: filteredactivitys })
  }
  onEditSubmit(name,date, description, originalName) {
    let activitys = this.getactivitys();

    activitys = activitys.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.date = date;
        product.description = description;

      }
      return product;
    });
    this.setState({ activitys });
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-center text-uppercase ">todo list</h1>
        <div className="container-fiuld m-4">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-s-12 col-12 mb-2">
              <div className="card">
                <div className="card-body shadow">
                  {/* component create activity */}
                  <CreateActivity
                    onCreate={this.onCreate}
                  />
                </div>
              </div>

            </div>
            <div className="col-xl-6 col-md-6 col-s-12 col-12">

              <div className="alert alert-primary text-center">Don't forget to do your activity!</div>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <td colSpan="2">Let's do it!</td>
                  </tr>
                </thead>
                {/* <tbody> */}
                {
                  this.state.activitys.map((activitys , i) => {
                    return (
                      <ActivityList
                        key={i}
                        {...activitys}
                        onDelete={this.onDelete}
                        onEditSubmit={this.onEditSubmit}
                      />
                    )
                  })
                }
              </table>
            </div>
          </div>
        </div>
      </div>

    )
  }
}







