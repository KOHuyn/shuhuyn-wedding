import React, { Fragment, useState } from 'react';
import { object, string, bool, func } from 'prop-types';
import { Link } from 'gatsby';

import WeddingImg from '@assets/images/wedding-logo.png';
import ScrollToDown from './ScrollToDown';
import { styWrapper, styHero, styBackground, styButtonWrapper } from './styles';

const DELAY_TIME = 1500;

function WelcomeSection({ onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };
  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <img src={WeddingImg} alt="wedding-quanghuy-thuhong" />
              <h4 className="sub-title">The wedding of</h4>
              <h1 className="title">Quang Huy <br/> Thu Hồng</h1>
              <h2 className="to-dearest-name">Dear Friends,</h2>
            </div>
          </div>
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
