import { IOfferContainerProps } from "../../../interfaces/IOfferContainerProps";
import { Modal } from "../Modal";

export const OfferContainer: React.FC<IOfferContainerProps> = ({
  description,
  image,
  id,
}) => {
  return (
    <div className="col-xxl-4 col-md-6 col-sm-12 my-3 d-flex justify-content-center">
      <div className="card">
        <Modal modalTitle="Акция" modalId={"offer-" + String(id)}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{description}</p>
          </div>
        </Modal>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#staticBackdrop-offer-${id}`}
          className="btn btn-light "
        >
          Расширить
        </button>
      </div>
    </div>
  );
};
