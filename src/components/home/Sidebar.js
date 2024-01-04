import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="logo-container">
      <div className="logo">
        <a href="#">
          <img src="images/Spotify_Logo_CMYK_Green.png" alt="Logo" className="spotifylogo" />
        </a>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href className="home">
              <span className="fa-solid fa-house fa-xl" style={{color: '#ffffff'}} />
              <span className="hometext">Home</span>
            </a>
          </li>
          <li>
            <a href className="home">
              <span className="fa-solid fa-search fa-xl search"  />
              <span className="searchtext">Search</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="library-container">
        <div className="library">
          <ul>
            <li>
              <a href className="home">
                <span className="fa-solid fa-book fa-xl lib" />
                <span className="libtext">Your Library</span>
              </a>
              <button className="plusbtn"><span className="fa-thin fa-plus fa-2xl" style={{color: '#666666'}} /></button>
            </li>
          </ul>
          <div className="scroll-text">
            <div className="scroll-first-container">
              <p className="scroll-header">Create your first playlist</p>
              <p className="s-t">Its easy, we'll help you</p>
              <button className="btn-createplaylist">Create Playlist</button>
            </div>
            <div className="scroll-second-container">
              <p className="scroll-header-two">Let's find some podcasts to follow</p>
              <p className="s-t-2">We'll keep you updated on new episodes</p>
              <button className="btn-createpodcast">Browse podcasts</button>
            </div>
          </div>
          <div className="list-items">
            <ul>
              <li className="lists">
                <span>Legal</span>
                <span>Privacy Center</span>
                <span>Privacy Policy</span>
              </li>
              <li className="lists">
                <span>Cookies</span>
                <span>About Ads</span>
                <span>Accessibility</span>
              </li>
              <li className="lists">
                Notice at Collection
              </li>
              <li className="lists">
                <span>Your Privacy Choices</span>
                <span><img src="images/privacy.png" alt="" width="25px" style={{marginTop: '6px'}} /></span>
              </li>
              <li className="lists">
                Cookies
              </li>
              <li className="lists">
                <button className="eng">
                  <span className="fa-light fa-globe" style={{color: '#707070'}} />
                  <span className="eng-text">English</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}


export default Sidebar