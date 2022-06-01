const highlightColors = {
    primary: {
        dark: '#0C7489',
        light: '#FBF719'
    },
    error: {
        dark: '#FF6978',
        light: '#ffacb4'
    }
}

export const HighlightedText = (props) => {
  const { highlightTarget = "bg", highlightColor = 'primary', children } = props;
  const highlightStyle = {};
  if ( highlightTarget === "text") highlightStyle.color = highlightColors[highlightColor].dark;
  if ( highlightTarget === "bg") highlightStyle.backgroundColor =  highlightColors[highlightColor].light;
  console.log(highlightStyle);
  return <span style={highlightStyle}>{children}</span>;
};
