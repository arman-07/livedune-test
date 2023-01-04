
import './ConfirmationPage.css';
import Header from '../header/Header';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ConfirmationPage() {
  const userName = useSelector(state => state.user.name);
  const nameValid = userName.charAt(0).toUpperCase() + userName.slice(1);

  return (
    <div className="wrapper confirm-page-wrapper">
      <Header btn_text="Выйти" loggedIn={true}/>  
      <main className="main">
        <section className="content">
          <h2>Подтвердите ваш e-mail</h2>
          <p className='text-grey'>{nameValid}, на ваш E-mail отправлено письмо со ссылкой для подтверждения. 
          Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа. </p>
          <button className="blue-button">Перейти к почте</button>
          <Link to="/no_letter_page" className="finaly-text blue-text">Мне не пришло письмо</Link>
        </section>
      </main>
    </div>
  );
}

export default ConfirmationPage;

