import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
    <div class="ayur-bread-section">
        <div class="ayur-breadcrumb-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="ayur-bread-content">
                            <h2>Profile</h2>
                            <div class="ayur-bread-list">
                                <span>
                                    <Link to="/">Home</Link>
                                </span>
                                <span class="ayur-active-page">Profile</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="ayur-bgcover ayur-profile-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="ayur-profile-section">
                        <div class="ayur-profile-head">
                            <h3>Profile Information</h3>
                        </div>
                        <div class="ayur-profile-details">
                            <div class="ayur-pro-img">
                                <img src="/src/assets/images/profile-img.png" alt="avatar" width="100px" height="100px" />
                                <div class="ayur-pro-imgtext">
                                    <h2>Profile Name: <span>John Doe</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Amet minim mollit non deserunt ullamco est sit Velit official</p>
                                </div>
                            </div>
                            <div class="ayur-pro-text-wrap">
                                <div class="ayur-pro-text">
                                    <h4>Mobile Number :</h4>
                                    <p>+91 4598763241</p>
                                </div>
                                <div class="ayur-pro-text">
                                    <h4>Email :</h4>
                                    <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="c4a5bdb1b6b2a1a0a584a3a9a5ada8eaa7aba9">[email&#160;protected]</a></p>
                                </div>
                                <div class="ayur-pro-text">
                                    <h4>Permanent Address :</h4>
                                    <p>California, America (USA)</p>
                                </div>
                                <div class="ayur-pro-text">
                                    <h4>Shipping Address :</h4>
                                    <p>025 CAL California, America (USA)</p>
                                </div>
                            </div>
                            <div class="ayur-pro-btn">
                                <button type="button" class="ayur-btn">Edit Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Profile;
