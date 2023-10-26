import { useEffect } from "react";

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-1">
              <div className="card m-3" style={{ width: "18rem" }}>
                <div className="img-scale-wrapper">
                  <img
                    src="logo.jpg"
                    className="card-img-top img-scale"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Карточка товара на будущее</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-between text-center">
                    <button className="btn btn-danger">Убрать</button>
                    <p className="h5 my-auto">1</p>
                    <button className="btn btn-success ">Добавить</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-1">
              <div className="card m-3" style={{ width: "18rem" }}>
                <div className="img-scale-wrapper">
                  <img
                    src="logo.jpg"
                    className="card-img-top img-scale"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Карточка товара на будущее</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-between text-center">
                    <button className="btn btn-danger">Убрать</button>
                    <p className="h5 my-auto">1</p>
                    <button className="btn btn-success ">Добавить</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-1">
              <div className="card m-3" style={{ width: "18rem" }}>
                <div className="img-scale-wrapper">
                  <img
                    src="logo.jpg"
                    className="card-img-top img-scale"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Карточка товара на будущее</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-between text-center">
                    <button className="btn btn-danger">Убрать</button>
                    <p className="h5 my-auto">1</p>
                    <button className="btn btn-success ">Добавить</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-1">
              <div className="card m-3" style={{ width: "18rem" }}>
                <div className="img-scale-wrapper">
                  <img
                    src="logo.jpg"
                    className="card-img-top img-scale"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Карточка товара на будущее</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-between text-center">
                    <button className="btn btn-danger">Убрать</button>
                    <p className="h5 my-auto">1</p>
                    <button className="btn btn-success ">Добавить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "100vh" }}></div>
        <div style={{ height: "100vh" }}></div>
      </main>
    </>
  );
};
