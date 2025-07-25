import CommonBanner from "../components/common/Banner/CommonBanner";
// import NiceSelect from "../components/common/NiceSelectDropdown/NiceSelect";
import { AppRoutes, bannerData } from "../utils/constant";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <CommonBanner banner_data={bannerData.homePageData} />

      <div className="container margin_60_35">
        <div className="main_title_3">
          <h2>Top Categories</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          <Link to={AppRoutes.AllCategories}>View all</Link>
        </div>
        <div className="row justify-content-center">
          {[
            {
              img: "./assets/img/box_cat_home_1.jpg",
              title: "Clothing",
              results: 122,
              reviews: 356,
            },
            {
              img: "./assets/img/box_cat_home_2.jpg",
              title: "Hotels",
              results: 245,
              reviews: 123,
            },
            {
              img: "./assets/img/box_cat_home_3.jpg",
              title: "Restaurants",
              results: 95,
              reviews: 245,
            },
            {
              img: "./assets/img/box_cat_home_4.jpg",
              title: "Bars",
              results: 123,
              reviews: 187,
            },
            {
              img: "./assets/img/box_cat_home_5.jpg",
              title: "Electronics",
              results: 92,
              reviews: 221,
            },
            {
              img: "./assets/img/box_cat_home_6.jpg",
              title: "Beauty",
              results: 92,
              reviews: 323,
            },
          ].map((cat, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <Link to={AppRoutes.SearchResults} className="grid_item">
                <figure>
                  <img src={cat.img} alt={cat.title} />
                  <div className="info">
                    <small>{cat.results} Results</small>
                    <em>
                      <i className="icon-comment"></i> {cat.reviews} Reviews
                    </em>
                    <h3>{cat.title}</h3>
                  </div>
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg_color_1">
        <div className="container margin_60">
          <div className="main_title_3">
            <h2>Latest Reviews</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            <a href="reviews-page.html">View all</a>
          </div>

          <div id="reccomended" className="owl-carousel owl-theme">
            {[
              {
                img: "./assets/img/avatar1.jpg",
                name: "Jhon Doe",
                title: "Avesome Experience",
              },
              {
                img: "./assets/img/avatar2.jpg",
                name: "Marika",
                title: "Great products",
              },
              {
                img: "./assets/img/avatar3.jpg",
                name: "Lukas Lee",
                title: "Excellent Support",
              },
              {
                img: "./assets/img/avatar4.jpg",
                name: "Margaret",
                title: "Perfect",
              },
              {
                img: "./assets/img/avatar5.jpg",
                name: "Mark Twain",
                title: "Shipping Very Fast",
              },
            ].map((review, index) => (
              <div className="item" key={index}>
                <div className="review_listing">
                  <div className="clearfix">
                    <figure>
                      <img src={review.img} alt={review.name} />
                    </figure>
                    <span className="rating">
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <em>4.50/5.00</em>
                    </span>
                    <small>Shops</small>
                  </div>
                  <h3>
                    <strong>{review.name}</strong> reviewed{" "}
                    <a href="reviews-page.html">Fnac</a>
                  </h3>
                  <h4>"{review.title}"</h4>
                  <p>
                    Et nec tantas accusamus salutatus, sit commodo veritus te
                  </p>
                  <ul className="clearfix">
                    <li>
                      <small>Published: 26.08.2018</small>
                    </li>
                    <li>
                      <a href="reviews-page.html" className="btn_1 small">
                        Read review
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="call_section_3">
        <div className="wrapper">
          <div className="container clearfix">
            <div className="col-lg-5 col-md-7 float-end">
              <h3>Let's Help You</h3>
              <p>
                Vanno is a review platform open to everyone. Share your
                experiences to help others make better choices, and help
                companies up their game. Our mission is to bring people and
                companies together to create experiences for everyone.
              </p>
              <p>
                <a
                  className="btn_1 add_top_10 wow bounceIn"
                  href="pricing.html"
                  data-wow-delay="0.5s"
                >
                  Join Vanno Now!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
