import React from 'react';
import { useParams } from 'react-router-dom';

function StyledPage() {
  const { word, textColor, bgColor } = useParams();

  const styles = {
    color: textColor,
    backgroundColor: bgColor,
    padding: '10px'
  };

  return <h1 style={styles}>{word}</h1>;
}

export default StyledPage;