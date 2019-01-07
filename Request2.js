import React,{Component} from 'react';
import axios from  'axios';

class Request2 extends Component{
     constructor(){
         super()
         this.state=
         {persons:[]}
     }
     componentDidMount(){
         axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
         console.log(res);
            this.setState({persons:res.data});
     }
         );}
     
    render(){
        return (
            <ul>
{this.state.persons.map(person=><li key={person.id}>{person.username}</li>)}
            </ul>
        )
    }
}
export default Request2 