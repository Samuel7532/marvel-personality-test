import React from "react";

function heropage() {
  return (
    <div>
  <source playsInline autoPlay muted loop id="bgvid" />
  <source src="https://wallpapers.moviemania.io/phone/movie/299534/34fd1b/avengers-endgame-phone-wallpaper.jpg?w=1536&h=2732" />
  <div id="main">
    <div id="left">
      <div id="logo">
        {/* <img src alt /> */}
        <div id="version">1.0.0.0 - 00000</div>
      </div>
      <div id="menus">
        <canvas id="menu-highlight" width={800} height={600} />
        <div
          className="italic highlight"
          onmouseover="highlight(this, event)"
        >
          My Hero
        </div>
        <div className="italic" onmouseover="highlight(this, event)">
          play
        </div>
        <div className="italic" onmouseover="highlight(this, event)">
          training
        </div>
        {/* <div className="italic" onmouseover="highlight(this, event)">
          hero gallery
        </div>
        <div className="italic" onmouseover="highlight(this, event)">
          loot box
        </div>
        <div className="normal">SOCIAL</div>
        <div className="normal">CAREER PROFILE</div>
        <div className="normal">OPTIONS</div>
        <div className="normal">EXIT GAME</div>
      </div> */}
      </div>
      {/* <div id="chat">
        <div id="chat-log">
          <div className="message">[Genji]: I need healing!</div>
        </div>
        <div id="chat-input">
          <div id="channel">[General]:</div>
          <input id="text" type="text" />
        </div>
        <div id="enter">PRESS ENTER TO CHAT</div>
      </div>
    </div>
    <div id="player">
      <div id="social">
        <img
          src="https://cdn.discordapp.com/attachments/303406782104207362/315772662989193216/social.png"
          alt
        />
      </div> */}
      {/* <div id="info">
        <img
          src="https://hydra-media.cursecdn.com/overwatch.gamepedia.com/5/5d/PI_Tracer_Patch.png?version=8d90f5c5f0f85e762746519ea0f86e1e"
          alt
        />
        <div id="name">SUREFOURTEEN</div>
        <div id="rank">14</div>
      </div> */}
    </div>
    <div id="hero">
      <div id="hero-name">TRACER</div>
      <div id="hero-unlocks">
        <span>74</span>/76 UNLOCKS
      </div>
    </div>
  </div>
</div>

  );
}

export default heropage;