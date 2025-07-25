import React, { useState } from "react";
import { AppRoutes, bannerData } from "../../../utils/constant";
import NiceSelect from "../NiceSelectDropdown/NiceSelect";
import { useNavigate } from "react-router-dom";

const CommonBanner = ({banner_data}) => {
    console.log(banner_data,banner_data.placeholderText);
    
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const handleSearchClick=()=>{
    navigate(AppRoutes.SearchResults);
  }
  return (
    <>
      <section className={`hero_single ${banner_data.className}`}>
        <div className="wrapper">
          <div className="container">
            <h3>{banner_data.heading}</h3>
            <p>{banner_data.subheading}</p>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row g-0 custom-search-input-2">
                    <div className="col-lg-7">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder={banner_data.inputPlaceholderText}
                        />
                        <i className="icon_search"></i>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      {/* <select className="wide">
                        <option>All Categories</option>
                        <option>Shops</option>
                        <option>Hotels</option>
                        <option>Restaurants</option>
                        <option>Bars</option>
                        <option>Events</option>
                        <option>Fitness</option>
                      </select> */}
                      <NiceSelect
                        options={banner_data.dropdownOptions}
                        value={selected}
                        onChange={setSelected}
                      />
                    </div>
                    <div className="col-lg-2">
                      <input type="submit" value="Search" onClick={handleSearchClick}/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonBanner;
