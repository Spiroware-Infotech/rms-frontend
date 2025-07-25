import React, { useState } from 'react';

import { getToken, getTokenType } from '../../../utils/helper/helper';

const ReviewForm = () => {
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get access token from localStorage
    const token = getToken();
    const tokenType = getTokenType();
    if (!token) {
      setMessage('You must be logged in to submit a review.');
      return;
    }

    const reviewData = {
      userId: 34, // Replace with dynamic userId if needed
      organizationId: 33, // Replace with dynamic orgId if needed
      subject,
      comment,
      rating:5,
      tagLines: ['fast', 'reliable'],
      imagePaths: [],
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://spiroware.com/reviewssystem/api/v1/user/submitReview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${tokenType} ${token}`,
        },
        body: JSON.stringify(reviewData),
      });

      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      setMessage('Error submitting review.');
    }
  }

  return (
    <main className="margin_main_container">
      <div className="container margin_60_35">
        <div className="row">
          <div className="col-lg-8">
            <div className="box_general write_review">
              <h1>Write a review of Good Electronics</h1>
              <form onSubmit={handleSubmit}>
                <div className="rating_submit">
                  <div className="form-group">
                    <label className="d-block">Overall rating</label>
                    <span className="rating">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <React.Fragment key={star}>
                          <input
                            type="radio"
                            className="rating-input"
                            id={`${star}_star`}
                            name="rating-input"
                            value={`${star} Stars`}
                            checked={rating === star}
                            onChange={() => setRating(star)}
                          />
                          <label
                            htmlFor={`${star}_star`}
                            className="rating-star"
                          ></label>
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                </div>
                {/* /rating_submit */}
                <div className="form-group">
                  <label>Title of your review</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="If you could say it in one sentence, what would you say?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your review</label>
                  <textarea
                    className="form-control"
                    style={{ height: '180px' }}
                    placeholder="Write your review to help others learn about this online business"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Add your photo (optional)</label>
                  <div className="fileupload">
                    <input type="file" name="fileupload" accept="image/*" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="checkboxes float-start add_bottom_15 add_top_15">
                    <label className="container_check">
                      Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his.
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        required
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn_1">
                  Submit review
                </button>
              </form>
            </div>
          </div>
          {/* /col */}
          <div className="col-lg-4">
            <div className="latest_review">
              <h4>
                Recent reviews
                <br />
                for Good Electronics
              </h4>
              <div className="review_listing">
                <div className="clearfix add_bottom_10">
                  <figure>
                    <img src="img/avatar3.jpg" alt="" />
                  </figure>
                  <span className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star empty"></i>
                    <em>4.50/5.00</em>
                  </span>
                  <small>Shops</small>
                </div>
                <h3>
                  <strong>Jhon Doe</strong>
                </h3>
                <h4>"Awesome Experience"</h4>
                <p>Et nec tantas accusamus salutatus, sit commodo veritus te</p>
                <ul className="clearfix">
                  <li>
                    <small>26.08.2018</small>
                  </li>
                  <li>
                    <a href="reviews-page.html" className="btn_1 small">
                      Read review
                    </a>
                  </li>
                </ul>
              </div>
              {/* /review_listing */}
              <div className="review_listing">
                <div className="clearfix add_bottom_10">
                  <figure>
                    <img src="img/avatar4.jpg" alt="" />
                  </figure>
                  <span className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star empty"></i>
                    <em>4.50/5.00</em>
                  </span>
                  <small>Shops</small>
                </div>
                <h3>
                  <strong>Jhon Doe</strong>
                </h3>
                <h4>"Awesome Experience"</h4>
                <p>Et nec tantas accusamus salutatus, sit commodo veritus te</p>
                <ul className="clearfix">
                  <li>
                    <small>26.08.2018</small>
                  </li>
                  <li>
                    <a href="reviews-page.html" className="btn_1 small">
                      Read review
                    </a>
                  </li>
                </ul>
              </div>
              {/* /review_listing */}
            </div>
            {/* /latest_review */}
          </div>
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </main>
  );
};

export default ReviewForm;