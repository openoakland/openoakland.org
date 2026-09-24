---
layout: home
title: We are OpenOakland
author: OpenOakland
---


<!--- The "Hero" section at the top of the home page is an include in the layouts/home.html file and is editable by opening the includes/home-sections/home-hero.html file. -->


<!--- Section order on the home page. The "Building Community Tech for Oakland"
      hero sits above these, in _layouts/home.html. To move a section, move its
      whole include line below. -->

{% include home-sections/home-what-we-offer.html %}

<!--- Section: Latest Blog Posts -->
{% include home-sections/recent-updates.html %}

<!--- Section: Upcoming Events -->
{% include home-sections/home-next-event.html %}

{% include home-sections/home-why-choose-openoakland.html %}

<!--- Section: Join us on Slack -->
{% include home-sections/home-slack.html %}
