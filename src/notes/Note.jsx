import React, { Component } from "react";

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.input,
      title: "",
      read: true,
      //   textDeco: "line-through",
      textDeco: "none",
      disabled: false,
    };
    this.inputRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.inputRef && !this.inputRef.current.contains(event.target)) {
      this.setState({ read: true });
    }
  }

  handleEdit = (e) => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <div className='note' key={this.props.id} id={this.props.id}>
        <input
          disabled={this.state.disabled}
          style={{ textDecoration: this.state.textDeco }}
          ref={this.inputRef}
          readOnly={this.state.read}
          value={this.state.input}
          className='noteText'
          onChange={this.handleEdit}
        ></input>

        <div className='noteBtn'>
          <div
            onClick={() => {
              if (this.state.textDeco === "none")
                this.setState({ textDeco: "line-through" });
              else this.setState({ textDeco: "none" });
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
