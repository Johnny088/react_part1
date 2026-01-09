export const Sprite = ({ sizeWidth, sizeHeight, color, radius }) => {
  return (
    <div
      style={{
        width: sizeWidth,
        height: sizeHeight,
        border: `solid 1px ${color}`,
        borderRadius: `${radius}%`,
        marginBottom: '20px',
      }}
    ></div>
  );
};
