import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderReadTime = (minutes) => {
    const cup = "☕️";
    const bento = "🍱";
    if (minutes < 30) {
      return `${cup.repeat(Math.ceil(minutes / 5))} ${minutes} min read`;
    } else {
      return `${bento.repeat(Math.ceil(minutes / 10))} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderReadTime(minutes)}</p>
    </article>
  );
}

export default Article;
