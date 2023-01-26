import React from 'react'
import AllUserList from './Component/AllUserList'
//import Test from './Test'
function App() {
  return (
    <>
    <div>
      <AllUserList/>
{/* <Test/>
<Test/> */}
    </div>
{/* <section>
<Test/>
<Test/>

</section> */}

    </>
  )
}

export default App

// div           div
// /  \          /  \
// T1  T2      T1    <h1>

//   section
//    /     \
//   T1     T2


//t1 div test and t1 section test are different


// //<div>  div having seven children
// <Test/>  
// <Test/>  
// <Test/>  want to modify one child
// <Test/>
// <Test/>
//     </div>

//react will not understand which child want you modify
//react want key 
//<Test key={1}/>  
// <Testkey={2}/>  
// <Test/>

//App
// if cond logintime<10hr>
//  |
// home
//  |
//  Login


//     linkdin
//     /     \
//    Nav   Page
//            |
//          Home Page


