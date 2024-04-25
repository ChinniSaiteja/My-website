import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Student from './Student'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Button from './Button.jsx'
import ProfilePic from './ProfilePic.jsx'

function App() {

  const fruits = [{id: 1, name: 'apple', calories: 95},
                     {id: 2, name: 'mango', calories: 200},
                     {id: 3, name: 'orange', calories: 153},
                     {id: 4, name: 'banana', calories: 86},
                     {id: 5, name: 'pineapple', calories: 119}
  ];

  const vegetables = [{id: 6, name: 'potato', calories: 95},
                     {id: 7, name: 'cabbage', calories: 200},
                     {id: 8, name: 'cauliflower', calories: 153},
                     {id: 9, name: 'beans', calories: 86},
                     {id: 10, name: 'tomato', calories: 119}
  ];

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

      {/* <UserGreeting isLoggedIn={false} username="SaiTeja"/> */}

      {/* <List items = {fruits} category = "Fruits"/>
      <List items = {vegetables} category = "Vegetables"/> */}

      <ProfilePic/>
    </>
    
  );
}

export default App
