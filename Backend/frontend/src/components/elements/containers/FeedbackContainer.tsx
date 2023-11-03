import { IFeedbackContainer } from "../../../interfaces/IFeedbackContainer";

export const FeedbackContainer: React.FC<IFeedbackContainer> = ({
  id,
  date,
  username,
  feedback,
  image,
}) => {
  return (
    <div className="col-lg-6 col-sm-12 my-3" id={String(id)}>
      <div className="card h-100 ">
        <div className="card-header d-flex justify-content-between">
          <p className="h5">{username}</p>
          <p className="h5">{date}</p>
        </div>
        <div className="card-body">
          <p className="card-text">{feedback}</p>
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
