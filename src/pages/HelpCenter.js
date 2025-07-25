import React from 'react';

const HelpCenter = () => {
  return (
    <main>
      <section className="hero_single general">
        <div className="wrapper">
          <div className="container">
            <i className="pe-7s-help2"></i>
            <h1>Vanno Help Center</h1>
            <form>
              <div id="custom-search-input">
                <div className="input-group">
                  <input type="text" className="search-query" placeholder="Ask a question..." />
                  <input type="submit" className="btn_search" value="Search" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* /hero_single */}
      
      <div className="container margin_60_35">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <a className="box_topic" href="#0">
              <span><i className="pe-7s-wallet"></i></span>
              <h3>Payments</h3>
              <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a className="box_topic" href="#0">
              <i className="pe-7s-users"></i>
              <h3>Account</h3>
              <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a className="box_topic" href="#0">
              <i className="pe-7s-help2"></i>
              <h3>General help</h3>
              <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a className="box_topic" href="#0">
              <i className="pe-7s-global"></i>
              <h3>International</h3>
              <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a className="box_topic" href="#0">
              <i className="pe-7s-note2"></i>
              <h3>Cancellation</h3>
              <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a className="box_topic" href="#0">
              <i className="pe-7s-comment"></i>
              <h3>Reviews</h3>
              <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.</p>
            </a>
          </div>
        </div>
        {/*/row*/}
      </div>
      {/* /container */}
      <div className="bg_color_1">
        <div className="container margin_60_35">
          <div className="main_title_3">
            <span><em></em></span>
            <h2>Popular articles</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <div className="list_articles add_bottom_30 clearfix">
            <ul>
              <li><a href="#0"><i className="icon_documents_alt"></i>Et dicit vidisse epicurei pri</a></li>
              <li><a href="#0"><i className="icon_documents_alt"></i>Ad sit virtute rationibus efficiantur</a></li>
              <li><a href="#0"><i className="icon_documents_alt"></i>Partem vocibus omittam pri ne</a></li>
              <li><a href="#0"><i className="icon_documents_alt"></i>Case debet appareat duo cu</a></li>
              <li><a href="#0"><i className="icon_documents_alt"></i>Impedit torquatos quo in</a></li>
              <li><a href="#0"><i className="icon_documents_alt"></i>Nec omnis alienum no</a></li>
              <li><a href="#0"><i className="icon_documents_alt"></i>Quo eu soleat facilisi menandri</a></li>
              <li><a href="#0"><i className="icon_documents_alt"></i>Et dicit vidisse epicurei pri</a></li>
            </ul>
          </div>
          {/* /list_articles */}
        </div>
        {/* /container */}
      </div>
      {/* /bg_color_1 */}
    </main>
  );
};

export default HelpCenter;