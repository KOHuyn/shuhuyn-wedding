import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-dinda-2.jpg';
import Groom from '@assets/images/p-indra.jpg';

import { styWrapper } from './styles';

function HelloSection() {

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Hello my friend</h2>
              <p className="info">
              Chúng mình rất hạnh phúc khi được thông báo tin vui, trao tấm thiệp hồng đến những người thân yêu.
              Đây là trang web ghi lại câu chuyện tình yêu của chúng mình.
              Cảm ơn mọi người đã ghé thăm và chúc mọi người sẽ luôn tìm thấy niềm vui trong cuộc sống!
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Thu Hồng</h3>
                <p className="parent-name parent-name__top">
                Con gái bố Thắng <br />& mẹ Thắm
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Quang Huy</h3>
                <p className="parent-name">
                Con trai mẹ Ánh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
