import React from 'react';

// Reusable Starburst SVG component
function Starburst({
  fill = '#dfb448',
  left,
  right,
  top,
  bottom,
  transformScale = 1,
  style = {},
  raised = false,
  ...props
}) {
  // Compose positioning and transform styles
  const positionStyle = {
    position: 'absolute',
    left,
    right,
    top,
    bottom,
    transform: `scale(${transformScale})`,
    pointerEvents: 'none',
    ...(raised ? { zIndex: 1000 } : {}),
    ...style,
  };

  return (
    <svg
      width="101"
      height="101"
      viewBox="0 0 101 101"
      style={positionStyle}
      {...props}
    >
      <polygon
        points="55.8 53.16 94.5 50.5 55.8 47.84 72.42 28.58 53.16 45.2 50.5 6.5 47.84 45.2 28.58 28.58 45.2 47.84 6.5 50.5 45.2 53.16 28.58 72.42 47.84 55.8 50.5 94.5 53.16 55.8 72.42 72.42 55.8 53.16"
        fill={fill}
      />
    </svg>
  );
}

export default Starburst;