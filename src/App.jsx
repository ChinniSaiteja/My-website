import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Student from './Student'
import UserGreeting from './UserGreeting.jsx'

function App() {
  return(
    <>
      {/* <Header/>
      <Food/>
      <Footer/> */}

      {/* <Card/> */}
      {/* <Student name="Saiteja" age={23} isStudent={true}/>
      <Student name="Ramu" age={50} isStudent={false}/>
      <Student name="Ravi" age={12} isStudent={true}/>
      <Student name="Bachan" age={20} isStudent={true}/> */}

      <UserGreeting isLoggedIn={true} username="SaiTeja"/>
    </>
    
  );
}

export default App
