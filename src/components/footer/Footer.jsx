import './Footer.css';
//   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
// export default Footer = () => {
//   return (
//     <div class="container">
//       <i class="fa fa-apple" id="apple"></i>
//       <i class="fa fa-twitter" id="twitter"></i>
//       <i class="fa fa-github-square github" id="github"></i>
//       <i class="fa fa-facebook-square" id="facebook"></i>
//     </div>
//   );
// };
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="container">
      <i className="fa fa-apple" id="apple"></i>
      <i className="fa fa-twitter" id="twitter"></i>
      <i className="fa fa-github-square github" id="github"></i>
      <i className="fa fa-facebook-square" id="facebook"></i>
    </div>
  );
};

export default Footer;
