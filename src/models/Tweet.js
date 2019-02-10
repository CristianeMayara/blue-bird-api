const TweetSchema = new mongoose.Schema({
  author: String,
  content: String,
  likes: {
    type: number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tweet", TweetSchema);