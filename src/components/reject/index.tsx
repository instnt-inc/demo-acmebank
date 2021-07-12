import "./styles.css";
import error404 from "common/assets/error-404.svg";

const Reject = () => {
  return (
    <>
      <aside className="feature-wrapper">
        <div className={"content"}>
          <h2 className="text-danger">We are unable to approve your application at this time.</h2>
          <p className="">
            Please don't hesitate to try again after 30 days.<br/>And reach out to us if you have any questions.
          </p>
          <div className="text-center text-md-left" style={{ marginTop: "10px" }}>
            <a href="/" className="btn btn-primary lift transition-3d-hover">
              Contact Us
            </a>
          </div>
          <img src={error404} alt="alt review"/>
        </div>
      </aside>
    </>
  );
};

export default Reject;
