---
title: Calendar
date:  2020-11-07T02:09:11+00:00
author: Jess S.
layout: page
---

## Join us every Tuesday on Zoom
6:30-9:00 pm PST

We welcome folks of all skill levels and disciplines. Normally, we meet in Oakland City Hall ([directions](https://goo.gl/maps/YTNkpZcb7Sy936w88)) but we're fully remote during the pandemic. If you need accessibility assistance, please email steering@openoakland.org.

[RSVP on Meetup](https://www.meetup.com/OpenOakland/events/){: class="btn btn-primary btn-lg"}

## Recurring meetings
The following events happen during Tuesday's Hack Night on the following dates:

- **First Tuesday of each month**  
Demo night: See the latest updates from active projects.  
- **Third Tuesday of each month**  
Steering committee meeting: Decision-making body for OpenOakland (open to membership; agenda is posted 1 week prior in #leadership on Slack).  
- **Last Tuesday of each month**  
New member orientation: Get a personal introduction to OpenOakland.

<div id="announcement">
{% for announcement in site.data.announcement %}
  {% include announcement.html %}
{% endfor %}
</div>

## Past Events

<div id="calendar">
{% for calendar in site.data.calendar %}
  {% include calendarEvent.html %}
{% endfor %}
</div>
