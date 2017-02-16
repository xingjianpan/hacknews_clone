import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form'
import * as actions from '../../actions'
import { connect } from 'react-redux'

class Signin extends Component {

  handleFormSubmit({email, password}) {
    this.props.signinUser({email, password})
    // need to do something to log user in
  }
  render() {
    const {handleSubmit } = this.props

    return (
    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset className="form-group">
        <label>Email:</label>
        <Field name="email" component="input" type="email" className="form-control" />
      </fieldset>
      <fieldset className="form-group">
        <label>Password:</label>
        <Field name="password" component="input" type="text"  className="form-control" />
      </fieldset>
      <button action="submit" className="btn btn-primary">Sign in</button>
    </form>
    )
  }
}


// export default reduxForm({
//   form: 'signin',
// })(Signin)

Signin = reduxForm({form:'signin'})(Signin)
// connect Signinform with actions using 'connect'
Signin = connect(null, actions)(Signin)

// do not forget to export default
export default Signin
