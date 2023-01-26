import React from 'react'
import './Test.css'
// function Test() {
//   return (
//     <div>hekko workde</div>
//   )
// }
class Test extends React.Component{//render()
    
//   render()
//   {
//     return (
//         <div>
        


//         <h1 id="testID" style={{
//             color:"red",
//     }}>Hello </h1>
//         </div>
//     )
//   }


atate={isLoggedIn:false};

render(){
    return(
        <div>
            
          {!this.isLoggedIn?(    <h1>you are not logd</h1>
            
          ):(
            <h1>congrtulation</h1>
          )}

         <button onClick={(e)=>this.setState({isLoggedIn:true})}>Login</button>

        </div>
    );
}




 }
export default Test

//componet is a reuseabel code
//class baseed cpmponent are heavy memory
//space used more and these are very powerfull
//