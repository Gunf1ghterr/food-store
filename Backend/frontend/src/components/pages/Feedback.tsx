import { FeedbackContainer } from "../elements/containers/FeedbackContainer";
import { FeedbackModal } from "../elements/containers/FeedbackModal";
import React from "react";

export const Feedback: React.FC = () => {
  return (
    <main>
      <FeedbackModal />
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
