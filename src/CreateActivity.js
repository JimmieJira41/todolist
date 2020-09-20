import React, { Component } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';

export default class AddActivity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAlertInput: false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.titleInput.value !== '' && this.dateInput.value !== '' && this.descriptionInput.value !== '') {
            this.setState({ showAlertInput: this.state.showAlertInput })
            this.props.onCreate(this.titleInput.value, this.dateInput.value, this.descriptionInput.value);
        } else {
            this.setState({ showAlertInput: !this.state.showAlertInput })


        }
        // this.props.onCreate(this.titleInput.value, this.dateInput.value, this.descriptionInput.value);

        this.titleInput.value = '';
        this.dateInput.value = '';
        this.descriptionInput.value = '';
    }
    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title Activity</label>
                    <input type="text" className="form-control" placeholder="title activity" ref={titleInput => this.titleInput = titleInput} />
                </div>
                <div className="form-group">
                    <label>Date of activity</label>
                    <input type="text" className="form-control" placeholder="dd/mm/yy" ref={dateInput => this.dateInput = dateInput} />
                </div>
                <div className="form-group">
                    <label>Description activity</label>
                    <textarea className="form-control" rows="4" ref={descriptionInput => this.descriptionInput = descriptionInput}></textarea>
                </div>
                <div className="text-right">
                    <button className="btn btn-primary">Create</button>
                </div>
                <SweetAlert
                    warning
                    show={this.state.showAlertInput}
                    title="Are you sure?"
                    onConfirm={() => {
                        this.setState({ showAlertInput: false });
                    }}
                    onEscapeKey={() => this.setState({ showAlertInput: false })}
                    onOutsideClick={() => this.setState({ showAlertInput: false })}
                >
                    Please fill out all information
                </SweetAlert>

            </form>
        )
    }
}
