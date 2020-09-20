import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default class ActivityList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false
        }

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);

    }
    onDelete() {
        const { onDelete, name } = this.props;
        onDelete(this.props.name)
    }

    onEdit() {
        this.setState({ isEdit: true })
    }

    onEditSubmit(event) {
        event.preventDefault();

        this.props.onEditSubmit(this.nameInput.value,this.dateInput.value,this.descriptionInput.value, this.props.name);

        this.setState({ isEdit: false })
    }
    render() {
        const { name, date, description } = this.props;

        return (
            <tbody>
                {/* {
                    this.state.isEdit
                        ? (
                            <form onSubmit={this.onEditSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Email" ref={nameInput => this.nameInput = nameInput} defaultValue={name} />
                                </div>
                                <button className="btn btn-success">Save</button>
                            </form>
                        )
                        : ( */}
                            <div className="card my-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-8">
                                            <strong>{name}</strong>
                                        </div>
                                        <div className="col-4">
                                            <ModalViewActivity
                                                title={name}
                                                date={date}
                                                description={description} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        {/* )
                } */}
            </tbody>
        )
    }
}

class ModalViewActivity extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }

    render() {
        const { title, date, description } = this.props;
        return (
            <div>
                <Button variant="primary" onClick={() => { this.handleModal() }}>
                    View
                </Button>
                <Modal
                    show={this.state.show}
                    size="lg"
                >
                    <form onSubmit={this.onEditSubmit}>
                        <Modal.Header>
                            <Modal.Title>View activity</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <div className="form-group">
                                <label>Title Activity</label>
                                <input type="text" className="form-control" placeholder="Email" ref={nameInput => this.nameInput = nameInput} defaultValue={title} />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="text" className="form-control" placeholder="Email" ref={dateInput => this.dateInput = dateInput} defaultValue={date} />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control" rows="4" ref={descriptionInput => this.descriptionInput = descriptionInput}>{description}</textarea>
                                {/* <input type="text" className="form-control" placeholder="Email" ref={nameInput=>this.nameInput = nameInput} /> */}
                            </div>
                            {/* <div className="text-right">
                                <button className="btn btn-primary">Create</button>

                            </div> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => { this.handleModal() }}>
                                Close
                            </Button>
                             {/* <div className="text-right">
                                <button className="btn btn-primary">Create</button>

                            </div> */}
                            <button variant="primary">Save</button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
}
