---
title: Impact
date: 2026-08-26T00:00:00+00:00
author: OpenOakland
layout: page
permalink: /impact/
badges:
  delivered: 'dark'
---

These OpenOakland projects have either reached their intended conclusion or been handed off to a partner for long-term management. Because most of our work is open source, these projects can often be reproduced or adapted by anyone with an interest in doing so.

Is your organization facing a challenge like the ones below? [Get help from our volunteer teams](https://openoakland.org/get-help/){: .btn .btn-primary }

Looking for what we're working on right now? Visit [Current Projects](/projects/).

{% for project in site.data.delivered_projects %}
{% assign status = 'delivered' %}
{% include project.html %}
{% endfor %}
