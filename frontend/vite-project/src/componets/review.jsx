// components/ReviewForm.jsx
import { useState } from "react";
import axios from "axios";

export default function ReviewForm({ eventId, onReviewAdded }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const submitReview = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/reviews", {
        event: eventId,
        rating,
        comment,
      }, { withCredentials: true });
      
      setRating(5);
      setComment("");
      onReviewAdded();
    } catch (err) {
      alert(err.response?.data?.message || "Error adding review");
    }
  };

  return (
    <form onSubmit={submitReview} className="p-4 border rounded">
      <label>Rating:</label>
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>

      <textarea
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full mt-2 p-2 border rounded"
      />

      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Submit Review
      </button>
    </form>
  );
}
