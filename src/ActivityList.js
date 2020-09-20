import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';

export default class ActivityList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            showAlertDelete: false
        }

        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        const { onDelete } = this.props;
        onDelete(this.props.title)
    }

    render() {
        const { title, date, description } = this.props;

        return (
            <tbody>
                <div className="card my-2">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-7">
                                <strong>{title}</strong>
                            </div>
                            <div className="col-5 p-0">
                                <ModalViewActivity
                                    title={title}
                                    date={date}
                                    description={description} />
                                <Button variant="danger" onClick={() => { this.setState({ showAlertDelete: true }) }}>Delete</Button>
                                <SweetAlert
                                    warning
                                    showCancel
                                    show={this.state.showAlertDelete}
                                    title="Are you sure?"
                                    
                                    confirmBtnBsStyle="danger"
                                    cancelBtnBsStyle="default"
                                    onConfirm={() => {
                                        this.onDelete();
                                        this.setState({ showAlertDelete: false });
                                    }}
                                    onCancel={() => {

                                        this.setState({ showAlertDelete: false });
                                    }}
                                    onEscapeKey={() => this.setState({ showAlertDelete: false })}
                                    onOutsideClick={() => this.setState({ showAlertDelete: false })}
                                >
                                    Do you want to delete <strong>{title}</strong> activity ?
                                </SweetAlert>
                            </div>
                        </div>

                    </div>
                </div>
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
            <div className="d-inline mx-2">
                <Button variant="info" onClick={() => { this.handleModal() }}>
                    View
                </Button>
                <Modal
                    show={this.state.show}
                    size="lg"
                >
                    <Modal.Header>
                        <Modal.Title>View activity</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="form-group">
                            <label><h5>Title Activity</h5></label>
                            <p class="alert alert-warning">{title}</p>
                        </div>
                        <div className="form-group">
                            <label><h5>Date to activity</h5></label>
                            <p class="alert alert-warning">{date}</p>
                        </div>
                        <div className="form-group">
                            <label><h5>Description activity</h5></label>
                            <p class="alert alert-warning">{description}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.handleModal() }}>
                            Close
                            </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
