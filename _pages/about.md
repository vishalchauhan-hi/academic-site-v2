---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<p class="profile-kicker">Human–computer interaction · Smart cities · Emerging technologies</p>

<h1 class="profile-headline">Human intelligence for an autonomous world.</h1>

<p class="profile-lede">I am <strong>Vishal Chauhan</strong>, a doctoral candidate in Creative Informatics at <a href="https://www.u-tokyo.ac.jp/en/">The University of Tokyo</a>, advised by Prof. Manabu Tsukada and Prof. Takeo Igarashi. My research starts on an ordinary street corner: a person steps off the curb, a driverless car approaches, and there is no driver to make eye contact with. Something has to fill that silence.</p>

<p class="profile-support">Most of the field puts the answer on the car—a display, a light strip, a signal per vehicle. I think that's the wrong place. Streets will soon hold more autonomous machines than any person can read at once, and nobody should need to decode five cars to cross a road. My work moves the conversation into the street itself: the <strong>Smart Pole Interaction Unit (SPIU)</strong> listens to connected vehicles and turns their intentions into one clear instruction at the roadside—so the city does the interpreting, and the person just walks.</p>

<p class="profile-support">I've carried this idea from sketches into virtual-reality streets, across cultures from Tokyo to Norway, past comparisons with multimodal AI, and out onto real pavement with a mobile prototype. Two of those studies received Honourable Mention Awards at ACM CHI 2026. The details live in the papers—the short version is that the street can speak, and people listen.</p>

<nav class="research-entrypoints" aria-label="Explore Vishal Chauhan's work">
  <a href="{{ '/publications/' | relative_url }}">
    <span>Published work</span>
    <strong>Read the papers <b>→</b></strong>
  </a>
  <a href="{{ '/portfolio/' | relative_url }}">
    <span>Built and tested</span>
    <strong>See the systems <b>→</b></strong>
  </a>
  <a href="{{ '/highlights/' | relative_url }}">
    <span>Research in motion</span>
    <strong>News &amp; field notes <b>→</b></strong>
  </a>
</nav>

{% include research-animation.html %}

