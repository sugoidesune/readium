<template>
  <div class="container">
<section class="header">
  <h1>Readium</h1>
  <h3>[ <span>Read premium articles for free</span>  ]</h3>
</section>

<section class="quickstart d-none">
  button  Watch a video
</section>
<section class="video">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_5s5VUrNPMA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>


<section class="how">
  
  <h5>1. Drag this button to your Bookmarks:</h5>
  <a href="javascript:var%20currentsite%3Ddocument.querySelector(%22meta%5Bproperty%3D'al%3Aandroid%3Aapp_name'%5D%22)%3Fdocument.querySelector(%22meta%5Bproperty%3D'al%3Aandroid%3Aapp_name'%5D%22).content%3Awindow.location.href%3Bfunction%20isPage(b)%7Bconsole.log(b%2B%22%20%22%2Bcurrentsite.includes(b))%3Breturn%20currentsite.includes(b)%7Dfunction%20process(b)%7Bvar%20a%3Db%3BisPage(%22NYTimes%22)%26%26(document.querySelector(%22html%22).innerHTML%3Da)%3BisPage(%22Medium%22)%26%26(a%3Db.replace(%2F%3C%5C%2F%3Fnoscript%3E%2Fg%2C%22%22)%2Cdocument.querySelector(%22html%22).innerHTML%3Da)%3Bif(isPage(%22Bloomberg%22)%7C%7CisPage(%22businessinsider%22))a%3Ddocument.createElement(%22html%22)%2Ca.innerHTML%3Db%2Ca.querySelectorAll(%22script%22).forEach(function(a)%7Breturn%20a.outerHTML%3D%22%22%7D)%2Ca%3Da.outerHTML%2Cdocument.open()%2Cdocument.write(a)%2Cdocument.close()%3BisPage(%22businessinsider%22)%26%26(a%3Ddocument.createElement(%22html%22)%2Ca.innerHTML%3Db%2Ca.querySelectorAll(%22script%22).forEach(function(a)%7Breturn%20a.outerHTML%3D%22%22%7D)%2Ca.querySelectorAll(%22figure%22).forEach(function(a)%7Ba.innerHTML%3Da.querySelector(%22noscript%22).innerHTML%7D)%2Ca%3Da.outerHTML%2Cdocument.open()%2Cdocument.write(a)%2Cdocument.close())%7Dfetch(window.location.href%2C%7Bcredentials%3A%22omit%22%2Credirect%3A%22follow%22%2Cmode%3A%22no-cors%22%7D).then(function(b)%7Breturn%20b.text()%7D).then(function(b)%7Bprocess(b)%7D)%3Bvoid+0" class="link">Readium</a>
</section>
<section class="sites">
  <h5>2. Find a premium article on any of these:</h5>
<div class="newssites">
  <a href="https://www.nytimes.com/">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/NewYorkTimes.svg/185px-NewYorkTimes.svg.png" alt="">
  </a>
  <a href="https://www.businessinsider.com/prime?IR=T">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Business_Insider_Logo.svg/320px-Business_Insider_Logo.svg.png" alt="">
  </a>
  <a href="https://www.medium.com/">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Medium_logo_Wordmark_Black.svg/380px-Medium_logo_Wordmark_Black.svg.png" alt="" class="src">
  </a>
  <a href="https://www.bloomberg.com/">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bloomberg_L.P._logo.svg/320px-Bloomberg_L.P._logo.svg.png" alt="" class="src">
    </a>
  <a href="https://towardsdatascience.com/">
  <img 
src="data:image/png;base64,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" alt="" class="src invert">
    </a>
</div>
</section>

<section class="done">
  <h5>3. Click the Readium Bookmarklet and read!</h5>
  <div class="article">
    <span class="button float">Readium</span>
    <h5>___        </h5>
    <h5>___ _____ _</h5>
    <h5 class="image">_ _ ___<i class="far fa-image"></i></h5>
    <h5>__ ________</h5>
    <h5>____ ______</h5>
  </div>

</section>

<section class="not-a-newsletter d-none">
  <!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
<form action="https://github.us4.list-manage.com/subscribe/post?u=cdcf0fbdb74b3c21028610ca2&amp;id=9240a77d05" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Not a newsletter</h2>
  <p>Just core updates about this project.</p>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_cdcf0fbdb74b3c21028610ca2_9240a77d05" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->
