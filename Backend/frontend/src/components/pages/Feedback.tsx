import { FeedbackContainer } from "../elements/containers/FeedbackContainer";
import { SendFeedback } from "../functions/SendFeedback";
import { FilePreview } from "../functions/FilePreview";
import React from "react";

export const Feedback: React.FC = () => {
  return (
    <main>
      <div
        className="modal fade"
        id="write-feedback-modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Оставить отзыв
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <form
              action="api/feedback/new"
              method="POST"
              encType="multipart/form-data"
              id="feedback-form"
              name="feedback-form"
            >
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="feedback-textarea">Поле для ввода</label>
                  <textarea
                    className="form-control"
                    id="feedback-textarea"
                    name="feedback-textarea"
                    style={{ resize: "none" }}
                    rows={4}
                    required
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                      e.currentTarget.classList.remove("error");
                    }}
                    form="feedback-form"
                  ></textarea>
                  <input
                    type="file"
                    className="form-control mt-3"
                    aria-label="file example"
                    id="feedback-image"
                    name="feedback-image"
                    accept=".jpg, .jpeg, .png"
                    onChange={FilePreview()}
                    form="feedback-form"
                  />
                  <div id="filePreview" className="file-preview"></div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={SendFeedback()}
                >
                  Отправить
                </button>
              </div>
              <div
                className="alert alert-danger d-none mx-3"
                id="fileAlert"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.classList.add("d-none");
                }}
              >
                Можно вставлять только картинки!
              </div>
            </form>
            <div id="spinner-feedback"></div>
          </div>
        </div>
      </div>
      <button
        data-bs-toggle="modal"
        data-bs-target="#write-feedback-modal"
        title="Оставить отзыв"
        className="write-feedback"
      >
        <div className="icon-pencil" style={{ fontSize: "30px" }} />
      </button>
      <div className="container">
        <div className="row">
          <FeedbackContainer
            id={1}
            date="2022-01-01"
            username="Иван Иванов"
            feedback="Круто!"
            image="./logo.jpg"
          />
          <FeedbackContainer
            id={2}
            date="2022-01-01"
            username="Иван Иванов"
            feedback="Круто!"
          />
          <FeedbackContainer
            id={3}
            date="2022-01-01"
            username="Иван Иванов"
            feedback="Круто!"
            image="./offer1.jpg"
          />
        </div>
      </div>
    </main>
  );
};
