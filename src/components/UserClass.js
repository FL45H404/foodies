import React from 'react'

class UserClass extends React.Component{
constructor(props){
super(props)
this.state={
    count:0,
}
}
render(){
    const {count}=this.state;
    return(<>
        <div>{count}</div>
        <button 
        onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}
        >increase</button>
        <div>{this.props.name}</div>
        </>
    )
}

}

export default UserClass