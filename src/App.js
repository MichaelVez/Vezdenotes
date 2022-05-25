import "./App.css";
import Note from "./notes/Note.jsx";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", notes: [] };
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  handleKeyUp = (e) => {
    if (e.code === "Enter") {
      this.addNoteClick();
    }
  };
  addNoteClick = () => {
    if (this.state.input !== "") {
      this.setState((prevstate) => ({
        count: prevstate.notes.push(this.newNote()),
      }));

      this.setState({ input: "" });
    }
  };
  noteBtnDone = (key) => {};
  noteBtnEdit = (key) => {
    console.log(this.state);
    console.log(key);
  };
  noteBtnDelete = (key) => {
    this.setState((prevState) => {
      const arrOfObjAfterDelete = prevState.notes.filter((note) => {
        console.log(note);
        return note.props.id !== key;
      });
      return { notes: arrOfObjAfterDelete };
    });
  };

  newNote() {
    // return (
    //   <div className='note' data-thiskey={randomKey} key={randomKey}>
    //     <div className='noteText'>{this.state.input}</div>
    //     <div className='noteBtn'>
    //       <div onClick={this.noteBtnDone} className='notebtn done'>
    //         <span className='material-icons'>done</span>
    //       </div>
    //       <div onClick={this.noteBtnEdit} className='notebtn edit'>
    //         <span className='material-icons'>mode_edit</span>
    //       </div>
    //       <div onClick={this.noteBtnDelete} className='notebtn delete'>
    //         <span className='material-icons'>delete</span>
    //       </div>
    //     </div>
    //   </div>
    // );
    let randomKey = Math.random().toString();
    return (
      <Note
        input={this.state.input}
        key={randomKey}
        id={randomKey}
        noteBtnDone={this.noteBtnDone}
        noteBtnEdit={this.noteBtnEdit}
        noteBtnDelete={this.noteBtnDelete}
      />
    );
  }
  mapNotes() {
    return this.state.notes.map((note) => {
      return note;
    });
  }
  render() {
    return (
      <>
        <div className='cont'>
          <input
            className='mainTextInput'
            onKeyUp={this.handleKeyUp}
            onChange={this.handleChange}
            placeholder='Vezdenotes'
            type='text'
            value={this.state.input}
          ></input>
          <button className='btn' onClick={this.addNoteClick}>
            Add
          </button>
        </div>
        <div className='notes'>{this.mapNotes()}</div>
      </>
    );
  }
}