<section class="research-lens" data-research-lens data-active="people" aria-labelledby="research-lens-title">
  <div class="research-lens__intro">
    <p>Street-level research</p>
    <h2 id="research-lens-title">Where should a city speak from?</h2>
    <span>Every autonomous machine added to a street adds another thing people must interpret. My research asks where the communication layer of a city belongs—on each machine, on the person, or in the infrastructure they share—and keeps finding the same answer: build it into the street. I test that answer in three directions.</span>
  </div>

  <div class="research-directions" aria-label="Three connected research directions">
    <div>
      <span>01 · Autonomous mobility</span>
      <h3>Vehicles you can read</h3>
      <p>An approaching car with no driver is a sentence with no speaker. I design and test the ways automated vehicles can telegraph what they're about to do—on the vehicle, and beyond it—so a pedestrian's next step never has to be a guess.</p>
    </div>
    <div>
      <span>02 · Human–robot interaction</span>
      <h3>Robots that fit in</h3>
      <p>Delivery robots today succeed by making everyone walk around them. I study the reverse: machines that move, pause, and signal the way a considerate stranger would, so sharing a sidewalk costs people nothing.</p>
    </div>
    <div>
      <span>03 · Urban intelligence</span>
      <h3>Streets that talk back</h3>
      <p>The long game: connected infrastructure, V2X, and digital-twin simulation as a city-scale interface—poles, crossings, and corners that can speak for the machines moving through them. SPIU is the working proof that a street can carry the conversation.</p>
    </div>
  </div>

  <div class="research-lens__experience">
    <div class="research-lens__map" role="tablist" aria-label="Research perspectives">
      <button class="research-lens__node research-lens__node--people is-active" id="lens-tab-people" type="button" role="tab" aria-selected="true" aria-controls="lens-people" data-lens="people">
        <span>01</span><strong>People</strong><small>perception</small>
      </button>
      <button class="research-lens__node research-lens__node--machines" id="lens-tab-machines" type="button" role="tab" aria-selected="false" aria-controls="lens-machines" data-lens="machines">
        <span>02</span><strong>Machines</strong><small>intent</small>
      </button>
      <button class="research-lens__node research-lens__node--places" id="lens-tab-places" type="button" role="tab" aria-selected="false" aria-controls="lens-places" data-lens="places">
        <span>03</span><strong>Places</strong><small>coordination</small>
      </button>
      <button class="research-lens__node research-lens__node--evidence" id="lens-tab-evidence" type="button" role="tab" aria-selected="false" aria-controls="lens-evidence" data-lens="evidence">
        <span>04</span><strong>Evidence</strong><small>validation</small>
      </button>
      <div class="research-lens__core" aria-hidden="true">
        <span>Design goal</span>
        <strong>Readable<br>autonomy</strong>
      </div>
    </div>

    <div class="research-lens__stories" aria-live="polite">
      <article class="research-lens__story is-active" id="lens-people" role="tabpanel" aria-labelledby="lens-tab-people" data-lens-panel="people">
        <p class="research-lens__signal">People · attention</p>
        <h3>A pedestrian's attention is the scarcest resource on the street.</h3>
        <p>I measure how people actually read traffic—what they notice, what they trust, and when too many machines becomes too much to track.</p>
        <a href="{{ '/publications/' | relative_url }}">See the human studies →</a>
      </article>

      <article class="research-lens__story" id="lens-machines" role="tabpanel" aria-labelledby="lens-tab-machines" data-lens-panel="machines">
        <p class="research-lens__signal">Machines · next move</p>
        <h3>A machine should be understood before it is impressive.</h3>
        <p>Vehicle displays, roadside interfaces, and robot behaviors prototyped so that the next move is obvious at a glance.</p>
        <a href="{{ '/portfolio/' | relative_url }}">See the systems →</a>
      </article>

      <article class="research-lens__story" id="lens-places" role="tabpanel" aria-labelledby="lens-tab-places" data-lens-panel="places">
        <p class="research-lens__signal">Places · shared street</p>
        <h3>One street can speak for many machines.</h3>
        <p>A single roadside unit can carry the intent of every connected vehicle near it. That is the idea SPIU exists to prove—from VR to real pavement.</p>
        <a href="{{ '/portfolio/spiu/' | relative_url }}">Meet SPIU →</a>
      </article>

      <article class="research-lens__story" id="lens-evidence" role="tabpanel" aria-labelledby="lens-tab-evidence" data-lens-panel="evidence">
        <p class="research-lens__signal">Evidence · sketch to street</p>
        <h3>Ideas earn their way from sketch to street.</h3>
        <p>Everything advances the same way: sketch, simulate, compare with human and AI judgment, replicate across cultures, then deploy. What fails a step stays in the lab. What survives ends up in the papers below.</p>
        <a href="{{ '/publications/' | relative_url }}">Read the papers →</a>
      </article>
    </div>
  </div>

  <p class="research-lens__hint">Select People, Machines, Places, or Evidence. Arrow keys work too.</p>
</section>

<div class="affiliation-strip" aria-label="Academic, industry, and open-source research context">
  <p class="affiliation-strip__label">Research across academia, industry, and open source</p>
  <div class="affiliation-strip__logos">
    <a class="affiliation-strip__link affiliation-strip__utokyo" href="https://www.u-tokyo.ac.jp/en/" target="_blank" rel="noopener" aria-label="The University of Tokyo">
      <span>UTokyo</span>
    </a>
    <a class="affiliation-strip__link" href="https://tier4.jp/en/" target="_blank" rel="noopener" aria-label="TIER IV">
      <img src="{{ '/images/affiliations/tier4.svg' | relative_url }}" alt="TIER IV" loading="lazy">
    </a>
    <a class="affiliation-strip__link affiliation-strip__link--aist" href="https://www.aist.go.jp/index_en.html" target="_blank" rel="noopener" aria-label="National Institute of Advanced Industrial Science and Technology">
      <img src="{{ '/images/affiliations/aist.png' | relative_url }}" alt="AIST — National Institute of Advanced Industrial Science and Technology" loading="lazy">
    </a>
    <a class="affiliation-strip__link" href="https://autoware.org/" target="_blank" rel="noopener" aria-label="The Autoware Foundation">
      <img src="{{ '/images/affiliations/autoware.svg' | relative_url }}" alt="The Autoware Foundation" loading="lazy">
    </a>
  </div>
</div>

<script src="{{ '/assets/js/research-lens.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>
