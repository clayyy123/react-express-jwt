import React from "react"
import httpClient from "../httpClient"

class Bars extends React.Component {

  componentDidMount(){
    httpClient.getBars().then((serverResponse)=>{
      this.setState({
        bars: serverResponse.data
      })
    })
  }

  state={
    bars:[]
  }

  
  render(){
    return(
      <div className="Bars">
        <h1> bars list </h1>
        <ul>
        {this.state.bars.map((bar)=>{
          return <li> {bar.name} </li>
        })}
        </ul>
      </div>
    )
  }
}

export default Bars