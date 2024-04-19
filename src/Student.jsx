import PropTypes from 'prop-types'

function Student(props){
    return(
        <>
            <div className="student">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent? "Yes" : "No"}</p>
            </div>
            <br></br>
        </>
    )
}
// if we declare diff datatype, their will be error in the console only
Student.propTypes = {
    name: PropTypes.string,
    age: ProPTypes.number,
    isStudent: PropTypes.bool
}
export default Student;