export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-2">
                <div className="footer__links">
                  <span className="footer__column-title">Get Help</span>
                  <a className="footer__link">Link</a>
                  <a className="footer__link">Link</a>
                  <a className="footer__link">Link</a>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer__links">
                  <span className="footer__column-title">Get Help</span>
                  <a className="footer__link">Link</a>
                  <a className="footer__link">Link</a>
                  <a className="footer__link">Link</a>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer__links">
                  <span className="footer__column-title">Get Help</span>
                  <a className="footer__link">Link</a>
                  <a className="footer__link">Link</a>
                  <a className="footer__link">Link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer__extra">
              <span className="footer__column-title">
                Sign Up for Newsletter
              </span>
              <input placeholder="youremail@company.com" className="footer__input" type="text" name="email_newsletter" />
              <p>
                I'm baby migas next level pabst, tousled hashtag slow-carb yr
                echo park vice gluten-free viral vegan lomo mustache. Artisan
                shaman food truck narwhal hell of. Master cleanse affogato small
                batch coloring book. Cray tousled food truck vape edison bulb
                fingerstache next level bitters authentic glossier gentrify
                shoreditch.
              </p>
              <div className="footer__social-icons">
                <a className="footer__social-link">
                  <i className="fab fa-facebook"></i>
                </a>
                <a className="footer__social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="footer__social-link">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="footer__social-link">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        <div className="row">
            <div className="col-md-12">
                <div className="footer__bottom">
                    <div className="footer__copyright">
                        @ 2021 Alexander Govea, LLC All Rights Reserved
                    </div>
                    <div className="footer__extra-links">
                        <a href="#">
                            Link
                        </a>
                        <a href="#">
                            Link
                        </a>
                        <a href="#">
                            Link
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
