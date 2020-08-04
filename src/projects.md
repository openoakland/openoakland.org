---
title: Our Projects
date: 2015-11-03T02:55:22-07:00
author: elina
layout: page
---

In response to member feedback, OpenOakland is reevaluating how our projects are vetted and adopted, with a focus on ensuring all projects are aligned with [OpenOakland’s values](https://openoakland.org/our-values) and are truly serving the communities they impact. The projects listed here are currently active but will be going through this new process as it’s developed. If you’d like to contribute to or provide feedback on any of these projects or the evaluation process itself, consider attending our [next Hack Night](https://www.meetup.com/OpenOakland/events/), joining the conversation in our [Slack workspace](http://slack.openoakland.org/), or emailing our [Steering Committee](mailto:steering@openoakland.org).

---

<div id="projects">
  <h2>Active Projects</h2>
  {% for project in site.data.active_projects %}
    {% include project.html %}
  {% endfor %}
  <hr/>
  <h2>Inactive Projects</h2>
  <p><em>These projects are some of OpenOakland’s original projects. They are no longer actively being developed and aren’t accepting volunteers.</em></p>
  {% for project in site.data.inactive_projects %}
    {% include project.html %}
  {% endfor %}
</div>
