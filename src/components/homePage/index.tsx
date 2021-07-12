import forbes from "common/assets/forbes.png";
import wired from "common/assets/wired.png";
import techCrunch from "common/assets/techcrunch.png";
import americanBanker from "common/assets/americanbanker-1.png";
import appStore from "common/assets/app-store.svg";
import googlePlay from "common/assets/play-badge.png";
import cash from "common/assets/deposit_cash_icon.png";
import pay from "common/assets/pay-friend_icon.png";
import safety from "common/assets/security_icon.png";
import homepage from "common/assets/homepage_background.jpg";
// @ts-ignore
import heroVideo from "common/assets/acmebankhero.mp4";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faDownload, faCreditCard, faHandHoldingUsd, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import "./styles.css";
import Slider from "../slider";
import {useEffect, useState} from "react";

const HomePage = () => {
  const [ scroll, setScroll ] = useState(0);
  const [ start, setStart ] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setStart(document.querySelector('.et_pb_section_0')?.clientHeight || 0);
      setScroll(window.pageYOffset)
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <>
      <aside className="aside-wrapper">
        <div className="et_pb_section et_pb_section_0 et_pb_fullwidth_section et_section_regular et_pb_slides">
          <div className="et_pb_module et_pb_fullwidth_slider_0 et_pb_slider et_pb_slider_no_arrows et_slider_auto et_slider_speed_7000 et_pb_bg_layout_light">
              <div className="et_pb_slide">
                  <div className="et_pb_container clearfix et_pb_slide et_pb_slide_0 et_pb_section_video et_pb_bg_layout_light et_pb_media_alignment_center et-pb-active-slide">
                    <div className="et_pb_slider_container_inner">

                      <div className="et_pb_slide_description">
                        <h1 className="et_pb_slide_title">Get AcmeBank...anytime, anywhere. </h1>
                        <div className="et_pb_slide_content">
                          <div className="hero-text-wrapper">
                            <div id="icons-grid">
                              <div className="hero-cell">
                                <FontAwesomeIcon icon={faFile} />
                                <p>APPLY</p>
                              </div>
                              <div className="hero-cell">
                                <FontAwesomeIcon icon={faDownload} />
                                <p>LOAD</p>
                              </div>
                              <div className="hero-cell">
                                <FontAwesomeIcon icon={faCreditCard} />
                                <p>SPEND</p>
                              </div>
                              <div className="hero-cell">
                                <FontAwesomeIcon icon={faHandHoldingUsd} />
                                <p>TRACK</p>
                              </div>
                              <div className="hero-cell">
                                <FontAwesomeIcon icon={faShoppingBasket} />
                                <p>CONTROL</p>
                              </div>
                            </div>
                            <div id="hero-copy">The AcmeBank account, card, and app work together to help you
                              understand and manage your spending.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <video className='videoTag' autoPlay loop muted>
                <source src={heroVideo} type='video/mp4' />
              </video>
          </div>
        </div>
        <Parallax
            bgImage={homepage}
            strength={-200}
            className="et_pb_section et_pb_section_1 scrooling_home_slider et_pb_section_parallax et_pb_with_background et_section_regular">

          <Slider scroll={scroll} start={start} height={3000} />
        </Parallax>
        <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
          <div className="featured-container">
            <div className="feature-item">
              <img src={cash} alt="cash" />
              <h2>Get cash without fees.</h2>
              <p>
                AcmeBank has a network of over 42,000 ATMs where you can withdraw
                cash without any fees.
              </p>
            </div>
            <div className="feature-item">
              <img src={safety} alt="safety" />
              <h2>Rest assured.</h2>
              <p>
                Your AcmeBank Account is FDIC insured, with no monthly fees or
                minimum balances.
              </p>
            </div>
            <div className="feature-item">
            <img src={pay} alt="pay" />
            <h2>Pay your frieds.</h2>
            <p>
              Pay a friend using email or a text message — even if they don’t have
              a AcmeBank account.
            </p>
          </div>
          </div>
        </div>
        <div className="featured-container">
          <span>As featured in:</span>
          <img src={forbes} alt="forbes" className="company-logo" />
          <img src={wired} alt="wired" className="company-logo" />
          <img src={techCrunch} alt="techCrunch" className="company-logo" />
          <img
            src={americanBanker}
            alt="americanBanker"
            className="company-logo"
          />
        </div>
        <div className="downloadApp-wrapper">
          <div className="downloadApp-container">
            <span>Download the free app</span>
            <Link to="/">
              <img src={appStore} alt="appStore" className="company-logo" />
            </Link>
            <Link to="/">
              <img src={googlePlay} alt="googlePlay" className="company-logo" />
            </Link>
          </div>
        </div>
        <div className="license-wrapper">
          <p>For Financial Institutions:</p>
          <span>License our award winning platform.</span>
          <Link to="/">Learn more &#8594;</Link>
        </div>
      </aside>
    </>
  );
};

export default HomePage;
