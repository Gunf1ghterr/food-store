import React, { useState, useEffect } from "react";
import { IProductContainerProps } from "../../../interfaces/IProductContainerProps";

export const ProductContainer: React.FC<IProductContainerProps> = ({
  name,
  description,
  image,
  id,
  price,
  category,
}) => {
  const [productName, setProductName] = useState(name);
  const [productDescription, setProductDescription] = useState(description);
  const [productPrice, setProductPrice] = useState(price);
  const [productCategory, setProductCategory] = useState(category);
  const [editedData, setEditedData] = useState<IProductContainerProps>({
    id,
    name,
    description,
    image,
    price,
    category,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setProductName(newName);
    setEditedData((prevData) => ({ ...prevData, name: newName }));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription = e.target.value;
    setProductDescription(newDescription);
    setEditedData((prevData) => ({ ...prevData, description: newDescription }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(e.target.value, 10);
    setProductPrice(newPrice);
    setEditedData((prevData) => ({ ...prevData, price: newPrice }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCategory = e.target.value;
    setProductCategory(newCategory);
    setEditedData((prevData) => ({ ...prevData, category: newCategory }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleModalClose = () => {
    setIsEditing(false);
  };

  const handleUpdate = () => {
    setIsEditing(false);
  };
  
  useEffect(() => {
    if (!isEditing) {
      setProductName(editedData.name);
      setProductDescription(editedData.description);
      setProductPrice(editedData.price);
      setProductCategory(editedData.category);
    }
  }, [isEditing, editedData]);

  return (
    <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-1 d-flex justify-content-center" id={String(id)}>
      <div className="card m-3 rounded-top-5">
        <div className="img-scale-wrapper">
          <img src={image} className="card-img-top img-scale" loading="lazy" alt={"product-" + String(id)} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{isEditing ? productName : name}</h5>
          <p className="card-text">{isEditing ? productDescription : description}</p>
          <p className="card-text">Категория: {isEditing ? productCategory : category}</p>
          <div className="d-flex justify-content-center">
            <p className="h3">{isEditing ? productPrice : String(price)} ₽</p>
          </div>
        </div>
        {isEditing && (
          <div className="modal" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Изменение данных товара</h5>
                  <button type="button" className="close" onClick={handleModalClose}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="productName">Название:</label>
                    <input type="text" id="productName" className="form-control" value={productName} onChange={handleNameChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productDescription">Описание:</label>
                    <textarea id="productDescription" className="form-control" value={productDescription} onChange={handleDescriptionChange}></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="productPrice">Цена:</label>
                    <input type="text" id="productPrice" className="form-control" value={productPrice} onChange={handlePriceChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productCategory">Категория:</label>
                    <input type="text" id="productCategory" className="form-control" value={productCategory} onChange={handleCategoryChange} />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={handleUpdate}>Сохранить изменения</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <button className="btn btn-light" onClick={handleEditClick}>
          Изменить
        </button>
      </div>
    </div>
  );
};
