import React from 'react'
import './Maincontainer.css'

function Playlists() {
  return (
    <div class="main-container">
        <div class="topbar">
            <div class="prev-next-buttons">
              <button type="button" class="fa fas fa-chevron-left"></button>
              <button type="button" class="fa fas fa-chevron-right"></button>
            </div>
      
            <div class="navbar">
              <ul>
                
                <li>
                  <a href="./signup.html">Sign Up</a>
                </li>
              </ul>
              <a href="./login.html"><button type="button">Log In</button></a>
            </div>
        </div>
    <div class="spotify-playlists">
      
      <div class="show-all">
        <h2>Spotify Playlists</h2>
        <span >
          <a href="showall.html" class="showall-link">Show all</a>
        </span>
      </div>
      

      <div class="list">
        <div class="item">
          <img src="images/play-image 1 (3).png" />
          <div class="play">
            <a href="playlists.html"><span class="fa fa-play" ></span></a>
          </div>
          <h4>Lovely</h4>
          <p>Billie and Khalid's haunting collaboration</p>
        </div>

        <div class="item">
          <img src="images/play-image 1 (2).png"
           />
          <div class="play">
            <a href="./happierthanever.html"><span class="fa fa-play"></span></a>
          </div>
          <h4>Happier Than Ever</h4>
          <p>Emotional journey, hauntingly honest lyrics</p>
        </div>

        <div class="item">
          <img src="images/play-image 1 (1).png" />
          <div class="play">
            <a href="./badguy.html"><span class="fa fa-play"></span></a>
          </div>
          <h4>Bad Guy</h4>
          <p>Hypnotic beats, rebellious charm.</p>
        </div>

        <div class="item">
          <img src="images/play-image (3).png" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>No Time To Die</h4>
          <p>Dark, cinematic farewell ballad</p>
        </div>

        <div class="item">
          <img src="images/play-image (2).png" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Without Me</h4>
          <p>Emotional breakup anthem</p>
        </div>

      </div>
    </div>

    <div class="spotify-playlists">
      <h2>Focus</h2>
      <div class="list">
        <div class="item">
          <img src="images/play-image (1).png" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Harleys In Hawaii</h4>
          <p>Tropical romance, Harley dreamscape</p>
        </div>

        <div class="item">
          <img src="images/play-image 1 (4).png" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Perfect</h4>
          <p>Romantic bliss in harmonious melody</p>
        </div>

      </div> 
    </div> 

    <div class="footer">
      <div class="ft-container">
        <div class="ft-one">
          <ul>
            <li class="ft-header">Company</li>
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
        </div>
        <div class="ft-one">
          <ul>
            <li class="ft-header">Communities</li>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
        </div>
        <div class="ft-one">
          <ul>
            <li class="ft-header">Useful links</li>
            <li>Support</li>
            <li>For Moble App</li>
          </ul>
        </div>
      </div>
      <div class="social-media-container">
        <span class="fa-brands fa-instagram fa-xl"></span>
        <span class="fa-brands fa-twitter fa-xl"></span>
        <span class="fa-brands fa-facebook fa-xl"></span>
      </div>
    </div>

    <hr/>

    <div class="copy-right">
      <p class="cr-text">@2023 Spotify AB</p>
    </div>
</div>

  )
}

export default Playlists