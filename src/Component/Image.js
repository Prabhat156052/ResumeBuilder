import React, {Component} from 'react';
class Image extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    let url=this.state.file;
    localStorage.setItem('images', url);
    this.state.file='';
  }
  render() {
    return (
      <div className="image" style={{backgroundColor:"whitesmoke",margin:'5px',padding:'20px',width:'auto',height:'200px',textAlign:'left'}}>
       <form onSubmit={this.handleSubmit}>
              <label>Upload your profile picture</label>
              <input type="file" onChange={this.handleChange}/>
              <img src={this.state.file} width="120" height="120" alt="picture"/>
              <button className="button"><span className="fa fa-save fa-lg"></span> Save</button>
        </form>
        
      </div>
    );
  }
}
export default Image;