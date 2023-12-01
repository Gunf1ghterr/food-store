import { FilePreview } from "../../functions/FilePreview";
import { SendFeedback } from "../../functions/SendFeedback";
import { InputChanged } from "../../functions/InputChenged";
import { useCreateFeedback } from "../../../hooks/useCreateFeedback";
import React from "react";

export const FeedbackModal: React.FC<{ skip: number }> = ({ skip }) => {
  const { mutate } = useCreateFeedback(skip);
  return (
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
              id="close-modal-feedback"
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
                  id="feedbackMessage"
                  name="feedbackMessage"
                  style={{ resize: "none" }}
                  rows={4}
                  required
                  onChange={InputChanged}
                  form="feedback-form"
                  maxLength={200}
                ></textarea>
                <input
                  type="file"
                  className="form-control mt-3"
                  aria-label="file example"
                  id="feedbackImage"
                  name="feedbackImage"
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
                onClick={SendFeedback(mutate)}
                form="feedback-form"
              >
                Отправить
              </button>
            </div>
            <div
              className="alert alert-danger d-none m-3"
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
  );
};
