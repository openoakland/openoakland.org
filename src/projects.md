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

Looking for something else? See projects we've wrapped up on the [Impact](/impact/) page, or browse brigade operations and paused projects in our [Project Archive](/project-archive/).

Want to connect with a project team in person? [Join us for our Tuesday meetups](https://www.meetup.com/OpenOakland/events/){: .btn .btn-primary } Have a new project idea? [Fill out our project exploration worksheet](https://docs.google.com/document/d/1k24P9JiAUEzJLPFRDjVh7aRZexax6NUhfPFLSI3R80M/edit?usp=sharing){: .btn .btn-outline-secondary }

[Get involved](#get-involved) \| [Provide feedback](#provide-feedback)


{% for project in site.data.active_projects %}
{% assign status = 'active' %}
{% include project.html %}
{% endfor %}

---
[<i class="fas fa-arrow-alt-circle-up"></i> Top](#top){: .caption .float-right}

## Get involved
There are several ways to contribute to an existing project:

- Join us for our Tuesday [meetups](https://www.meetup.com/OpenOakland/events/) to connect with the project team.
- Join our [Slack workspace](https://join.slack.com/t/openoakland/shared_invite/zt-3yesrb28g-A8Wv1kcLjBwBDJlT3G_xVQ) and introduce yourself in the project's channel listed in the description.
- Email [steering@openoakland.org](mailto:steering@openoakland.org) with any questions or feedback.


### How to start a new project

If you have a new idea for an OpenOakland project:

1. **Fill out the [project exploration worksheet](https://docs.google.com/document/d/1k24P9JiAUEzJLPFRDjVh7aRZexax6NUhfPFLSI3R80M/edit?usp=sharing)**. We encourage you to join our [Slack workspace](https://join.slack.com/t/openoakland/shared_invite/zt-3yesrb28g-A8Wv1kcLjBwBDJlT3G_xVQ) and share your draft with our membership, so we can collaborate together as you develop your idea.

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
- Join the project's channel in our [Slack workspace](https://join.slack.com/t/openoakland/shared_invite/zt-3yesrb28g-A8Wv1kcLjBwBDJlT3G_xVQ) and introduce yourself.
- Join our next [Monthly Meeting](https://www.meetup.com/OpenOakland/events/) and meet the team.
- Email our [Steering Committee](mailto:steering@openoakland.org) with your input.
