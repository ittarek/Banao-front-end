import "./Footer.css"
import facebook from "../../assets/104498_facebook_icon 1.png"
import tweeter from "../../assets/5296514_bird_tweet_twitter_twitter logo_icon 3.png";
import instagram from "../../assets/5335781_camera_instagram_social media_instagram logo_icon 1.png";
import googlePlus from "../../assets/843777_google_google+_plus_icon 1.png";
import youtube from "../../assets/4375133_logo_youtube_icon 1.png"
import telegram from "../../assets/4375108_logo_telegram_icon 1.png";
import message from "../../assets/1564504_email_letter_mail_message_icon 1.png"

const Footer = () => {
    return (
      <footer className="">
        <div className="mt-5 container d-lg-flex justify-content-between ">
          <div className="">
            <h5>Hobbycue</h5>
            <ul>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work With Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h5>How Do I</h5>
            <ul>
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Past A Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </ul>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li>Listing</li>
              <li>Blogs Post</li>
              <li>Shope / Store</li>
              <li>Community</li>
            </ul>
          </div>
          {/* social */}
          <div className="d-flex social-div flex-column align-items-start">
            <h5 className="text-left ">Social Media</h5>
            <div className="d-flex  gap-4 align-items-center social-icon">
              <img src={facebook} alt="" />
              <img src={tweeter} alt="" />
              <img src={instagram} alt="" />
              <img src={googlePlus} alt="" />
              <img src={youtube} alt="" />
              <img src={telegram} alt="" />
              <img src={message} alt="" />
            </div>
            <h5>Invite Friends</h5>
            <div className="input-group subscribe-form">
              <input
                type="search"
                placeholder="Email Id"
                aria-describedby="button-addon5"
                className="form-control"
              />
              <div className="input-group-append">
                <button
                  id="button-addon5"
                  type="submit"
                  className="btn btn-primary"
                >
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <p className="text-center copyWrite">© Purple Cues Private Limited</p>
        </div>
      </footer>
    );
};

export default Footer;