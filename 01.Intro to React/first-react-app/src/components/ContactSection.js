export default function ContactSection() {
  return (
    <div className="contact_section layout_padding">
      <div className="container">
        <h1 className="contact_taital">Contact Us</h1>
        <div className="contact_section_2">
          <div className="row">
            <div className="col-md-6">
              <div className="mail_section">
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Name"
                  name="text"
                />
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Email"
                  name="text"
                />
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Phone Number"
                  name="text"
                />
                <textarea
                  className="massage-bt"
                  placeholder="Massage"
                  rows="5"
                  id="comment"
                  name="Massage"
                ></textarea>
                <div className="send_bt">
                  <a href="#">SEND</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_text">
                <img src="images/call-icon-1.png" />
                <span className="call_text_left">+01 9876543210</span>
                <div className="map_text">
                  <img src="images/mail-icon-1.png" />
                  <span className="call_text_left">democheck@gmail.com</span>
                  <div className="map_text_1">
                    <img src="images/map-icon-1.png" />
                    <span className="call_text_left">
                      t is a long established fact that a reader will be
                      distracted by the readable conten
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
