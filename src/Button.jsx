
import ProfilePic from "./ProfilePic";
function Button(){

    const handleClick = () => <ProfilePic/>;
    return(<button onClick={() => {handleClick()}}>Click Me</button>);
}

export default Button;