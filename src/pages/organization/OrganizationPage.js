import React, { useEffect, useState } from 'react';

import { getToken, getTokenType } from '../../utils/helper/helper';
import { organizationDashboardAPI } from '../../utils/constant';


function ReviewsPage() {
   const [orgData, setOrgData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchDashboardData = async () => {
        const token = getToken();
        const tokenType = getTokenType();
  
        if (!token || !tokenType) {
          setError('No token found. Please log in again.');
          setLoading(false);
          return;
        }
  
        try {
          const response = await fetch(`${organizationDashboardAPI}`, {
            method: 'GET',
            headers: {
              'Authorization': `${tokenType} ${token}`, // "Bearer <token>"
              'Content-Type': 'application/json'
            }
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch dashboard data');
          }
  
          const result = await response.json();
          console.log('dashboard data',result);
          
          setOrgData(result.data); 
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchDashboardData();
    }, []);
  
  return (
   <>
        <div className="reviews_summary">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <figure>
                    <img src="/assets/img/logo-company.png" alt="" />
                  </figure>
                  <small>Shop</small>
                  {/* <h1>Good Electronics</h1> */}
                    <h1> {orgData?.firstname} {orgData?.lastname}</h1>
                  <span className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star empty"></i>
                    <em>4.50/5.00 - based on 234 reviews</em>
                  </span>
                </div>
                <div className="col-lg-4 review_detail">
                  {/* Progress bars */}
                  {[{w:90, s:5},{w:95, s:4},{w:60, s:3},{w:20, s:2},{w:0, s:1}].map((bar, idx) => (
                    <div className="row" key={bar.s}>
                      <div className="col-lg-9 col-9">
                        <div className={`progress${idx === 4 ? " last" : ""}`}>
                          <div className="progress-bar" role="progressbar" style={{width: `${bar.w}%`}} aria-valuenow={bar.w} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-3 text-end"><strong>{bar.s} stars</strong></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /reviews_summary */}

        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-8">
              {/* Review Cards */}
              {[1,2,3,4].map((n, i) => (
                <div className="review_card" key={i}>
                  <div className="row">
                    <div className="col-md-2 user_info">
                      <figure><img src={`/assets/img/avatar${n}.jpg`} alt="" /></figure>
                      <h5>{n % 2 === 0 ? "Lukas" : "Marika"}</h5>
                    </div>
                    <div className="col-md-10 review_content">
                      <div className="clearfix add_bottom_15">
                        <span className="rating">
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className={`icon_star${n % 2 === 0 ? "" : " empty"}`}></i>
                          <em>{n % 2 === 0 ? "5.00/5.00" : "4.50/5.00"}</em>
                        </span>
                        <em>Published 54 minutes ago</em>
                      </div>
                      <h4>"Awesome Experience"</h4>
                      <p>
                        Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.
                      </p>
                      <ul>
                        <li><a href="#0"><i className="icon_like_alt"></i><span>Useful</span></a></li>
                        <li><a href="#0"><i className="icon_dislike_alt"></i><span>Not useful</span></a></li>
                        <li>
                          <span>Share</span>
                          <a href="#0"><i className="ti-facebook"></i></a>
                          <a href="#0"><i className="ti-twitter-alt"></i></a>
                          <a href="#0"><i className="ti-google"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Reply for some reviews */}
                  {(i === 0 || i === 2) && (
                    <div className="row reply">
                      <div className="col-md-2 user_info">
                        <figure><img src="/assets/img/avatar.jpg" alt="" /></figure>
                      </div>
                      <div className="col-md-10">
                        <div className="review_content">
                          <strong>Reply from Good Electronics</strong>
                          <em>Published 3 minutes ago</em>
                          <p>
                            <br />Hi Monika,<br /><br />
                            Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.
                            <br /><br />Thanks
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {/* Pagination */}
              <div className="pagination__wrapper add_bottom_15">
                <ul className="pagination">
                  <li><a href="#0" className="prev" title="previous page">&#10094;</a></li>
                  <li><a href="#0" className="active">1</a></li>
                  <li><a href="#0">2</a></li>
                  <li><a href="#0">3</a></li>
                  <li><a href="#0">4</a></li>
                  <li><a href="#0" className="next" title="next page">&#10095;</a></li>
                </ul>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="box_general company_info">
                <h3>Good Electronics</h3>
                <p>Illud scripserit mei an, sea te sonet partem contentiones. Eu quo corrumpit euripidis, enim sadipscing eos an. Mucius doctus constituto pri at, ne cetero postulant pro. At vix utinam corpora, ea oblique moderatius usu. Vix id viris consul honestatis, an constituto deterruisset consectetuer pro.</p>
                <p><strong>Address</strong><br />97845 Baker st. 567<br />Los Angeles - US</p>
                <p><strong>Website</strong><br /><a href="#0">www.goodelectronics.com</a></p>
                <p><strong>Email</strong><br /><a href="#0">info@goodelectronics.com</a></p>
                <p><strong>Telephone</strong><br />+54 423 565624</p>
                <p className="follow_company">
                  <strong>Follow us</strong><br />
                  <a href="#0"><i className="social_facebook_circle"></i></a>
                  <a href="#0"><i className="social_twitter_circle"></i></a>
                  <a href="#0"><i className="social_googleplus_circle"></i></a>
                  <a href="#0"><i className="social_instagram_circle"></i></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        </>
  );
}

export default ReviewsPage;