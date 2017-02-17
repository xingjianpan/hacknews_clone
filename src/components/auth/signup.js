import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form'
import * as actions from '../../actions'
import { connect } from 'react-redux'


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)


class Signup extends Component {
  renderAlert() {
    if (this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Opps!</strong> {this.props.errorMessage}
        </div>
        )
    }
  }
  handlFormSubmit(formProps){
    // call action creator to sign up the user
    this.props.signupUser(formProps)

  }
  render() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.handlFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <Field label="Email" name="email" component={renderField} type="email" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <Field label="Password" name="password" component={renderField}type="password" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <Field label="Confirm password" name="passwordConfirm" component={renderField} type="password" className="form-control" />
        </fieldset>
         {this.renderAlert()}
         <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    )
  }
}

function validate(formProps){
  const errors = {}

  if (formProps.password != formProps.passwordConfirm){
    errors.password = "Password must match"
  }

  // TODO - use map/reduce/loop to DRY this part
  if (!formProps.email){
    errors.email = "Please enter email"
  }
  if (!formProps.password){
    errors.password = "Please enter a password"
  }
  if (!formProps.passwordConfirm){
    errors.passwordConfirm = "Please enter a password confirmation"
  }
  return errors
}

function mapStateToProps(state){
  return {errorMessage: state.auth.error}
}

Signup = reduxForm({
  form:'signup',
  validate: validate
})(Signup)

Signup = connect(mapStateToProps, actions)(Signup)

export default Signup
