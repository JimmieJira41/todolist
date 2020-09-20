import React, { Component } from 'react'

export default class AddActivity extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.onCreate(this.nameInput.value, this.dateInput.value, this.descriptionInput.value);
        
        this.nameInput.value = '';
        this.dateInput.value = '';
        this.descriptionInput.value = '';
    }
    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title Activity</label>
                    <input type="text" className="form-control" placeholder="Email" ref={nameInput=>this.nameInput = nameInput} />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="text" className="form-control" placeholder="Email" ref={dateInput=>this.dateInput = dateInput} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" rows="4" ref={descriptionInput=>this.descriptionInput = descriptionInput}></textarea>
                    {/* <input type="text" className="form-control" placeholder="Email" ref={nameInput=>this.nameInput = nameInput} /> */}
                </div>
                <div className="text-right">
                    <button className="btn btn-primary">Create</button>

                </div>
            </form>
        )
    }
}
