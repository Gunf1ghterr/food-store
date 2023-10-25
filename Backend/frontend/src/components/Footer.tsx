export default function Footer() {
  return (
    <footer className="bg-light text-dark pt-1">
      <div className="container">
        <div className="row mb-3 text-center">
          <div className="col-md-3">
            <a className="text-dark no-underline" href="#">Пользовательские соглашения</a>
          </div>
          <div className="col-md-3">
            <a className="text-dark no-underline" href="#">Лицензионные соглашения соглашения</a>
          </div>
          <div className="col-md-3">
            <a className="text-dark no-underline" href="#">Политика конфиденциальности </a>
          </div>
          <div className="col-md-3">
            <a className="text-dark no-underline" href="#">Правила оплаты</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Разработали Соловей Р. и Пермяков С. для курсового проекта.<br />
            2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
