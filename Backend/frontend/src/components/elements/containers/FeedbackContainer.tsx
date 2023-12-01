import { IFeedbackContainer } from "../../../interfaces/IFeedbackContainer";
import { useAuth } from "../../contexts/AuthContext";
import React from "react";

export const FeedbackContainer: React.FC<IFeedbackContainer> = ({
  date,
  feedbackId,
  userName,
  message,
  image,
  userId,
}) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    year: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  const { user } = useAuth();
  const originalDateTime: Date = new Date(date);
  const formattedDateTime: string = originalDateTime.toLocaleString(
    undefined,
    options
  );

  return (
    <div className="my-3" id={String(feedbackId)}>
      <div className="card">
        <div
          className={`card-header d-flex justify-content-between h-auto ${
            user?.id === userId ? "bg-success text-white" : ""
          } `}
          title={`${
            userId === user?.id
              ? "Мой отзыв"
              : `Отзыв от ${userName} (${formattedDateTime})`
          } `}
        >
          <p className="h5">{userName}</p>
          <p className="h5">{formattedDateTime}</p>
        </div>
        <div className="card-body">
          <p className="card-text">{message}</p>
        </div>
        {image && (
          <div className="card-footer">
            <img src={image} className="card-img-bottom" alt={image} />
          </div>
        )}
      </div>
    </div>
  );
};
