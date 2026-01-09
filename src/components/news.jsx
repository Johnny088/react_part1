export const NewsItem = ({ image, text, link }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <img src={image} alt="there is can be your ads" />
      <a href={link}>
        <p>{text}</p>
      </a>
    </div>
  );
};
