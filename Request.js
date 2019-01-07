import React,{Component} from 'react';


class Request extends Component{
     constructor(){
         super()
         this.state=
         {posts:[]}
     }
     componentDidMount(){
         fetch("/posts")
         .then(res=>{console.log(res)})
       .then(posts=>this.setState({posts}, ()=>console.log("customers fetched"),{posts}))
     }     
    render(){
        return (
            <ul>
{this.state.post}
            </ul>
        )
    }
}
export default Request