---
title: Projects
nav_title: Current Projects
date:  2020-11-19T07:50:52+00:00
author: OpenOakland
layout: page
badges:
  active: 'success'
---

Browse the projects our volunteer teams are actively working on right now.

Want to learn more?

- Join us for our Tuesday [meetups](https://www.meetup.com/OpenOakland/events/) to connect with the project team.
- Email [steering@openoakland.org](mailto:steering@openoakland.org) with any questions or feedback.


{% for project in site.data.active_projects %}
{% assign status = 'active' %}
{% include project.html %}
{% endfor %}
