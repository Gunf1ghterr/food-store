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
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-1 d-flex justify-content-center">
              <div className="card m-3" style={{ width: "18rem" }}>
                <div className="img-scale-wrapper">
                  <img
                    src="logo.jpg"
                    className="card-img-top img-scale"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-danger">Все карточки должны иметь СТРОГО одну высоту, иначе будет подобное</h5>
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
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-1 d-flex justify-content-center">
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
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-1 d-flex justify-content-center">
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
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-1 d-flex justify-content-center">
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
                    up the bulk of the card's
                    content.dgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfs
                    gfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfs
                    gfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfs
                    gfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfs
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

        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-md-6 col-sm-12 my-3 d-flex justify-content-center">
              <div className="card">
                <img src="./test-sale.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Небольшой пример текста, который должен основываться на
                    названии карточки и составлять основную часть содержимого
                    карточки.
                    <h1>Для акций!</h1>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6 col-sm-12 my-3 d-flex justify-content-center">
              <div className="card">
                <img src="./test-sale.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Небольшой пример текста, который должен основываться на
                    названии карточки и составлять основную часть содержимого
                    карточки.
                    <h1>Для акций!</h1>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6 col-sm-12 my-3 d-flex justify-content-center">
              <div className="card">
                <img src="./test-sale.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Небольшой пример текста, который должен основываться на
                    названии карточки и составлять основную часть содержимого
                    карточки. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Fugit amet ipsam consequatur alias omnis nesciunt
                    quis, facere ducimus libero quibusdam, earum eum laboriosam
                    fugiat quos nisi nemo laborum veritatis quisquam. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                    natus autem dolores reiciendis magni accusamus
                    exercitationem, incidunt molestias dolorem eos officia fugit
                    rerum aspernatur unde quos ratione. Tempora, tempore? Neque.
                    <br />
                    <br />
                    Небольшой пример текста, который должен основываться на
                    названии карточки и составлять основную часть содержимого
                    карточки. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Fugit amet ipsam consequatur alias omnis nesciunt
                    quis, facere ducimus libero quibusdam, earum eum laboriosam
                    fugiat quos nisi nemo laborum veritatis quisquam. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                    natus autem dolores reiciendis magni accusamus
                    exercitationem, incidunt molestias dolorem eos officia fugit
                    rerum aspernatur unde quos ratione. Tempora, tempore? Neque.
                    Небольшой пример текста, который должен основываться на
                    названии карточки и составлять основную часть содержимого
                    карточки. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Fugit amet ipsam consequatur alias omnis nesciunt
                    quis, facere ducimus libero quibusdam, earum eum laboriosam
                    fugiat quos nisi nemo laborum veritatis quisquam. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                    natus autem dolores reiciendis magni accusamus
                    exercitationem, incidunt molestias dolorem eos officia fugit
                    rerum aspernatur unde quos ratione. Tempora, tempore? Neque.
                    <h1>Для акций!</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
