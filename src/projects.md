---
title: Our Projects
date: 2015-11-03T02:55:22-07:00
author: elina
layout: page
---

OpenOakland projects are the core of our organization's efforts to connect citizens with impactful civic initiatives. **We're always seeking new projects and project leaders** to work on housing, transportation, education, health, or any area that can improve the lives of Oakland's residents. Please feel free to [join our Slack](https://docs.google.com/forms/d/e/1FAIpQLSee_qdE0qCmhufJC94MmSRVDLPAhhFJO4QMzuC31Kh0lxI_Mg/viewform?usp=sf_link) and reach out to members, leadership, or any project team for more information. You can contact project teams directly in their individual Slack channels. **Join or sign-in to Slack:**  [**slack.openoakland.org**](https://slack.openoakland.org/){: target="_blank" rel="noopener noreferrer"}

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
