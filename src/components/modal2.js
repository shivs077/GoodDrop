
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from './Form';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="mod" style={{display:"inline"}}>
     
        <button className="btn" onClick={this.toggle} >
                  price estimate
             </button>
        <div className="mod">
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        
          <ModalBody>
            <Form />
          </ModalBody>
        <ModalFooter>
         <Button className="btn-2" onClick={this.toggle}> Cancel </Button>
        </ModalFooter>
        </Modal>
        </div>
      </div>
    );
  }
}

export default ModalExample;
//<!--Button color="danger" onClick={this.toggle}>Price Estimate</Button-->