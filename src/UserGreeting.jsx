
function UserGreeting(props){
    return(isLoggedIn? <h2>Welcome {props.username}</h2> : <h2>please log in</h2>);
}

export default UserGreeting