import './index.scss'

export const Footer = () => {
  return (
    <footer>
      <div className="social-medias">
        <a href='https://github.com/phuongnam7899' target='_blank' className="media-item">
          <i class="fab fa-github"></i>
        </a>
        <a href='https://www.linkedin.com/in/ph%C6%B0%C6%A1ng-nam-nguy%E1%BB%85n-96740317b' target='_blank' className="media-item">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href='https://www.instagram.com/namkhonglanman/' target='_blank' className="media-item">
        <i class="fab fa-instagram-square"></i>
        </a>
      </div>
      <div className='copyright'><i class="far fa-copyright"></i> 2022 nklm</div>
    </footer>
  );
};
