import { FeedbackContainer } from "../elements/containers/FeedbackContainer";
import { FeedbackModal } from "../elements/containers/FeedbackModal";
import React, { useEffect, useState } from "react";
import { IFeedbackContainer } from "../../interfaces/IFeedbackContainer";
import { GoPencil } from "react-icons/go";
import { useAuth } from "../contexts/AuthContext";
import { useFeedbacks } from "../../hooks/useFeedbacks";
import { FcPrevious, FcNext } from "react-icons/fc";

export const Feedback: React.FC = () => {
  const [skip, setSkip] = useState(0);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState<IFeedbackContainer[]>([]);
  const { data, isLoading, isSuccess } = useFeedbacks(skip);
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else if (isSuccess) {
      setLoading(false);
      setFeedbacks(data as IFeedbackContainer[]);
    }
    if (feedbacks.length === 0) {
      setSkip(0);
    }
  }, [data, feedbacks.length, isLoading, isSuccess]);

  return (
    <main>
      {user && (
        <>
          <FeedbackModal skip={skip} />
          <button
            data-bs-toggle="modal"
            data-bs-target="#write-feedback-modal"
            title="Оставить отзыв"
            className="write-feedback"
          >
            <GoPencil style={{ fontSize: "30px", margin: "7px" }} />
          </button>
        </>
      )}
      <div className="container">
        <div className="row">
          {loading && (
            <div className="d-flex justify-content-center my-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <div className="col-12 d-flex justify-content-center">
            <button
              className="btn btn-light   m-3 mx-1 rounded-5"
              type="button"
              title="Назад"
              onClick={() => {
                if (skip > 0) {
                  setSkip(skip - 10);
                }
              }}
            >
              <FcPrevious style={{ fontSize: "30px" }} />
            </button>
            <button
              className="btn btn-light m-3 mx-1 rounded-5"
              type="button"
              title="Вперед"
              onClick={() => {
                if (feedbacks.length === 10) {
                  setSkip(skip + 10);
                }
              }}
            >
              <FcNext style={{ fontSize: "30px" }} />
            </button>
          </div>
          <div className="col-12">
            {feedbacks.map((feedback) => (
              <FeedbackContainer
                key={feedback.feedbackId}
                feedbackId={feedback.feedbackId}
                date={feedback.date}
                userName={feedback.userName}
                message={feedback.message}
                image={feedback.image}
                userId={feedback.userId}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
