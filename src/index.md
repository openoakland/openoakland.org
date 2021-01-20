---
layout: home
title: We are OpenOakland
---

<section class="row page-section">
  <div class="col-sm-8">
    <p class="h5 mt-1">OpenOakland bridges <b>technology</b> and <b>community</b> for a thriving and equitable Oakland.</p>

    <p>As part of the <a href="https://brigade.codeforamerica.org" target="_blank">Code for America brigade network</a>, we are a welcoming and inclusive volunteer group of developers, designers, data geeks, and citizen activists who use creative technology to solve civic and social problems.</p>
  </div>

  <div class="col-sm-4">
    <figure>
      <img src="/assets/images/DayOfService2019.jpg" alt="Attendees of our 2019 Day of Service" width="100%"/>
      <figcaption>OpenOakland members at our 2019 Day of Service event</figcaption>
    </figure>
  </div>
</section>

<section class="page-section">
  <h2>Our Next Meeting</h2>
  {% assign next_event = site.data.events[0] %}
  <div class="card home__event-card">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img class="card-img" src="/assets/images/Zoom-Group_Photo-2020-04-14.jpg" alt="OpenOakland members at a virtual hack night." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">
            <a href="{{ next_event.link }}" target="_blank">{{ next_event.name }}</a>
          </h3>
          <p class="card-text">
            {{ next_event.description | strip_html | truncatewords: 30 }}
          </p>
          <a href="{{ next_event.link }}" target="_blank" class="card-link btn btn-primary">RSVP on Meetup</a>
        </div>
      </div>
      <div class="col-12 px-4 card-footer d-flex justify-content-between">
        <span>
        <i class="fa fa-calendar"></i> {{ next_event.local_date | date: "%A, %B %d, %Y" }}
        </span>
        <span>
        <i class="fa fa-clock-o"></i> {{ next_event.local_time | date: "%l:%M %p" }}
        </span>
      </div>
    </div>
  </div>

  <p>
  All OpenOakland meetings are open to the public, regardless of technical ability.
  </p>

  <p>
  We hope you'll join us! If you can't make this event, <a href="https://www.meetup.com/OpenOakland" target="_blank">check our Meetup group for our future events</a>. You'll find us every Tuesday night on Zoom at <a href="http://oakca.us/hack-night" target="_blank">http://oakca.us/hack-night</a>.
  </p>

</section>

<section class="row page-section">
  <div class="col-12">
    <h2>Join us in Slack</h2>
  </div>

  <div class="col-8">
    <p>OpenOakland members primarily use Slack for all communication. You can join our Slack <a href="http://slack.openoakland.org/">here</a>.</p>
  </div>

  <div class="col-4">
    <img class="img-fluid" alt="RSVP on Meetup" src="/assets/images/OO-on-Slack-300x128.png" width="100" />
  </div>
</section>
