import React, { CSSProperties } from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    fontSize: "35px",
    position: "absolute",
    left: "0",
    right: "0",
    marginTop: "20px",
    textAlign: "center",
  } as CSSProperties,
};

const load = {
  text: "Apple",
  speed: 300
};

export default function Loading(loading: { text: string }, { speed: integer}) {
  const [content, setContent] = React.useState(text);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${loading.text}...` ? loading.text : `${content}.`;
      });
    }, loading.speed);

    return () => window.clearInterval(id);
  }, [loading.text, loading.speed]);

  return <p style={styles.content}>{content}</p>;
}


