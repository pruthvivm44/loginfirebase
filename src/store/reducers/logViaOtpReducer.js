// const initState={
//     authstatus:'',
//     confirmationResult:'',
// }
// const logViaOtpReducer= (state=initstate,action)=>{
//     switch(action.type){
//         case 'OTP_HAS_BEEN_SENT' :
//             return { ...state,authStatus:'OTP has been sent',confirmationResult:action.data}
//         case 'SMS_NOT_SENT' :
//             return { ...state,authStatus:'SMS not sent'}
//         case 'SIGNIN_SUCCESSFULL' :
//             return{...state,authStatus:''}
//         case 'OTP INCORRECT' :
//             return{...state,authStatus:'OTP Incorrect'}
//         }
    
// }
// export default logViaOtpReducer