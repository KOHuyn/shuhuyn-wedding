import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding">Lễ kết hôn và tiệc cưới</h2>
            </div>
          </div>
          <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Nhà gái"
                  time="Sáng thứ 7 vào lúc 11 giờ"
                  date="Thứ 7, ngày 20 tháng 5"
                  description="Trung tâm tiệc cưới Giang Thanh <br/>Số 1 Thiên Lôi, Đằng Giang, Ngô Quyền, TP Hải Phòng"
                />
                <WeddingInfoBox
                  title="Nhà trai"
                  time="Chiều Chủ nhật vào lúc 15:00"
                  date="Chủ nhật, ngày 28 tháng 5"
                  description="Tư gia nhà trai <br/>Trại Lớn, Tam Hồng, Yên Lạc, Vĩnh Phúc"
                />
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
