import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/dinda-indra.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = `https://thekusuma.com/static/slide-6-4715e29302dbaa2ba21494c6258298d4.jpg`;
const META_DESCRIPTION = `Tình yêu là một chuyến đi không có điểm đến, nhưng điều quan trọng nhất là ta có người đồng hành cùng mình trên con đường đó. Nếu ta tìm được người đó, ta sẽ thấy tình yêu thật đẹp và ý nghĩa, và cảm thấy hạnh phúc nhất đời.`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Quang Huy ❤️ Thu Hồng Wedding</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="The Wedding of Quang Huy & Thu Hồng" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content="https://shuhuyn-wedding.site" />
        <meta property="og:site_name" content="The Wedding of Quang Huy & Thu Hồng" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content="The Wedding of Quang Huy & Thu Hồng" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content="https://shuhuyn-wedding.site" />
        <meta name="twitter:card" content="summary" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
