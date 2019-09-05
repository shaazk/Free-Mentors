class Review {
  constructor(sessionId, mentorId, menteeId, score, menteeFullName, remark) {
    this.sessionId = sessionId;
    this.mentorId = mentorId;
    this.menteeId = menteeId;
    this.score = score;
    this.menteeFullName = menteeFullName;
    this.remark = remark;
  }
}
export default Review;
