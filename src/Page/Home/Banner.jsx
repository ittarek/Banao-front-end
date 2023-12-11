import "./Banner.css"
import SignIn from '../../ShardComponets/Signin/Signin';
import vector1 from "../../assets/vector1.png"
import vector2 from "../../assets/vetcor2.png"


const Banner = () => {
    return (
      <main className="banner-main">
        <div className="container d-lg-flex justify-content-between align-items-center  banner-container gap-5 ">
          <div className="banner-text-and-image">
            <div className="banner-details">
              <p className="title">
                Explore your <span className="hobby">hobby</span> or{" "}
                <span className="passion">passion</span>
              </p>
              <p className="description">
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </p>
              <p className="description">
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services or events.
                Hop on your hobbyhorse and enjoy the ride.
              </p>
            </div>
            {/* vector image */}
            <div className="d-flex justify-content-center align-items-center mx-auto vector-image">
              <img src={vector1} className="vector-image-1" alt="" />
              <img src={vector2} className="vector-image-1" alt="" />
            </div>
          </div>
          {/* sign in */}

          <div className="mx-auto">
            <SignIn />
          </div>

          <div className="d-lg-none">
            <img src={vector1} className="vector-image-1" alt="" />
            <img src={vector2} className="vector-image-1" alt="" />
          </div>
        </div>
      </main>
    );
};

export default Banner;