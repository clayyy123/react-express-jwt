import React from "react"
import httpClient from "../httpClient"

class NewBar extends React.Component {

  state={
    fields: {name:"",location: "",rating: 3}
  }

handleChange(evt){
  this.setState({
    fields: {...this.state.fields, [evt.target.name]: evt.target.value}
  })
}

handleSubmit (evt){
  evt.preventDefault()
  httpClient.newBar(this.state.fields).then((serverResponse)=>{
    console.log(serverResponse.data)
    this.props.history.push("/bars")
  })
  

  // this.setState({
  //   name: 
  // })
}




  render(){
    const { name, location, rating} = this.state
    return(
      <form onChange={this.handleChange.bind(this)} onSubmit= {this.handleSubmit.bind(this)}>
        <fieldset>
          <label for="nameField">Name</label>
          <input value={name} type="text" placeholder="Bar Name" name="name"/>
          <label for="nameField">Location</label>
          <input value={location} type="text" placeholder="Address" name="location"/>
          <label for="rateField">Rating</label>
          <select name="rating" id="rateRangeField">
            <option name="rating" value="1">1</option>
            <option name="rating" value="2">2</option>
            <option name="rating" value="3">3</option>
            <option name="rating" value="4">4</option>
            <option name="rating" value="5">5</option>
          </select>
          <input class="button-primary" type="submit" value="Send"/>
        </fieldset>
      </form>
    )
  }
}

export default NewBar