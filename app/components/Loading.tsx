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

type Load = {
  text: string,
  speed: integer
}

export default function Loading({ text, speed }: Load) {
  const [content, setContent] = React.useState(text);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return <p style={styles.content}>{content}</p>;
}


