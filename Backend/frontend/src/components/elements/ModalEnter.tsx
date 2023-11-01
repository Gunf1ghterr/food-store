import React from 'react';
export const ModalEnter = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal fade show"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true" 
        role="dialog" 
        style={{ display: 'block' }}
    >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Вход</h5>
                <button type="button" className="close" onClick={onClose}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Email адрес</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Введите email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Пароль</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Введите пароль"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                  Зарегистрироваться
                </button>
                <button type="button" className="btn btn-primary">
                  Войти
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};
