import React from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../../../Component/Firebase/FirebaseConfig'


class RiderRegistration extends React.Component {

  constructor(props) {
    super(props);

    // dataUri = '../default-pic.png';
    this.state = {
      fName: '',
      lName: '',
      suffix: '',
      mNumber: '',
      address: '',
      profPic: '../default-pic.png'
    }
  }

  componentDidMount() {
    console.log(this.props)
    if (this.props.location.state) {
      this.setState({profPic: this.props.location.state.dataUri})
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    //console.log('submit event'+formData);
    console.log(this.state);
    const db = firebaseApp.firestore();
    db.collection("riders")
      .add(this.state)
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    this.setState({
      fName: '',
      lName: '',
      suffix: '',
      mNumber: '',
      address: '',
      profPic: '../default-pic.png'
    });
  }

  changeHandler = (event) => {
    event.preventDefault();
      const { name, value } = event.target;
      this.setState({[name]: value});
      console.log(this.state)
  }
  
  render() {
    return (
      <div className='rider-registration'>
        <h1>Rider Registration</h1>
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <label htmlFor="fName">First Name: </label>
              <input
                type="text"
                className="form-control"
                id="fName"
                name="fName"
                onChange={this.changeHandler}
                value={this.state.fName} />
            </div>
            <div className="form-group">
              <label htmlFor="lName">Last Name: </label>
              <input
                type="text"
                className="form-control"
                id="lName"
                name="lName"
                onChange={this.changeHandler}
                value={this.state.lName} />
            </div>
            <div className="form-group">
              <label htmlFor="suffix">Suffix: </label>
              <input
                type="text"
                className="form-control"
                id="suffix"
                name="suffix"
                onChange={this.changeHandler}
                value={this.state.suffix} />
            </div>
            <div className="form-group">
              <label htmlFor="mNumber">Mobile Number: </label>
              <input
                type="text"
                className="form-control"
                id="mNumber"
                name="mNumber"
                onChange={this.changeHandler}
                value={this.state.mNumber} />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address: </label>
              <input
                type="text"
                className="form-control"
                id="address" placeholder="Brgy. / City"
                name="address"
                onChange={this.changeHandler}
                value={this.state.address} />
            </div>
            <div className="form-group">
              <label htmlFor="profPic">Take Picture: </label>
              <p><Link to="/takePic"><img src={this.state.profPic} alt="pic" width="144px"/></Link></p>
              <input
                type="hidden"
                className="form-control"
                id="profPic"
                value={this.state.profPic}
                name="profPic"
                onChange={this.changeHandler} />
            </div>
            {/** SUBMIT */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
    );
  }
}

export default RiderRegistration;