import React, { Component } from "react";

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.input,
      title: "",
      read: true,
    };
    this.inputRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    // this.setState({ title: this.props.input });
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.inputRef && !this.inputRef.current.contains(event.target)) {
      this.setState({ read: true });
    }
  }

  handleEdit = (e) => {
    this.setState({ input: e.target.value });
    console.log(this.state.input);
  };
  render() {
    return (
      <div className='note' key={this.props.id} id={this.props.id}>
        {/* <div className='noteText'>{this.props.input}</div> */}
        <input
          ref={this.inputRef}
          readOnly={this.state.read}
          value={this.state.input}
          className='noteText'
          onChange={this.handleEdit}
        ></input>

        <div className='noteBtn'>
          <div
            onClick={() => {
              this.props.noteBtnDone(this.props.id);
            }}
            className='notebtn done'
          >
            <span className='material-icons'>done</span>
          </div>
          <div
            onClick={() => {
              this.setState({ read: !this.state.read });
              if (this.state.read) this.inputRef.current.focus();
              //   this.noteBtnEdit(this.props.id);
              this.props.noteBtnEdit(this.props.id);
            }}
            className='notebtn edit'
          >
            <span className='material-icons'>mode_edit</span>
          </div>
          <div
            onClick={() => {
              this.props.noteBtnDelete(this.props.id);
            }}
            className='notebtn delete'
          >
            <span className='material-icons'>delete</span>
          </div>
        </div>
      </div>
    );
  }
}
