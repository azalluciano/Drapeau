import axios from "axios";
import React, { FC, useState } from "react";
import DeleteArticle from "./DeleteArticle";
interface Art {
  article: any;
}
const Article: FC<Art> = ({ article }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const dateParse = (date: any) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return newDate;
  };
  const handleEdit = () => {
    const data = {
      author: article.author,
      content: editedContent ? editedContent : article.content,
      date: article.date,
    };

    axios.put("http://localhost:3003/articles/" + article.id, data).then(() => {
      setIsEditing(false);
    });
  };
  return (
    <div className="article" style={{ background: isEditing ? "#81feff" : "white" }}>
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateParse(article.date)}</em>
      </div>
      {isEditing ? (
        <textarea
          onChange={(e) => setEditedContent(e.target.value)}
          autoFocus
          defaultValue={editedContent ? editedContent : article.content}
        ></textarea>
      ) : (
        <p>{editedContent ? editedContent : article.content}</p>
      )}

      <div className="btn-container">
        {isEditing ? (
          <button onClick={handleEdit}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <DeleteArticle id={article.id}/>
      </div>
    </div>
  );
};

export default Article;
