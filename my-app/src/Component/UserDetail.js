import React from 'react'

// //const UserDetail=({user= {}})=>{
//     const UserDetail=(props)=>{
//     //const UserDetail=({user={}})=>{  //use alone
//     //let user=props.user;
      
//     let {user}=props;
//     return(
//         <div>
//             <h3>{user.name}</h3>
//             <h5>
//                 Email:{user.email}
//                 <br/>
//                 Phone Number :{user.phoneNumber}
//             </h5>
//         </div>
//             );
// };

// 
// class UserDetail extends React.Component {
//  render(){
//     this.props.user={
//         name:"Alex",
//         email:"adfdfkf@gmil",
//         phoneNumber:465666544
//     };
//          return(
//              <div>
//                          <h3>{this.props.user.name}</h3>
//                           <h5>
//                               Email:{this.props.user.email}
//                               <br/>
//                               Phone Number :{this.props.user.phoneNumber}
//                           </h5>
//              </div>
//          )
//      }
//  }


// 
const UserDetail=(props)=>{
    
    
         return(
             <div>
                         <h3>{this.props.user.name}</h3>
                          <h5>
                              Email:{this.props.user.email}
                              <br/>
                              Phone Number :{this.props.user.phoneNumber}
                          </h5>
             </div>
         )
}

//props are read only memory
//not modify props property 
//should not change props inside child component






































































export default UserDetail