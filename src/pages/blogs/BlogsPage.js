import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../utils/constant";
import { allBlogsApi } from "../../utils/constant";
import axios from "axios";

const BlogsPage = () => {

  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    getBlogs();
  }, []);


  const handleBlogClick = (blogId) => {
    navigate(AppRoutes.BlogPost(`${blogId}`))
  }

  const getBlogs = async (e) => {
    try {
      const res = await axios.get(`${allBlogsApi}`);
      // console.log("Response from API:", res);
      if (res.data.success) {
        // console.log("Blogs fetched successfully:", res);
        const allBlogs = res.data.data;
        // console.log(allBlogs);
        setBlogs(allBlogs)
      } else {
        console.error("Failed to fetch blogs:", res.message);
      }
    } catch (error) {
      console.error("Error in getting blogs:", error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);


  return (
    <main>
      <section className="hero_single general">
        <div className="wrapper">
          <div className="container">
            <h1>Blogs</h1>
            <p>Review System helps grow your business using customer reviews</p>
          </div>
        </div>
      </section>
      <div className="container margin_60_35">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              {blogs.map((blogItem) => {
                console.log(blogItem.id);
                const publishedDate = blogItem.publishedAt
                  ? new Date(blogItem.publishedAt).toDateString()
                  : "Unknown Date";
                const authorName = blogItem.author
                  ? `${blogItem.author.firstname} ${blogItem.author.lastname}`
                  : "Unknown Author";
                const commentCount = blogItem.comments ? blogItem.comments.length : 0;
                return (
                  <div className="col-md-6" key={blogItem.id} onClick={() => handleBlogClick(blogItem.id)} style={{ cursor: "pointer" }}>
                    <article className="blog">
                      <figure>
                        <img
                          src={"/assets/img/blog-6.jpg"}
                          alt={blogItem.title}
                        />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </figure>
                      <div className="post_info">
                        <small>
                          {publishedDate} - {authorName}
                        </small>
                        <h2><Link to={AppRoutes.BlogPost(`${blogItem.id}`)}>{blogItem.title}</Link></h2>
                        <p>{blogItem.excerpt}</p>
                        <ul>
                          <li>
                            <div className="thumb">
                              <img src="/assets/img/avatar.jpg" alt={authorName} />
                            </div> {authorName}
                          </li>
                          <li><i className="ti-comment"></i>{commentCount}</li>
                        </ul>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>


            {/* Pagination */}
            <div className="pagination__wrapper add_bottom_30">
              <ul className="pagination">
                <li><a href="#0" className="prev" title="previous page">❮</a></li>
                <li>
                  <a href="#0" className="active">1</a>
                </li>
                <li>
                  <a href="#0">2</a>
                </li>
                <li>
                  <a href="#0">3</a>
                </li>
                <li>
                  <a href="#0">4</a>
                </li>
                <li><a href="#0" className="next" title="next page">❯</a></li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="col-lg-3">
            <div className="widget search_blog">
              <div className="form-group">
                <input type="text" name="search" id="search" className="form-control" placeholder="Search.." />
                <span><input type="submit" value="Search" /></span>
              </div>
            </div>

            <div className="widget">
              <div className="widget-title">
                <h4>Latest Post</h4>
              </div>
              <ul className="comments-list">
                <li>
                  <div className="alignleft">
                    <a href="#0"><img src="/assets/img/blog-5.jpg" alt="" /></a>
                  </div>
                  <small>Category - 11.08.2016</small>
                  <h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
                </li>
                <li>
                  <div className="alignleft">
                    <a href="#0"><img src="/assets/img/blog-6.jpg" alt="" /></a>
                  </div>
                  <small>Category - 11.08.2016</small>
                  <h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
                </li>
                <li>
                  <div className="alignleft">
                    <a href="#0"><img src="/assets/img/blog-4.jpg" alt="" /></a>
                  </div>
                  <small>Category - 11.08.2016</small>
                  <h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
                </li>
              </ul>
            </div>

            <div className="widget">
              <div className="widget-title">
                <h4>Categories</h4>
              </div>
              <ul className="cats">
                <li><a href="#">Food <span>(12)</span></a></li>
                <li><a href="#">Places to visit <span>(21)</span></a></li>
                <li><a href="#">New Places <span>(44)</span></a></li>
                <li><a href="#">Suggestions and guides <span>(31)</span></a></li>
              </ul>
            </div>

            <div className="widget">
              <div className="widget-title">
                <h4>Popular Tags</h4>
              </div>
              <div className="tags">
                <a href="#">Food</a>
                <a href="#">Bars</a>
                <a href="#">Cooktails</a>
                <a href="#">Shops</a>
                <a href="#">Best Offers</a>
                <a href="#">Transports</a>
                <a href="#">Restaurants</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default BlogsPage;