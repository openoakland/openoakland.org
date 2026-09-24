---
title: "A New Database for OpenOakland's 2,000 Volunteers"
author: OpenOakland
layout: post
date: 2026-09-23 09:00:00 -0800
permalink: updates/:title/
post-excerpt: "Matching a volunteer to a project used to take months. Now it takes one to two weeks. Here's how a team of OpenOakland volunteers built a database to understand our volunteer pool and match people to projects faster."
thumb-img: /assets/images/blog/volunteer-database-thumb.png
feat-img: /assets/images/blog/volunteer-database-banner.jpg
feat-img-alt: "The OpenOakland Volunteer Intake Form, headed by the OpenOakland logo and an invitation to tell us about your interests and how you'd like to get involved"
tags: [Case Study]
---

![The OpenOakland Volunteer Intake Form, headed by the OpenOakland logo and an invitation to tell us about your interests and how you'd like to get involved](/assets/images/blog/volunteer-database-banner.jpg)

Matching a volunteer to a project used to take months. Now it takes one to two weeks. Here's how we got there.

For over a decade, OpenOakland has connected volunteers with civic tech projects to serve Oakland and the East Bay. But behind the scenes, we had a problem a lot of volunteer-run organizations will recognize: our own volunteer data was patched together - interested people signed up through different channels and their information quickly went out of date. With over 2,000 volunteers in our network, we needed to accurately capture their skills, experience, and availability to match them to the right projects. An OpenOakland volunteer team set out to build a database system that could allow us to understand our volunteer pool, match these volunteers to projects quickly, and build more civic tech faster for our community.

## The Team

- [Derrick Low](https://linkedin.com/in/derrick-low) & Leena Qureshi — Data Engineers
- [Blaise Harrison](https://www.linkedin.com/in/blaise-harrison) & [Cristy Rowley](https://www.linkedin.com/in/cristyrowley/) — Project Managers

## The Approach

Our Project Managers started by scoping out this project, establishing tools, realistic timelines, and deliverables. We chose Airtable and Fillout to keep our database lightweight, affordable, and maintainable by non-technical admins.

Once the project was outlined, we matched with two data volunteers who first provided feedback on our database concept. After iterating, our final specifications included:

- A public intake form that works at meetings, events, and online
- Self-service profile editing, so volunteers can update their own information
- QR-code meeting check-in for easily tracking attendance
- Rich volunteer profiles (skills, availability, and interests) so project leads can match people intentionally instead of guessing
- Project tracking so we can see who worked on which project(s)

## What We Built

A public intake form, pictured at the top of this post, collects the information we need to make a good match. Behind the form, volunteer profiles, projects, events, and meeting attendance all live together in one place:

![The volunteer database in Airtable, showing columns for hours per month, availability, join date, how the volunteer heard about us, and their skills. Volunteers' written experience is blurred out.](/assets/images/blog/volunteer-database-airtable.png)

## What We Learned

**Use the right tools.** During the build, Derrick experimented with Fillout's built-in AI tool to speed things up. The AI agent ended up writing a custom TypeScript solution, which allowed for very precise, custom flows, but defeated the purpose of using a no-code tool like Fillout in the first place. After running out of tokens mid-build, the team stepped back and rebuilt the core functionality using Fillout's native no-code tools instead.

As Derrick put it: having an AI agent available actually made it less clear which was the right way to use Fillout. You could build with the agent, or use the tools the platform already gives you. It's a useful data point for other volunteer-run orgs experimenting with AI-assisted development: AI can be a powerful tool, but it isn't always the right one for the job. Sometimes the simpler, native option is the faster path to success.

**Find the right volunteers.** Neither of our project managers have data expertise. Before launching, we talked the plan through with our data volunteers to make sure we were on the right track. We also learned that "data" doesn't automatically mean "Airtable". Our volunteers were just as new to the tool as we were, but they had the contextual expertise to learn it and build quickly.

**Keep privacy in mind.** One question we debated was how much information to ask volunteers to share. Knowing someone's experience and skills is essential for matching them to projects. Demographic details like race, ethnicity, gender, or age are different: they generally don't affect someone's ability to contribute, but funders have sometimes asked us to track them as part of their funding strategy. After some great conversations, we chose to make those questions as optional as possible while still asking questions to help us match volunteers to projects.

![The Volunteer Intake Form's Demographic Information section, noting that the data demonstrates community impact to funders, is never used to determine eligibility to volunteer, and that any question can be skipped](/assets/images/blog/volunteer-database-intake-form.png)

## The Impact

Before this system, matching a volunteer to a project could take months, or sometimes the match never happened at all. Project leads had to pitch their projects at meeting after meeting, hoping someone in the room would be interested enough to join. One project took nearly a year to staff, and we came close to losing it entirely before the right volunteers came together.

The new database flips that process. Now, matching happens successfully in one to two weeks. Instead of waiting and hoping, project leads can proactively reach out to volunteers in the database whose skills and interests fit the work. And because volunteers know our project offers are more likely to match their interests, they're more likely to respond, making the whole process faster and easier for everyone.

We're now transitioning our volunteer contacts into the new system. The timing matters: we're excited to be presenting [two events as part of Oakland Tech Week](https://www.eventbrite.com/o/3819004199) on Tuesday, September 29. With this new database, we feel ready to handle an influx of new volunteer interest.

## Get Involved

OpenOakland is a volunteer-driven civic technology organization bringing technologists, data analysts, designers, and researchers together to build community-centered technology that gives Oaklanders and East Bay residents a voice in the issues that impact us all. Learn more at [openoakland.org](https://openoakland.org) or [sign up to volunteer with us](https://form.fillout.com/t/jgQdebkd3wus).
