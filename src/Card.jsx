import ProfilePic from './assets/sai full photo.jpeg'

function Card(){
    return(
        <div className='card'>
            <img className='image' src={ProfilePic} alt='My profile pic'></img>
            <h2>SaiTeja</h2>
            <p>I'm a Final year undergrad student</p>
        </div>
    )
}

export default Card