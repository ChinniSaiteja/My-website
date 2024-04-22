
function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome">Welcome {props.username}</h2> 
    const loginMessage = <h2 className="login">please log in</h2>
    return(props.isLoggedIn? welcomeMessage  : loginMessage);
}

export default UserGreeting