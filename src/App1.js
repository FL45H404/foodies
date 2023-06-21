// <div id="parent">
// <div id='child'>
// <h1>hi h1 class</h1>
// <h2>hi h2 class</h2></div>
// </div>
import React from 'react'
import ReactDOM from 'react-dom/client'

// const parent=React.createElement('div',{id:'parent'},
//    React.createElement('div',{id:"child"},[
//       React.createElement('h1',{},'welcome to react'),
//       React.createElement('h1',{id:'heading'},'hello react')]))

// one parent width multiple child
// const parent1=React.createElement(
//    'div',{id:'parent'},[
//       React.createElement('div',{id:'child1'},React.createElement('h1',{},'welcome to react')),
//       React.createElement('div',{id:'child2'},React.createElement('h1',{},'welcome to react'))
//    ])



// const heading=React.createElement('h1',{},'welcome to react')
// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent1)

// 3rd episode
const heading = (<div className='parent'>
   <h1 id='heading' > namste react using jsx </h1> </div> )

// function component
const Heading=()=>{
   return (
      <h1 id='heading'>from component heading function</h1>
   )
}

const Parent=()=>{
   return (<div className='parent'>
       <Heading/>
      </div>)
}
      const root = ReactDOM.createRoot(document.getElementById('root'))
      // root.render(heading)
      root.render(<Parent/>)
