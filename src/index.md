---
layout: home
title: We are OpenOakland
author: OpenOakland
---


<!--- The "Hero" section at the top of the home page is an include in the layouts/home.html file and is editable by opening the includes/home-sections/home-hero.html file. -->

<!--- Section: Next Event -->

{% include home-sections/home-next-event.html %}





<!--- Section: Latest Updates -->
<div class="latest-updates"> {% include home-sections/recent-updates.html %} </div>


<!--- Section: Slack -->
<!--<hr class="hr-home"> -->
<section class="row" style="margin-top:-2rem;">
  <div class="col-2">
    <img class="img-fluid" alt="Slack logo" src="/assets/images/OO-on-Slack-300x128.png" width="100" style="margin-top:50px;" />
  </div>

  <div class="col-10">
    <h2>Join us in Slack</h2>
  </div>

  <div class="col-12">
    <p>OpenOakland members primarily use Slack for connecting and communicating. By joining our Slack space, you agree to our <a href="/code-of-conduct">Code of Conduct</a> (upshot: be cool to each other and don't spam).</p>
    <p><strong><a class="btn btn-primary" href="https://join.slack.com/t/openoakland/shared_invite/zt-n4d7tx2t-UVIN7a769e4oc9j7PgM3HA">Join us in Slack</a></strong> <a class="btn btn-link brand-link" href="https://docs.google.com/document/d/1VWZQ_3ehP5j0IOTY0nJClvQPll3ivSkuAdh5YsOhO_U/edit?usp=sharing">OpenOakland Slack Guide</a></p>
  </div>

</section>
<hr class="hr-home">
