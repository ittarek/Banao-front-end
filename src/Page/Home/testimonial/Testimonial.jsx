
import "./Testimonial.css"
import girl from "../../../assets/girl.png";
import mic from "../../../assets/mic.png";
import coma from "../../../assets/coma.png";
const Testimonial = () => {
    return (
      <main className="container testimonial-container my-5">
        <div className="testimonial-div">
          <div className="d-flex gap-3 align-items-center">
            <img className="" src={coma} alt="" />
            <h5 className="test-title">Testimonials</h5>
          </div>
          <p className="test-details">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          {/* media */}
          <div className="d-flex justify-content-between align-items-center ">
            <div className="play-btn d-flex justify-content-between gap-5">
              <audio
                id="myPlayer"
                controls
                loop
                className="my-auto w-75"
                
              >
                <source src="./music/your_audio.mp3" type="audio/mpeg" />
                Sorry - your browser does not support the audio element.
              </audio>

              <img className="position-relative girl-image" src={girl} alt="" />
            </div>
            <div className="d-flex gap-4 align-items-center">
              <div>
                <img className="position-relative mic" src={mic} alt="" />
                <img className="girl" src={girl} alt="" />
              </div>
              <h6 className="girl-text">
                Shubha Nagarajan <br />
                <span className="dance-text">Classical Dancer</span>
              </h6>
            </div>
          </div>
        </div>
      </main>
    );
    }
export default Testimonial;