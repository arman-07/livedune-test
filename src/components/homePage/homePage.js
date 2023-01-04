import './homePage.css';
import Header from "../header";

function HomePage() {

  return (
    <div className="wrapper">
      <Header btn_text="Выйти" loggedIn={true}/>  
      <main className="main">
        <div className='loggedIn'><h1>Добро пожаловать👋</h1></div>
      </main>
    </div>
  )
}

export default HomePage;
