import React, { useEffect, useState } from "react";
import CommonBanner from "../../components/common/Banner/CommonBanner";
import { AppRoutes, allcategories } from "../../utils/constant";

import {
  bannerData,
  vannoCompaniesCategoriesData,
} from "../../utils/constant";
import { Link } from "react-router-dom";
import axios from "axios";

const AllCategories = () => {
  const imagesPath = [
    "/assets/img/education.png",
    "/assets/img/coaching.png",
    "/assets/img/hospital.png",
    "/assets/img/realestate.png",
    "/assets/img/doctors.png",
    "/assets/img/icon_home_3.svg",
    "/assets/img/icon_home_2.svg",
    "/assets/img/delivery.png",
    "/assets/img/electrician.png",
    "/assets/img/icon_home_5.svg",
  ]

  const [categoriesData,setCategoriesData] = useState([]);
  const [isMouseHover, setIsMouseHoverActive] = useState(null);
  const handleMouseHover = (id) => {
    setIsMouseHoverActive(id);
  };


  const handleCategoriesData = async () =>{
    try{
      const response = await axios.get(`${allcategories}`);
      if(response.data.success){
        const allCategories = response.data.data;
        setCategoriesData(allCategories);
      }


    }catch(err){
      console.error("Error fetching categories data:",err);
    }
  }
  useEffect(()=>{
    handleCategoriesData();
  },[]);

  return (
    <>
      <CommonBanner banner_data={bannerData.allCategoriesData} />
      <div className="container margin_60_35">
        <div className="main_title_2">
          <h1>Top Categories</h1>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        </div>
        <div className="row justify-content-center">
          {categoriesData.map((item, index) => {
            return (
              <>
                <div className="col-lg-3 col-6" key={item?.id}>
                  <Link
                    to={AppRoutes.SearchResults}
                    className="box_cat_home"
                    onMouseEnter={() => handleMouseHover(item.id)}
                  >
                    <img
                      src={imagesPath[index]}
                      alt=""
                      width={65}
                      height={65}
                      className={isMouseHover === item?.id ? "rotate-x" : ""}
                    />
                    <h3>{item?.name}</h3>
                    <ul className="clearfix">
                      <li>
                        <strong>{item?.searchCount}</strong> Results
                      </li>
                      <li>
                        <strong>{item?.commentsCount}</strong>
                        <i className="icon-comment"></i>
                      </li>
                    </ul>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        </div>
        
    
        <div className="call_section_2">
		    <div className="wrapper">
                <div className="container">
                    <h3>Get started now with Vanno...improve your business.</h3>
                    <a className="btn_1 medium">Join Vanno Now!</a>
                </div>
			</div>
		</div>
    </>
  );
};

export default AllCategories;
