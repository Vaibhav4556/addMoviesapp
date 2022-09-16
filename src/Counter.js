import { useState } from "react";


export function Counter() {
  const [like, setLike] = useState(0);

  const [dislike, setDislike] = useState(0);

  return (
    <div className="like-dislike">
      <button className="likes" onClick={() => setLike(like + 1)}> 👍 {like}</button>

      <button className="dislikes" onClick={() => setDislike(dislike + 1)}> 👎 {dislike}</button>
    </div>
  );
}
