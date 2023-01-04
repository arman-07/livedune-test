import './noLetterPage.css';
import Header from '../header/Header';
import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';

function NoLetterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    navigate('/home');
  };

  return (
    <div className="wrapper noLetter-wrapper">
      <Header btn_text="Выйти" loggedIn={true}/>  
      <main className="main">
        <section className="content">
          <h1>Мне не пришло письмо</h1>
          <p className="text-grey">Письмо может прийти с задержкой в 5-10 минут.<br/>
          Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку "Спам".
          Если письмо все же не пришло, повторите попытку или напишите об этом в тех.поддержку 
          <a href="#" className="blue-text"> support@livedune.ru</a> и мы активируем ваш аккаунт.</p>
          
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input className={errors?.email ? "error-input form-input" : "form-input"} 
              placeholder='Email' {...register("email",{ 
                required: "Введите email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Возможно вы ошиблись в указании почтового сервиса"
              }})}>
            </input>
            <div className="error-message">
              {errors?.email && <p>{errors?.email?.message}</p>}
            </div>
            <button type="submit" className="blue-button">Отправить заново</button>
            <Link to="/confirmation" className="finaly-text grey-link">Отменить</Link>
          </form>

        </section>
      </main>
    </div>
  );
}

export default NoLetterPage;

