import { FeedbackContainer } from "../elements/containers/FeedbackContainer";
import { FeedbackModal } from "../elements/containers/FeedbackModal";
import React, { useEffect, useState } from "react";
import { IFeedbackContainer } from "../../interfaces/IFeedbackContainer";
import { GoPencil } from "react-icons/go";
import { useAuth } from "../contexts/AuthContext";
import { useFeedbacks } from "../../hooks/useFeedbacks";

export const Feedback: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState<IFeedbackContainer[]>([]);
  const { data, isLoading, isSuccess } = useFeedbacks();
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else if (isSuccess) {
      setLoading(false);
      setFeedbacks(data as IFeedbackContainer[]);
    }
  }, [data, isLoading, isSuccess]);

  return (
    <main>
      {user && (
        <>
          <FeedbackModal />
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
          <div className="col-lg-6 col-sm-12">
            {feedbacks.map(
              (feedback, index) =>
                index < feedbacks.length / 2 && (
                  <FeedbackContainer
                    key={feedback.feedbackId}
                    feedbackId={feedback.feedbackId}
                    date={feedback.date}
                    userName={feedback.userName}
                    message={feedback.message}
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
                    key={feedback.feedbackId}
                    feedbackId={feedback.feedbackId}
                    date={feedback.date}
                    userName={feedback.userName}
                    message={feedback.message}
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
