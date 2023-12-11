import "./Hobby.css"
import hobby from "../../../assets/vector-hobby.png";
import community from "../../../assets/vectorCommunoty.png";
import arrow from "../../../assets/arrow_forward_ios_black_24dp 1.png"
const Hobby = () => {
    return (
      <main className="container hobby-container my-5">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="hobby-title">
              Your <span className="hobby">Hobby</span>, Your{" "}
              <span className="community">Community</span>...
            </h3>
            <button className="get-started-btn">Get Started</button>
          </div>
          <div className="">
            <img className="ms-4 arrow" src={arrow} alt="" /> <br />
            <span className="arrow-text">Go to top (Ctrl+Home)</span>
          </div>
        </div>
        <div className="d-flex align-items-center hobby-image">
          <img src={hobby} alt="" className="hobby-image-1" />
          <img src={community} alt="" className="hobby-image-2" />
        </div>
      </main>
    );
};

export default Hobby;