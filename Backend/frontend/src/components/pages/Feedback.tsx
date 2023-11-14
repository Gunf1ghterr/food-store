import { FeedbackContainer } from "../elements/containers/FeedbackContainer";
import { FeedbackModal } from "../elements/containers/FeedbackModal";
import React, { useEffect, useState } from "react";
import { IFeedbackContainer } from "../../interfaces/IFeedbackContainer";
import { GoPencil } from "react-icons/go";


export const Feedback: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<IFeedbackContainer[]>([]);
  useEffect(() => {
    setFeedbacks([
      {
        id: 1,
        date: "2022-01-01",
        username: "Иван Иванов",
        feedback: "Круто!",
        image: "./logo.jpg",
      },
      {
        id: 2,
        date: "2022-01-01",
        username: "Иван Иванов",
        feedback: "Круто!",
      },
      {
        id: 3,
        date: "2022-01-01",
        username: "Ивын Иванов",
        feedback: "Круто!",
      },
      {
        id: 4,
        date: "2022-01-01",
        username: "Максик",
        feedback: "Круто!",
        image: "./offer1.jpg",
      },
      {
        id: 5,
        date: "2022-01-01",
        username: "Иван Иванов",
        feedback: "Круто!",
      },
      {
        id: 6,
        date: "2022-01-01",
        username: "Иван Иванов",
        feedback: "Круто!",
        image: "./offer1.jpg",
      },
      {
        id: 7,
        date: "2022-01-01",
        username: "Владиккк",
        feedback: "Круто!",
      },
    ]);
  }, []);

  return (
    <main>
      <FeedbackModal />
      <button
        data-bs-toggle="modal"
        data-bs-target="#write-feedback-modal"
        title="Оставить отзыв"
        className="write-feedback"
      >
        <GoPencil style={{fontSize: "30px", margin: "7px"}}/>
      </button>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            {feedbacks.map(
              (feedback, index) =>
                index < feedbacks.length / 2 && (
                  <FeedbackContainer
                    key={feedback.id}
                    id={feedback.id}
                    date={feedback.date}
                    username={feedback.username}
                    feedback={feedback.feedback}
                    image={feedback.image}
                  />
                )
            )}
          </div>
          <div className="col-lg-6 col-sm-12">
            {feedbacks.map(
              (feedback, index) =>
                index >= feedbacks.length / 2 && (
                  <FeedbackContainer
                    key={feedback.id}
                    id={feedback.id}
                    date={feedback.date}
                    username={feedback.username}
                    feedback={feedback.feedback}
                    image={feedback.image}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
