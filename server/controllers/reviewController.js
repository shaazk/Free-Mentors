import Review from "../models/review";
import { sessions, reviews } from "../db/data";


const reviewController = {
  createReview: (req, res) => {
    const s = sessions.find((s) => s.sessionId.toString() === req.params.sessionId);
    if (s && s.status !== "rejected") {
      const review = new Review(s.sessionId, s.mentorId, req.user.userId,
        req.body.score, req.user.menteeFullName, req.body.remark);

      reviews.push(review);
      return res.status(201).send({
        status: 201,
        message: "review created successfully",
        data: review,
      });
    }
    return res.status(400).send({
      status: 400,
      message: "Bad request",
    });
  },
  deleteReview: (req, res) => {
    const del = reviews.findIndex((rev) => rev.sessionId.toString() === req.params.sessionId);
    if (del > -1) {
      reviews.splice(del, 1);
      return res.status(200).send({
        status: 200,
        data: {
          message: "Review successfully deleted",
        },
      });
    }
    return 0;
  },
};
export default reviewController;
