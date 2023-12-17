import React, { useState } from 'react';
import { IOfferContainerProps } from '../../../interfaces/IOfferContainerProps';
const AdminOfferContainer: React.FC<{ offerData: IOfferContainerProps[] }> = ({ offerData }) => {
  const [modalData, setModalData] = useState<IOfferContainerProps | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedImage, setEditedImage] = useState('');

  const openModal = (offer: IOfferContainerProps) => {
    setModalData(offer);
    setEditedTitle(offer.title);
    setEditedDescription(offer.description);
    setEditedImage(offer.image);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const handleSave = () => {
    if (modalData) {
      console.log('Сохранено:', editedTitle, editedDescription, editedImage);
      closeModal();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === 'editedTitle') {
      setEditedTitle(value);
    } else if (name === 'editedDescription') {
      setEditedDescription(value);
    } else if (name === 'editedImage') {
      setEditedImage(value);
    }
  };

  return (
    <div className="container">
      <h1>Карточки акций</h1>
      <div className="row">
        {offerData.map((offer) => (
          <div key={offer.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={offer.image} className="card-img-top" alt={offer.title} />
              <div className="card-body">
                <h5 className="card-title">{offer.title}</h5>
                <p className="card-text">{offer.description}</p>
                <button className="btn btn-primary" onClick={() => openModal(offer)}>
                  Редактировать
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Редактировать акцию</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  name="editedTitle"
                  value={editedTitle}
                  onChange={handleChange}
                  placeholder="Заголовок"
                />
                <textarea
                  className="form-control mb-3"
                  name="editedDescription"
                  value={editedDescription}
                  onChange={handleChange}
                  placeholder="Описание"
                ></textarea>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleSave}>
                  Сохранить изменения
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOfferContainer;
