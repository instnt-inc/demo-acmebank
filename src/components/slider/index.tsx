import "./styles.css";
import iphone from "../../common/assets/iPhone6.png";
import green from "../../common/assets/spending-green.png";
import receipt from "../../common/assets/receipt.png";
import categories from "../../common/assets/all-categories.png";
import spike from "../../common/assets/spending-spike.png";
import {useEffect, useState} from "react";

interface ISlider {
  scroll: number;
  height?: number;
  start?: number;
}

const Slider = (props: ISlider) => {
  const { scroll, height, start } = props;
  const [ selectedInd, setSelectedInd ] = useState(-1);
  const [ stuckedTop, setStuckedTop ] = useState(true);
  const [ stuckedBottom, setStuckedBottom ] = useState(false);

  useEffect(() => {
    const userWidth = document.querySelector('body')?.clientWidth || 0;
    const topHeight = (start || 0) + (userWidth < 846 ? 120 : 0);
    const bottomHeight = (start || 0) - (userWidth < 846 ? 100 : 0);
    setSelectedInd(-1);
    if (scroll < topHeight + 500) {
      setSelectedInd(0);
    } else if (scroll > topHeight + 500 && scroll < topHeight + 1100) {
      setSelectedInd(1);
    } else if (scroll > topHeight + 1100 && scroll < topHeight + 1800) {
      setSelectedInd(2);
    } else if (scroll > topHeight + 1800) {
      setSelectedInd(3);
    }

    const phoneHeight = document.querySelector("#floating-phone")?.clientHeight || 0;
    setStuckedTop(scroll === 0 || scroll <= topHeight - 100);
    setStuckedBottom(scroll + phoneHeight - bottomHeight - 100 > 2695);
  }, [scroll, start])
  return (
    <>
      <div id="home-scroller" style={{ height: (height || 3000) + 'px' }}>
        <div className={`slider ${stuckedTop ? "stucked-top" : ""} ${stuckedBottom ? "stucked-bottom" : ""}`}>
          <div id="floating-phone">
            <img id="floating-phone-scale-image" className="scale-image"
                 src={iphone} alt="iphone"/>
            <p/>
            <div id="screen-0" className="phone-screen" style={{ opacity: selectedInd === 0 ? 1 : 0 }}>
              <img src={green} alt="green"/>
            </div>
            <div id="screen-1" className="phone-screen" style={{ opacity: selectedInd === 1 ? 1 : 0 }}>
              <img src={receipt} alt="receipt"/>
            </div>
            <div id="screen-2" className="phone-screen" style={{ opacity: selectedInd === 2 ? 1 : 0 }}>
              <img src={categories} alt="categories"/>
            </div>
            <div id="screen-3" className="phone-screen" style={{ opacity: selectedInd === 3 ? 1 : 0 }}>
              <img src={spike} alt="spike"/>
            </div>
          </div>
          <div id="text-bubble-0" className="text-bubble text-bubble-left left" style={{ opacity: selectedInd === 0 ? 1 : 0 }}>
            <span className="arrow arrow-left"/>
            <p/>
            <div className="text-wrapper">
              <h3>Know where you stand</h3>
              <p>One look at our Spending Meter® and you’ll know how you’re doing. Its an
                automatic, insightful, and stress free way to keep track of your money.
              </p>
            </div>
          </div>
          <div id="text-bubble-1" className="text-bubble text-bubble-right right" style={{ opacity: selectedInd === 1 ? 1 : 0 }}>
            <span className="arrow arrow-right"/>
            <p/>
            <div className="text-wrapper">
              <h3>Go places, do things</h3>
              <p>Use your AcmeBank Card to pay for anything. The AcmeBank App will instantly categorize each
                purchase, and show how much you’re spending this month.
              </p>
            </div>
          </div>
          <div id="text-bubble-2" className="text-bubble text-bubble-left left" style={{ opacity: selectedInd === 2 ? 1 : 0 }}>
            <span className="arrow arrow-left"/>
            <p/>
            <div className="text-wrapper">
              <h3>Spend better, live better</h3>
              <p>Know how much and where your money is going. The App automatically tracks your spend,
                so you can do more of what you love.</p>
            </div>
          </div>
          <div id="text-bubble-3" className="text-bubble text-bubble-right right" style={{ opacity: selectedInd === 3 ? 1 : 0 }}>
            <span className="arrow arrow-right"/>
            <p/>
            <div className="text-wrapper">
              <h3>Always know, never worry</h3>
              <p>Spending Spikes alerts you when you spend faster than usual – an unexpected
                expense, or a little extra indulgence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
