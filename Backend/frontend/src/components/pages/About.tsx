export const About: React.FC = () => {
  return (
    <main>
      <div className="container ">
        <div className="row">
          <div className="col-12 col-lg-6 mt-3">
            <div className="card mb-3">
              <div className="card-header">
                <p className="h3">Район доставки</p>
              </div>
              <div className="card-body">
                <div className="border-bottom">Лепсе</div>
                <div className="border-bottom">Дворец Пионеров</div>
                <div className="border-bottom">Юго-Запад</div>
                <div className="border-bottom">Чистые Пруды</div>
                <div className="border-bottom">Филейка</div>
                <div className="border-bottom">Театральная площадь</div>
              </div>
            </div>
            <div className="card ">
              <div className="card-header">
                <p className="h3">Режим работы</p>
              </div>
              <div className="card-body">
                <div className="border-bottom">Понедельник 10:00 - 22:00</div>
                <div className="border-bottom">Вторник 10:00 - 22:00</div>
                <div className="border-bottom">Среда 10:00 - 22:00</div>
                <div className="border-bottom">Четверг 10:00 - 22:00</div>
                <div className="border-bottom">Пятница 10:00 - 23:00</div>
                <div className="border-bottom">Суббота 10:00 - 23:00</div>
                <div className="border-bottom">Воскресенье 10:00 - 23:00</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 my-3">
            <div className="card p-1">
              <div className="card-body p-0">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A1bc8b4fdf571b6bbff82e5adaca2b2b0eb86a868eff82529bf6e17e47808968b&amp;source=constructor"
                  width="100%"
                  height="718"
                  frameBorder="0"
                ></iframe>
                <script
                  type="text/javascript"
                  charSet="utf-8"
                  async
                  src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1bc8b4fdf571b6bbff82e5adaca2b2b0eb86a868eff82529bf6e17e47808968b&amp;width=100%25&amp;height=718&amp;lang=ru_RU&amp;scroll=true"
                ></script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <div className="card">
              <div className="card-header">
                <p className="h3">О компании</p>
              </div>
              <div className="card-body">
                Наш Магазин — место, где еда — это главное. Именно поэтому мы не
                экономим на вкусе. Только свежие роллы и горячая пицца,
                приготовленные именно для вас после заказа! Доставим заказ за 60
                минут или любое блюдо в подарок!
              </div>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="card">
              <div className="card-header">
                <p className="h3">Контакты</p>
              </div>
              <div className="card-body">
                Если у вас возникнут вопросы или пожелания, вы можете связаться
                с нами любым удобным способом: <br />
                {""}
                Email: pibstudents@internet.com <br />
                {""}
                Телефон: 8(800)-555-35-35
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
