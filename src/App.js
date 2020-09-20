import React, { Component } from 'react'
import ActivityList from './ActivityList'
import CreateActivity from './CreateActivity'

const activitys = [
  {
    title: "Sent todo-list project",
    date: "21/9/63",
    description: "BlackCat Agency"
  }
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
  }

  componentWillMount() {
    const activitys = this.getactivitys();

    this.setState({ activitys });
  }

  getactivitys() {
    return this.state.activitys;

  }

  onCreate(title, date, description) {
    // console.log(title+date+description);
    const activitys = this.getactivitys();

    activitys.push({
      title,
      date,
      description
    });
    this.setState({ activitys });
  }

  onDelete(title) {
    const activitys = this.getactivitys();

    const filteredactivitys = activitys.filter(product => {
      return product.title !== title;
    })
    this.setState({ activitys: filteredactivitys })
  }

  render() {
    return (
      <div className="App">
        <div className="text-center mt-3">
          <h1 className="btn btn-warning text-center text-uppercase">todo list</h1>
        </div>
        <div className="container-fiuld m-4">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-s-12 col-12 mb-2">
              <div className="card">
                <div className="card-body shadow">
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
                {
                  this.state.activitys.map((activitys, i) => {
                    return (
                      <ActivityList
                        key={i}
                        {...activitys}
                        onDelete={this.onDelete}
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







