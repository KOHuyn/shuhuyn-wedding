import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click để xem bản đồ trên Google Maps                  "
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                </a>{' '}
                <br />
                Trại Lớn, Tam Hồng, Yên Lạc, Vĩnh Phúc
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.2946776048146!2d105.57271138440396!3d21.2229144147504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134f1e6055378d1%3A0x9bd8f3718c6de6e5!2zWMaw4bufbmcgUXXhuqNuZyBDw6FvIFRow6BuaCDEkOG6oXQ!5e0!3m2!1svi!2s!4v1684833202076!5m2!1svi!2s"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Quang Huy & Thu Hồng Wedding Party"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
