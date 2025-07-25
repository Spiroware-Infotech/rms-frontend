import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('section-1');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <main>
      <section className="hero_single general">
        <div className="wrapper">
          <div className="container">
            <h1>Get in Touch with Vanno</h1>
            <p>Vanno helps grow your business using customer reviews</p>
          </div>
        </div>
      </section>

      <div className="bg_color_1">
        <div className="container margin_tabs">
          <div className="tabs">
            <nav>
              <ul>
                <li>
                  <button 
                    className={activeTab === 'section-1' ? 'active' : ''}
                    onClick={() => handleTabChange('section-1')}
                  >
                    <i className="pe-7s-help1"></i>Questions<em>Omnis justo gloriatur et sit</em>
                  </button>
                </li>
                <li>
                  <button 
                    className={activeTab === 'section-2' ? 'active' : ''}
                    onClick={() => handleTabChange('section-2')}
                  >
                    <i className="pe-7s-help2"></i>Support<em>Quo corrumpit euripidis</em>
                  </button>
                </li>
              </ul>
            </nav>
            <div className="content">
              {activeTab === 'section-1' && (
                <section id="section-1">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div id="message-contact"></div>
                      <form onSubmit={handleSubmit} id="contactform" autoComplete="off">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group required">
                              <input className="form-control" type="text" id="name_contact" name="name_contact" placeholder="Name" required />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group required">
                              <input className="form-control" type="text" id="lastname_contact" name="lastname_contact" placeholder="Last Name" required />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group required">
                              <input className="form-control" type="email" id="email_contact" name="email_contact" placeholder="Email" required />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group required">
                              <input className="form-control" type="text" id="phone_contact" name="phone_contact" placeholder="Telephone" required />
                            </div>
                          </div>
                        </div>
                        <div className="form-group required">
                          <textarea className="form-control" id="message_contact" name="message_contact" style={{height: '150px'}} placeholder="Message" required></textarea>
                        </div>
                        <div className="form-group required">
                          <input className="form-control" type="text" id="verify_contact" name="verify_contact" placeholder="Are you human? 3 + 1 =" required />
                        </div>
                        <div className="form-group add_top_30 text-center">
                          <button type="submit" className="btn_1 rounded" id="submit-contact">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              )}

              {activeTab === 'section-2' && (
                <section id="section-2">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <Link to="/help" className="btn_support">Please first visit our Support Center!</Link>
                      <div id="message-support"></div>
                      <form onSubmit={handleSubmit} id="support" autoComplete="off">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group required">
                              <input className="form-control" type="text" id="name_support" name="name_support" placeholder="Name" required />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group required">
                              <input className="form-control" type="email" id="email_support" name="email_support" placeholder="Email" required />
                            </div>
                          </div>
                        </div>
                        <div className="form-group required">
                          <textarea className="form-control" id="message_support" name="message_support" style={{height: '150px'}} placeholder="Support request" required></textarea>
                        </div>
                        <div className="form-group required">
                          <input className="form-control" type="text" id="verify_support" name="verify_support" placeholder="Are you human? 3 + 1 =" required />
                        </div>
                        <div className="form-group add_top_30 text-center">
                          <button type="submit" className="btn_1 rounded" id="submit-support">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container margin_60_35">
        <div className="row">
          <div className="col-md-6">
            <div className="box_faq">
              <i className="icon_info_alt"></i>
              <h4>Porro soleat pri ex, at has lorem accusamus?</h4>
              <p>Ut unum diceret eos, mel cu velit principes, ut quo inani dolorem mediocritatem. Mea in justo posidonium necessitatibus. Augue honestatis vis no, ius quot mazim forensibus in, per sale virtute legimus ne. Mea dicta facilisis eu.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box_faq">
              <i className="icon_info_alt"></i>
              <h4>Ut quo inani dolorem mediocritatem?</h4>
              <p>Ut unum diceret eos, mel cu velit principes, ut quo inani dolorem mediocritatem. Mea in justo posidonium necessitatibus. Augue honestatis vis no, ius quot mazim forensibus in, per sale virtute legimus ne. Mea dicta facilisis eu.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box_faq">
              <i className="icon_info_alt"></i>
              <h4>Per sale virtute legimus ne?</h4>
              <p>Ut unum diceret eos, mel cu velit principes, ut quo inani dolorem mediocritatem. Mea in justo posidonium necessitatibus. Augue honestatis vis no, ius quot mazim forensibus in, per sale virtute legimus ne. Mea dicta facilisis eu.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box_faq">
              <i className="icon_info_alt"></i>
              <h4>Mea in justo posidonium necessitatibus?</h4>
              <p>Ut unum diceret eos, mel cu velit principes, ut quo inani dolorem mediocritatem. Mea in justo posidonium necessitatibus. Augue honestatis vis no, ius quot mazim forensibus in, per sale virtute legimus ne. Mea dicta facilisis eu.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;