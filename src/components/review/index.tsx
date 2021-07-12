import "./styles.css";
import maintenance from "common/assets/maintenance-mode.svg";

const Reject = () => {
  return (
    <>
      <aside className="feature-wrapper">
          <div className="container floating-items">
              <div className="icon-floating bg-white floating">
                  <span/>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 120 120" xmlSpace="preserve">
                      <circle className="icon-1-0 fill-gray-400" opacity=".5" cx="72" cy="49.3" r="31.4"/>
                      <line className="icon-1-1 fill-none stroke-gray-400" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" strokeMiterlimit="10" x1="87.2" y1="88.7" x2="77.9"
                            y2="79.5"/>
                      <circle className="icon-1-2 fill-primary" cx="58.5" cy="54.7" r="31.4"/>
                      <path className="icon-1-3 fill-none stroke-white" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" strokeMiterlimit="10" d="M80.3,41.6c2.5,4.2,3.7,9.1,3.5,13.9c-0.2,6.2-2.7,12.3-7.5,17c-9.9,9.9-26,9.9-36,0c-9.9-9.9-9.9-26,0-36
                            c9.9-9.9,26-9.9,36,0"/>
                      <line className="icon-1-1 fill-none stroke-gray-400" strokeWidth="3" strokeLinecap="round"
                            strokeLinejoin="round" strokeMiterlimit="10" x1="86" y1="77.6" x2="92.2" y2="83.8"/>
                      <path className="icon-1-1 fill-none stroke-gray-400" strokeWidth="3" strokeLinecap="round"
    strokeLinejoin="round" strokeMiterlimit="10" d="M115.9,112.5L115.9,112.5c-2.6,2.6-6.9,2.6-9.5,0L84.9,91.1l9.5-9.5l21.5,21.5
                            C118.5,105.6,118.5,109.9,115.9,112.5z"/>
                      <path className="icon-1-3 fill-none stroke-white" strokeWidth="3" strokeLinecap="round"
    strokeLinejoin="round" strokeMiterlimit="10" d="M54.5,37.9c0,0-10.6,0.6-12.6,11.4"/>
                      <path className="icon-1-1 fill-none stroke-gray-400" strokeWidth="3" strokeLinecap="round"
    strokeLinejoin="round" strokeMiterlimit="10" d="M36.6,83H7c-2.6,0-4.8-2.1-4.8-4.8V10.8c0-2.6,2.1-4.8,4.8-4.8h103.2c2.6,0,4.8,2.1,4.8,4.8v67.4
                            c0,2.6-2.1,4.8-4.8,4.8h-8.2"/>
                      <ellipse className="icon-1-1 fill-none stroke-gray-400" opacity=".5" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="35.2" cy="16"
    rx="3.1" ry="3.1"/>
                      <circle className="icon-1-1 fill-none stroke-gray-400" opacity=".5" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="23.6" cy="16"
    r="3.1"/>
                      <circle className="icon-1-4 fill-none stroke-primary" strokeWidth="3" strokeLinecap="round"
    strokeLinejoin="round" strokeMiterlimit="10" cx="12" cy="16" r="3.1"/>
                    </svg>
              </div>
          </div>
        <div className={"content"}>
          <h2 className="text-white">Your request is under review.</h2>
          <p className="text-white">Expect an email from us shortly with next steps.</p>
          <img src={maintenance} className="marginTop" alt="alt review"/>
        </div>
      </aside>
    </>
  );
};

export default Reject;
