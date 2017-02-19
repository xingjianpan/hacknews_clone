export default function({ dispatch }){
  return next => action => {

    // if action does not have payload
    // or, the payload does not have a .then property
    // we don't care aout it , send it one
    if (!action.payload || !action.payload.then){
      // send to next middleware
      return next(action)
    }


    // make sure the actions' promise resolve
    action.payload
      .then( function(response){
        // create a new action with the old type, but
        // replace the promise with the response data
        const newAction = {...action, payload: response.data}

        // send to everything again
        dispatch(newAction)
      })

    // console.log('we have a promise', action)
  }
}
