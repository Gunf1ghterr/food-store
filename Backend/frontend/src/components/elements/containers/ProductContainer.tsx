import { useState } from "react";
import { IProductContainerProps } from "../../../interfaces/IProductContainerProps";
import { Modal } from "../Modal";

export const ProductContainer: React.FC<IProductContainerProps> = ({
  title,
  description,
  image,
  id,
}) => {
  const [count, setCount] = useState(0);

  return (
    <div
      className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-1 d-flex justify-content-center"
      id={String(id)}
    >
      <div className="card m-3 rounded-top-5">
        <Modal modalTitle="Товар" modalId={"product-" + String(id)}>
          <div className="img-scale-wrapper">
            <img src={image} className="card-img-top img-scale" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-between text-center">
              <button
                className="btn btn-danger"
                onClick={() =>
                  setCount((prev) => (count === 0 ? prev : prev - 1))
                }
              >
                Убрать
              </button>
              <p className="h5 my-auto">{count === 0 ? "" : count}</p>
              <button
                className="btn btn-success"
                onClick={() =>
                  setCount((prev) => (count === 10 ? prev : prev + 1))
                }
              >
                Добавить
              </button>
            </div>
          </div>
        </Modal>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#staticBackdrop-product-${id}`}
          className="btn btn-light "
        >
          Расширить
        </button>
      </div>
    </div>
  );
};
