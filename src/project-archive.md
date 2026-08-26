---
title: Project Archive
date: 2026-08-26T00:00:00+00:00
author: OpenOakland
layout: page
permalink: /project-archive/
badges:
  brigade ops: 'primary'
  idle: 'secondary'
---

This page covers OpenOakland's ongoing operational efforts, plus projects that have gone quiet while the core team is busy or between leads. If you'd like to help revive one of the idle projects below, submit a [project exploration worksheet](https://docs.google.com/document/d/1k24P9JiAUEzJLPFRDjVh7aRZexax6NUhfPFLSI3R80M/edit?usp=sharing) at our Monthly Meeting or in Slack's #oo-steering-committee channel.

Looking for what we're working on right now? Visit [Current Projects](/projects/).

## <span class="badge badge-primary">Brigade ops</span>

These projects support OpenOakland's operations and are open to volunteer contributions.

{% for project in site.data.ops_projects %}
{% assign status = 'brigade ops' %}
{% include project.html %}
{% endfor %}

## <span class="badge badge-secondary">Idle</span>

{% for project in site.data.idle_projects %}
{% assign status = 'idle' %}
{% include project.html %}
{% endfor %}
