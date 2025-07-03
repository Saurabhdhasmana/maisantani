import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetail = () => {
  return (
    <div>
      <div class="ayur-bread-section">
        <div class="ayur-breadcrumb-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="ayur-bread-content">
                  <h2>Blog single</h2>
                  <div class="ayur-bread-list">
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span class="">
                      <Link to="/blog">Blog</Link>
                    </span>
                    <span class="ayur-active-page">Blog-single</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ayur-bgcover ayur-blogsin-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12">
              <div class="ayur-blogsingle-sec">
                <div class="ayur-blogsingle-imgsec">
                  <div class="ayur-blog-img">
                    <img src="/src/assets/images/blog-single.png" alt="image" />
                  </div>
                  <div class="ayur_blosing-postdata">
                    <div class="ayur-blogsingle-title">
                      <h3>
                        <a href="blog-single.html">
                          Duis aute irure dolor in velit voluptate esse
                        </a>
                      </h3>
                    </div>
                    <div class="ayur-post-data">
                      <span class="post-like">
                        <a href="javascript:void(0)">
                          <img
                            src="/src/assets/images/user-svg.svg"
                            alt="icon"
                          />
                          <span>Post by - Leonard</span>
                        </a>
                      </span>
                      <span class="post-like">
                        <a href="javascript:void(0)">
                          <img
                            src="/src/assets/images/calender.svg"
                            alt="icon"
                          />
                          24 March 2024
                        </a>
                      </span>
                    </div>
                    <p>
                      Sed orci dolor, pulvinar nec luctus a, malesuada ac nisl.
                      Aliquam eleifend et dui et suscipit. Nam semper accumsan
                      ante, ac dapibus urna dapibus et. Aenean lobortis viverra
                      nibh in porttitor. Aenean vel eros posuere, laoreet ligula
                      et, lobortis tellus. Morbi quis nunc in risus ornare
                      egestas et ac libero. Donec egestas nunc massa, ac euismod
                      odio posuere sit amet. Ut interdum nisi lectus, eget
                      aliquet quam sagittis et. Nam volutpat convallis sem vel
                      lobortis. Nullam consectetur dolor urna, eget ultricies
                      enim eleifend sit amet. Sed orci dolor, pulvinar nec
                      luctus a, malesuada ac nisl.
                    </p>
                    <div class="ayur-blockquote">
                      <blockquote class="blockquote">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.{' '}
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div class="ayur-blogsingle-postsec">
                  <div class="ayur-blog-post">
                    <h3 class="post-heading">Posted by Admin</h3>
                    <div class="ayur-post-div">
                      <div class="review-author">
                        <img
                          src="/src/assets/images/admin.jpg"
                          alt=""
                          class="img-responsive"
                        />
                      </div>
                      <div class="ayur-blog-post-para">
                        <h3>Marion Alvarado</h3>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae.
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 class="post-heading">comments</h3>
                  <div class="comment">
                    <div class="comment-author">
                      <img
                        src="/src/assets/images/comment-author-1.jpg"
                        alt=""
                        class="img-responsive"
                      />
                    </div>
                    <div class="comment-text">
                      <div>
                        <span class="comment-author-name">Jhini Snow</span>
                        <span class="comment-date">15.04.2024</span>
                      </div>
                      <p>
                        Happiness is the universal feeling we all aspire to
                        experience more of, yet, we can be an angry, moody,
                        depressed bunch, can’t we, Many desktop publishing
                        packages and web page.
                      </p>
                      <a href="javascriptvoid:;" class="comment-reply">
                        Reply
                      </a>
                    </div>
                  </div>
                  <div class="comment comment--replied">
                    <div class="comment-author">
                      <img
                        src="/src/assets/images/comment-author-2.jpg"
                        alt=""
                        class="img-responsive"
                      />
                    </div>
                    <div class="comment-text">
                      <div>
                        <span class="comment-author-name">Steffi Smith</span>
                        <span class="comment-date">23.05.2024</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas consectetur passage of Lorem Ipsum vel quam sit
                        amet luctus. Aliquam semper interdum eros.
                      </p>
                      <a href="javascriptvoid:;" class="comment-reply">
                        Reply
                      </a>
                    </div>
                  </div>
                  <div class="comment ">
                    <div class="comment-author">
                      <img
                        src="/src/assets/images/comment-author-1.jpg"
                        alt=""
                        class="img-responsive"
                      />
                    </div>
                    <div class="comment-text">
                      <div>
                        <span class="comment-author-name">Jhini Snow</span>
                        <span class="comment-date">25.07.2024</span>
                      </div>
                      <p>
                        Curabitur venenatis et ante id consequat. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Suspendisse
                        non blandit dolor.
                      </p>
                      <a href="javascriptvoid:;" class="comment-reply">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                <div class="ayur-comments-form">
                  <h3>Leave A Comments</h3>
                  <form method="" class="ayur-leave-form">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="ayur-form-input">
                          <input
                            type="text"
                            class="form-control require"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="ayur-form-input">
                          <input
                            type="text"
                            class="form-control require"
                            name="email"
                            placeholder="Enter Your Email"
                            data-valid="email"
                            data-error="Email should be valid."
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <div class="ayur-form-input">
                          <textarea
                            name="your-message"
                            cols="3"
                            rows="8"
                            class="form-control require"
                            placeholder="Enter Your Message..."
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <button
                          type="button"
                          class="ayur-btn ayur-con-btn submitForm"
                        >
                          Submit
                        </button>
                        <div class="response"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="ayur-shop-sidebar">
                <div class="ayur-widget ayur-shop-search">
                  <div class="ayur-form-input">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search Here..."
                    />
                  </div>
                  <button class="ayur-btn">search</button>
                </div>
                <div class="ayur-widget ayur-blog-recent">
                  <h3>Recent Blog</h3>
                  <div class="ayur-blog-box ayur-blog-inline">
                    <div class="ayur-blog-img">
                      <img src="/src/assets/images/blog-3.png" alt="image" />
                    </div>
                    <div class="ayur-blog-text">
                      <div class="ayur-blog-date">
                        <h4>Ayurveda Medicine</h4>
                      </div>
                      <h3>
                        <a href="blog-single.html">
                          Duis aute irure dolor in velit voluptate esse
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div class="ayur-blog-box ayur-blog-inline">
                    <div class="ayur-blog-img">
                      <img src="/src/assets/images/blog-4.png" alt="image" />
                    </div>
                    <div class="ayur-blog-text">
                      <div class="ayur-blog-date">
                        <h4>Ayurveda Medicine</h4>
                      </div>
                      <h3>
                        <a href="blog-single.html">
                          Duis aute irure dolor in velit voluptate esse
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div class="ayur-blog-box ayur-blog-inline">
                    <div class="ayur-blog-img">
                      <img src="/src/assets/images/blog-5.png" alt="image" />
                    </div>
                    <div class="ayur-blog-text">
                      <div class="ayur-blog-date">
                        <h4>Ayurveda Medicine</h4>
                      </div>
                      <h3>
                        <a href="blog-single.html">
                          Duis aute irure dolor in velit voluptate esse
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ayur-widget ayur-shop-tag">
                <h3>Tag Clouds</h3>
                <ul>
                  <li>
                    <a href="javascript:void(0)">Products</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Ayurveda</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Pure</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Trending</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Herbal</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Healthy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Products</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Ayurveda</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ayur-bgshape ayur-trenpro-bgshape ayur-blog-single-bgshape">
        <img src="/src/assets/images/bg-shape3.png" alt="img" />
        <img src="/src/assets/images/bg-leaf2.png" alt="img" />
      </div>
    </div>
  );
};

export default BlogDetail;
