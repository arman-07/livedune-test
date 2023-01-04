
import './Register.css';
import facebook_icon from "../img/fasebook.svg";
import google_icon from "../img/google.svg";
import { useForm } from 'react-hook-form';
import Header from '../header/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../redux/registerSlice';
import { useNavigate } from 'react-router-dom';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isPromoActive, setIsPromoActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur"
  });

  const handlePromoInput = () => {
    setIsPromoActive(true);
  }

  const onSubmit = (data) => {
    dispatch(setUserName(data.firstName));
    navigate("/confirmation");
  };


  return (
    <div className="wrapper">
      <Header p_text="Уже есть аккаунт?" btn_text="Войти" path="/"/>  
      <main className="main">
        <section className='content register-content'>
          <h1>Регистрация</h1>
          <p className='text-grey'>Зарегистрируйся и получи доступ к аналитике аккаунтов. </p>
          <div className="social-btn-container">
            <a href="#"><img className="social-logo" src={facebook_icon} alt="facebook icon" 
              width="24"/>Войти через Facebook</a>
            <a href="#"><img className="social-logo" src={google_icon} alt="google icon" 
              width="24"/>Войти через Google</a>
          </div>
          <p className='text-grey'>или</p>

          <form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
            <input className={errors?.firstName ? "error-input form-input" : "form-input"} 
            placeholder='Имя' {...register("firstName",{ 
              required: "Введите имя",})}>
            </input>
            <div className="error-message">
              {errors?.firstName && <p>{errors?.firstName?.message}</p>}
            </div>

            <input className={errors?.email ? "error-input form-input" : "form-input"} 
            placeholder='Email' {...register("email",{ 
              required: "Введите email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Возможно вы ошиблись в указании почтового сервиса"
                }})}>
            </input>
            <div className="error-message">
              {errors?.email && <p>{errors?.email?.message}</p>}
            </div>

            <input className={errors?.password ? "error-input form-input" : "form-input"} type="password" 
            placeholder='Пароль' {...register("password",{ 
              required: "Введите пароль"})}>
            </input>
            <div className="error-message">
              {errors?.password && <p>{errors?.password?.message}</p>}             
            </div>  

            { (() => {
              if (!isPromoActive) {
                return <button className="blue-text promo-button" onClick={handlePromoInput}>У меня есть промокод</button>;
              } else {
                return <input className="form-input" placeholder='Промокод' {...register("promo",{required: false})}></input>;
              }})()
            }
            <button type="submit" className="blue-button">Создать аккаунт</button>
            <p className="finaly-text">Создавая аккаунт, я согласен с <a className="blue-text" href='#'>условиями оферты</a></p>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Register;

