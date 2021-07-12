import "./styles.css";
import illustration from "common/assets/illustration-2.png";

const Reject = () => {
  return (
    <>
      <aside className="feature-wrapper">
        <div className={"content"}>
            <div className="welcome">
                <div className="row">
                    <div className="col-xm-12 col-sm-12 col-md-7 col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="float-right">
                                    <div className="widget-icon">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-credit-card-2-back-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2z"/>
                                            <path d="M0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"/>
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="card-title text-muted">Balance</h4>
                                <b className="balance">$ 100.00</b>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center text-md-left">
                    Welcome to <span className="acmebank-color">AcmeBank</span>. <br/>
                    Banking anytime.
                </h1>

                <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                    Bank securely with us, 365 days (and nights) a year.
                </p>

                <div className="text-center text-md-left">
                    <a href="/welcome.html" className="btn btn-primary lift transition-3d-hover">
                        Get Started
                    </a> &nbsp;&nbsp;
                    <a href="/welcome.html" className="btn btn-primary-soft lift transition-3d-hover">
                        <span>Learn More
                            <svg width="1em" height="1em" viewBox="0 0 16 20" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
            <p/>
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
                <img src={illustration} className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"  alt="illustration" />
            </div>
        </div>
      </aside>
    </>
  );
};

export default Reject;
