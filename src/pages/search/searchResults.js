import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../utils/constant";


const SearchResults = () => {
  return (
    <main >
		  <div id="results" className="is_stuck">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-4 col-10">
              <h1><strong>145</strong> result for "All categories"</h1>
            </div>
            <div className="col-xl-5 col-md-6 col-2">
              <a href="#0" className="search_mob btn_search_mobile"></a>
              <div className="row g-0 custom-search-input-2 inner">
                <div className="col-lg-7">
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="Search reviews for a company" />
                    <i className="icon_search"></i>
                  </div>
                </div>
                <div className="col-lg-4">
                  <select className="wide">
                    <option>All Categories</option>
                    <option>Shops</option>
                    <option>Hotels</option>
                    <option>Restaurants</option>
                    <option>Bars</option>
                    <option>Events</option>
                    <option>Fitness</option>
                  </select>
                </div>
                <div className="col-xl-1 col-lg-1">
                  <input type="submit" value="Search" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="search_mob_wp">
            <div className="custom-search-input-2">
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Search reviews..." />
                <i className="icon_search"></i>
              </div>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Where" />
                <i className="icon_pin_alt"></i>
              </div>
              <select className="wide">
                <option>All Categories</option>
                <option>Shops</option>
                <option>Hotels</option>
                <option>Restaurants</option>
                <option>Bars</option>
                <option>Events</option>
                <option>Fitness</option>
              </select>
              <input type="submit" value="Search" />
            </div>
          </div>
        </div>
      </div>

      <div className="container margin_60_35">
        <div className="row">
          <aside className="col-lg-3" id="sidebar">
            <div id="filters_col">
              <a data-bs-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt">Filters </a>
              <div className="collapse show" id="collapseFilters">
                <div className="filter_type date_filter">
                  <h6>Date</h6>
                  <ul>
                    <li>
                      <label className="container_radio">All
                        <input type="radio" id="all_2" name="filters_listing" value="all" checked data-filter="*" className="selected" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container_radio">Latest
                        <input type="radio" id="latest" name="filters_listing" value="latest" data-filter=".latest" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container_radio">Oldest
                        <input type="radio" id="oldest" name="filters_listing" value="oldest" data-filter=".oldest" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="filter_type">
                  <h6>Category</h6>
                  <ul>
                    <li>
                      <label className="container_check">Restaurants <small>43</small>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container_check">Shops <small>33</small>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container_check">Bars <small>12</small>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container_check">Events <small>44</small>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="filter_type">
                  <h6>Rating</h6>
                  <ul>
                    <li>
                      <label className="container_check">Superb 9+ <small>34</small>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container_check">Very Good 8+ <small>21</small>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container_check">Good 7+ <small>15</small>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container_check">Pleasant 6+ <small>34</small>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          <div className="col-lg-9">
            
              
                <div className="isotope-wrapper">
                  {/* Company Listings */}
                  <div className="company_listing isotope-item high">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="company_info">
                          <figure>
                            <Link to={AppRoutes.OrganizationPage}>
                              <img src="/assets/img/brands/1.png" alt="" />
                            </Link>
                          </figure>
                          <h3>American Coffee</h3>
                          <p>
                            Tale tollit vocent quo ut. Eu vix menandri persequeris
                            accommodare, nam ei virtute dissentiet. Nec prima indoctum
                            ei, vis eu justo dictas tamquam...
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="text-center float-lg-end">
                          <span className="rating">
                            <strong>Based on 265 reviews</strong>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star empty"></i>
                          </span>
                          <Link to={AppRoutes.OrganizationPage} className="btn_1 small">
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                    
                  <div className="company_listing isotope-item high">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="company_info">
                          <figure>
                            <Link to={AppRoutes.OrganizationPage}>
                              <img src="/assets/img/brands/2.png" alt="" />
                            </Link>
                          </figure>
                          <h3>Timberland</h3>
                          <p>
                            Tale tollit vocent quo ut. Eu vix menandri persequeris
                            accommodare, nam ei virtute dissentiet. Nec prima indoctum
                            ei, vis eu justo dictas tamquam...
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="text-center float-lg-end">
                          <span className="rating">
                            <strong>Based on 265 reviews</strong>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                          </span>
                          <Link to={AppRoutes.OrganizationPage} className="btn_1 small">
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                             
             </div>
            
            <p className="text-center"><a href="#0" className="btn_1 rounded add_top_15">Load more</a></p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchResults;
