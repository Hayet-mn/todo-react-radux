import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {edit} from "../actions";
import {connect} from "react-redux"

 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 

 
class ModalEdit extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false,
      input:""
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChange = e => {
    
    this.setState({
    [e.target.name]: e.target.value
  });
};
handleInput = el => {
  el.preventDefault();
  this.setState({ input: "" });
};

 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
    this.subtitle.style.textAlign = 'center';

  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
 
  render() {
    return (
      <div>
        <button onClick={this.openModal} className="btnEdit"><i class="fas fa-edit"></i></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Change Task</h2>
          
          
          <form onSubmit={this.handleInput} className="formModal">
            <input name="input"type="text" placeholder="Change your Task..."
            value={this.state.input} onChange={this.handleChange}/>
            <div className="btnModal"> 

            <button type="button" class="btn btn-success"
             onClick={()=>{this.props.editItem(this.props.idTodo,this.state.input);this.closeModal()}}>Save Change</button>
             <button type="button" class="btn btn-danger" onClick={this.closeModal}>close</button>
            </div>
            
         
          </form>
        </Modal>
      </div>
    );
  }

  
}
const mapDispatchToProps=(dispatch)=>{
  return{
      
      editItem:(id,item)=>dispatch(edit( id,item)),
     
}}
 
export default connect(null,mapDispatchToProps)(ModalEdit);