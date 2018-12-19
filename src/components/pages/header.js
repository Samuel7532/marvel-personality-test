import React from "react";

function header() {
  return (
    <div class="main">
    <div class="light">
  <div class="top half">
    <img src="" />
  </div>
  <div class="bottom half">
    <img src="" />
  </div>
  <button class="super-button">Enter</button>
  <div class="overlay"></div>
  <div class="button-line left">
    <div class="inner"></div>
  </div>
  <div class="button-line right">
    <div class="inner"></div>
  </div>
  </div>
</div>
  );
}
{/* <script>
$(document).ready(function() {
  $(document).on("click", ".super-button", function() {
    $(".main, .half, .overlay, .button-line, .super-button, .content").addClass("active");
    setTimeout(function() {
      $(".main *").css("z-index", "1");
    }, 3000);
}):
});
</script> */}

export default header;
