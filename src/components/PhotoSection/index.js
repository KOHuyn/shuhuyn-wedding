import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';

function PhotoSection() {
  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">#ShuHuyn</h2>
              <p className="sub-title">
                "Có một loại tình yêu khiến cho con người ta cảm thấy như đang được sống lần đầu tiên. Nó là một cảm giác tuyệt vời, khiến ta cảm thấy đầy đủ và tràn đầy năng lượng. Đó là loại tình yêu mà ta muốn dành cho người đặc biệt của mình, người ta yêu thương và trân trọng hơn bất cứ ai khác trên đời. Tình yêu là một cuộc hành trình đầy chông gai và thử thách, nhưng cũng là một cuộc phiêu lưu đáng nhớ và đáng trân trọng. Khi ta yêu một ai đó, ta đang dành tặng cho họ tình yêu, tình cảm và sự chăm sóc. Ta sẽ chia sẻ mọi thứ với họ, từ niềm vui đến nỗi buồn, từ những khoảnh khắc tuyệt vời nhất đến những thời điểm khó khăn nhất. Tình yêu là một chuyến đi không có điểm đến, nhưng điều quan trọng nhất là ta có người đồng hành cùng mình trên con đường đó. Nếu ta tìm được người đó, ta sẽ thấy tình yêu thật đẹp và ý nghĩa, và cảm thấy hạnh phúc nhất đời." <br />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery items={photos} showBullets={false} />;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
