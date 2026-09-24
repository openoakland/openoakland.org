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

Is your organization facing a challenge like the ones below? [Partner with us](/partner/){: .btn .btn-primary }

Looking for what we're working on right now? Visit [Current Projects](/projects/).

{% comment %}
Newest first, using the `delivered:` date in _data/delivered_projects.yml.
The date itself is never displayed - it only controls this order. Projects
with no `delivered:` date follow, in the alphabetical order of the data file.
{% endcomment %}
{% assign dated = site.data.delivered_projects | where_exp: "p", "p.delivered" | sort: "delivered" | reverse %}
{% assign undated = site.data.delivered_projects | where_exp: "p", "p.delivered == nil" %}

{% assign status = 'delivered' %}
{% for project in dated %}
{% include project.html %}
{% endfor %}
{% for project in undated %}
{% include project.html %}
{% endfor %}