</section>

<section class="social">
  <h5>4. Find me here:</h5>
  <div class="icons">
    <a href="https://twitter.com/sudotimar">
          <i class="fab fa-twitter"></i>
    </a>
    <a href="https://medium.com/@timarivobatis">
          <i class="fab fa-medium"></i>
    </a>
    <a href="https://github.com/sugoidesune">
          <i class="fab fa-github"></i>
    </a>
  </div>

</section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
$main: #ade1d5;//#ff005a;
$accent: white;
.d-none {
  display: none !important;
}
body{
  margin: 0;
background: $main;
color: $accent;
font-family: 'Nunito', sans-serif;
  a {
    color: $accent;
    &:hover {
      text-decoration: none;
    }
  }
  h1 {
    font-size:100px;
    text-align:center;
    margin-bottom: 0;
}
  h3{
    font-weight: 100;
    margin-top: -20px;
    font-size:30px;
    text-align:center;
    line-height: 0.7;
    span {
      font-size:80%;
    }
    .small {

      margin-top: -30px;
      font-size: 60%;
    }
  }
  h5{
    font-size: 20px;
    text-align:center;
    margin-bottom: 10px;
  }
@media only screen and (max-width: 768px) {
  h1 {
  font-size:75px;
  margin-bottom: 5px;
  }
  h3 {
    font-size: 22px;
  }
}


section  {
  margin-top: 75px;
  h5 {
    margin-bottom: 25px;
  }
}

section.header {
    margin-top: 25px;
}

section.video {
  iframe {
    display: block;
    margin: auto;
    width: 100%;
    max-width: 560px;
  }
}

section.sites {
  margin-bottom: -35px;
    text-align: center;
  p {
    margin-top: -15px;
  }
    .newssites {
    background: $main;
    margin:auto;
    margin-top: -35px;
    max-width: 800px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      opacity: 1;
      width: 100px;
      height: auto;
      filter: saturate(0) contrast(300%) invert(1);
      mix-blend-mode: lighten;
    }
     .invert {
     filter: invert(0) contrast(300%) saturate(0) brightness(1);
    }
  }
  @media only screen and (max-width: 768px) {
    .newssites {
      img {
        width: 70px;
      }
    }
  }
}
section.how {
  display: block;
  text-align: center;
  h5 {margin-bottom: 30px}
  .link{
    margin:auto;
    background: $accent;
    color: $main;
    font-size: 20px;
    margin-top: 100px;
    text-align:center;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 5px 30px 9px 30px;
    font-weight: 600;
    box-shadow: inset 0px -4px 0px 0 #0000000a, -9px 17px 19px 0 #00000017;
    &:hover {
      color: $main;
      box-shadow: inset 0px -4px 0px 0 #0000000a, -9px 17px 19px 0 #00000017, 0px 0px 5px 0 #fff;
    }
  }
}
section.done {
  .article{
    background: $accent;
    padding: 10px 10px 20px 10px;
    display: block;
    margin: auto;
    width: 140px;
    box-shadow: inset 0px -5px 0px 0 #0000000a, -3px 3px 4px 0 #00000017;
    position: relative;
    .button {
      background: $accent;
      box-shadow: inset 0px -1px 0px 0 #0000000a, -1px 1px 3px 0 #00000017;
      font-size: 7px;
      font-weight: 100;
      display: inline-block;
      position: absolute;
      border-radius: 1px;
      padding: 1px 5px;
      top: 4px;
      color: $main;
    }
    .float {
        animation-name: float;
        animation-duration: 1.5s;
        animation-direction: alternate-reverse;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    @keyframes float {
    from {
      transform: translatey(0px)
      }
    to {transform: translatey(+2px)}
    }
    h5 {
      color: $main;
    margin: 0;
  }
    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      height: 30px;
    }
    i {
      padding-top: 10px;
      margin-left: 5px;
      font-size: 36px;
    }
  } 
}
section.social {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  .icons {
    margin-top: -10px;
      display: flex;
      justify-content: center;
    i {
      font-size: 25px;
      margin:10px;
    }
  }
}
}
</style>
