---
title: Projects
date:  2020-11-19T07:50:52+00:00
author: OpenOakland
layout: page
scripts: ["/assets/js/project_filter.js"]
badges:
  brigade ops: 'primary'
  active: 'success'
  incubating: 'info'
  idle: 'secondary'
  delivered: 'dark'
  decommissioned: 'warning'
---

Browse the projects below to see what we're currently working on. You can filter the list to see past projects, too.

[Status definitions](#status-definitions) \| [Get involved](#get-involved) \| [Provide feedback](#provide-feedback)


<project-filter>
  <div class="project-filter__toolbar"></div>

  <!-- Active -->
  {% for project in site.data.active_projects %}
  {% assign status = 'active' %}
  {% include project.html %}
  {% endfor %}

  <!-- Incubating -->
  {% for project in site.data.incubating_projects %}
  {% assign status = 'incubating' %}
  {% include project.html %}
  {% endfor %}

  <!-- Ops -->
  {% for project in site.data.ops_projects %}
  {% assign status = 'brigade ops' %}
  {% include project.html %}
  {% endfor %}  

  <!-- Idle -->
  {% for project in site.data.idle_projects %}
  {% assign status = 'idle' %}
  {% include project.html %}
  {% endfor %}

  <!-- Delivered -->
  {% for project in site.data.delivered_projects %}
  {% assign status = 'delivered' %}
  {% include project.html %}
  {% endfor %}

</project-filter>

---
[<i class="fas fa-arrow-alt-circle-up"></i> Top](#top){: .caption .float-right}

## Status definitions

### <span class="badge badge-{{ page.badges['active'] }}">Active</span>

These projects are actively supported by a core team of OpenOakland volunteers. To contribute or provide feedback, see [Get involved](#get-involved).

### <span class="badge badge-{{ page.badges['incubating'] }}">Incubating</span>

Incubating projects are in the exploratory or start-up phase before becoming an official OpenOakland project. To be listed as an incubating project, ideas must have a draft [project exploration worksheet](https://docs.google.com/document/d/1k24P9JiAUEzJLPFRDjVh7aRZexax6NUhfPFLSI3R80M/edit?usp=sharing) completed, an acting lead shepherding the idea, and be actively recruiting collaborators. Placement on the website is at the discretion of the Steering Committee.

### <span class="badge badge-{{ page.badges['brigade ops'] }}">Brigade ops</span>

These projects support OpenOakland's operations. Like <span class="badge badge-{{ page.badges['active'] }}">Active</span> and <span class="badge badge-{{ page.badges['incubating'] }}">Incubating</span> projects, they are [open to volunteer contributions](#get-involved).

### <span class="badge badge-{{ page.badges['idle'] }}">Idle</span>

Sometimes projects go quiet when the core team gets too busy or disbands. If you'd like to resume or adapt one of these, submit a [project exploration worksheet](https://docs.google.com/document/d/1k24P9JiAUEzJLPFRDjVh7aRZexax6NUhfPFLSI3R80M/edit?usp=sharing) at an upcoming Hack Night or in Slack's #oo-steering-committee channel.

### <span class="badge badge-{{ page.badges['delivered'] }}">Delivered</span>

Delivered projects have either reached their intended conclusion or been handed off to a partner for long-term management. Because most of OpenOakland's work is open source, these projects can often be reproduced or adapted by anyone with an interest in doing so.

### <span class="badge badge-{{ page.badges['decommissioned'] }}">Decommissioned</span>

These are projects the Steering Committee has formally reviewed and deemed no longer a good fit for OpenOakland. These projects may not be reinstated without submitting a new [project exploration worksheet](https://docs.google.com/document/d/1k24P9JiAUEzJLPFRDjVh7aRZexax6NUhfPFLSI3R80M/edit?usp=sharing) that substantively addresses the original reasons for discontinuation. Project briefs that are declined by the Steering Committee twice may not be resubmitted without substantive changes.

---

[<i class="fas fa-arrow-alt-circle-up"></i> Top](#top){: .caption .float-right}

## Get involved
There are several ways to contribute to an existing project:

- Join us for our Tuesday [meetups](https://www.meetup.com/OpenOakland/events/) to connect with the project team.
- Join our [Slack workspace](https://join.slack.com/t/openoakland/shared_invite/zt-n4d7tx2t-UVIN7a769e4oc9j7PgM3HA) and introduce yourself in the project's channel listed in the description (see our [OpenOakland Slack Guide](https://docs.google.com/document/d/1VWZQ_3ehP5j0IOTY0nJClvQPll3ivSkuAdh5YsOhO_U/edit?usp=sharing) for help).
- Email [steering@openoakland.org](mailto:steering@openoakland.org) with any questions or feedback.


### How to start a new project

OpenOakland is reevaluating how our projects are vetted, adopted, and developed. This is an ongoing pilot that we continue to iterate on in an effort to ensure that projects serve their intended communities, consider potential unintended consequences, and foster greater inclusion of community voices—particularly those from underrepresented and underserved Oakland communities.

If you have a new idea for an OpenOakland project:

1. **Fill out the [project exploration worksheet](https://docs.google.com/document/d/1k24P9JiAUEzJLPFRDjVh7aRZexax6NUhfPFLSI3R80M/edit?usp=sharing)**. We encourage you to join our [Slack workspace](https://join.slack.com/t/openoakland/shared_invite/zt-n4d7tx2t-UVIN7a769e4oc9j7PgM3HA) and share your draft with our membership, so we can collaborate together as you develop your idea.

2. **Submit your draft brief to the #oo-steering-committee channel** on Slack for formal consideration. Provided your brief is submitted at least two weeks in advance, it will be reviewed at the next Steering Committee meeting (a group of elected leadership and existing project reps), and you'll get some initial feedback and be asked to make adjustments accordingly.

3. **Make any requested adjustments** based on the Steering Committee's feedback and resubmit the final brief.

Once your final brief is submitted, the Steering Committee will hold a formal vote to approve or decline the project.

#### What makes a good project?

We generally consider the following types of projects:

- **Civic tech projects:** providing tools or services to Oaklanders or public agencies to increase access to and understanding of government.
- **Events:** major events that require a team to execute.
- **OpenOakland sustainability projects:** efforts to improve and sustain OpenOakland as an organization.

Projects must demonstrate alignment to OpenOakland’s mission and values. Some ways a project might do so include:

- Partnering with organizations to serve as domain experts in the needs of the community it serves
- Forming a project team which has lived experience with the issue the project is focused on
- Conducting user research to understand the needs of the community the project serves

---

[<i class="fas fa-arrow-alt-circle-up"></i> Top](#top){: .caption .float-right}

## Provide feedback

In the spirit of continuous improvement and self-reflection, we welcome any and all feedback on OpenOakland projects past and present, as well as the overall project management process. Ways you can share your input include:

- Open an issue in the project's GitHub repository (listed in the project description).
- Join the project's channel in our [Slack workspace](https://join.slack.com/t/openoakland/shared_invite/zt-n4d7tx2t-UVIN7a769e4oc9j7PgM3HA) and introduce yourself (see our [OpenOakland Slack Guide](https://docs.google.com/document/d/1VWZQ_3ehP5j0IOTY0nJClvQPll3ivSkuAdh5YsOhO_U/edit?usp=sharing) for help).
- Join our next [Hack Night](https://www.meetup.com/OpenOakland/events/) and meet the team.
- Email our [Steering Committee](mailto:steering@openoakland.org) with your input.
