import React from "react";

function Bio() {
  return (
    <div>
      <h1>Bio Page</h1>
      <div id="app">
  <div className="background" v-if="loadInfo">
    <img src="posts.data.results[0].thumbnail.path + '.' + posts.data.results[0].thumbnail.extension" alt="" />
  </div>
 <div className="center-card" className="{'animate' : isInfo }">
   <div className="input-container">
      <input type="text" v-model="character"/>
      <button>
<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"/></svg>
     </button>
    </div>
    <div className="card">
    <div className="info" click="viewInfo">
        <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z"/></svg>
      </div> 
    <div className="img-container" v-if="loadInfo" className="{'nodesc' : noDesc}">
      <img src="posts.data.results[0].thumbnail.path + '.jpg'" alt="" />
    </div>
    <div className="data-container" v-if="loadInfo">
      <h3>
        {/* {${posts.data.results[0].name}} */}
      </h3>
      <p>
        {/* {{posts.data.results[0].description}} */}
      </p>
      <p className="readmore">
        <a target="_blank" href="posts.data.results[0].urls[0].url">
          Continue reading in Marvel
        </a>
      </p>
    </div>
  </div>
  <div className="card-back">
    To be probably updated with additional data
  </div>
 </div>
  <div className="error" v-if="notFound">
    <div className="error-msg">
      Character not found
    </div>
  </div>
  
  <div className="copy">
    © 2018 <a href="http://marvel.com/" target="_blank">MARVEL</a>
  </div>
</div>
        
    </div>
  );
}

export default Bio;
