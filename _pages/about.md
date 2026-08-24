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

<p class="profile-lede">I am <strong>Vishal Chauhan</strong>, a doctoral candidate in Creative Informatics at <a href="https://www.u-tokyo.ac.jp/en/">The University of Tokyo</a>, advised by Prof. Manabu Tsukada and Prof. Takeo Igarashi. I study how people understand, trust, and act around the intelligent systems entering everyday life—autonomous vehicles, robots, and the connected infrastructure of future cities.</p>

<p class="profile-support">My central question is how cities themselves can become interfaces: how emerging technologies—V2X communication, AR/VR, multimodal AI, and interactive infrastructure—can make encounters between humans and machines safer, clearer, and less demanding for people. My doctoral work explores this through the <strong>Smart Pole Interaction Unit (SPIU)</strong>, an infrastructure-side interface that translates connected-vehicle intent into roadside guidance for pedestrians—taken from VR studies through cross-cultural evaluation to an in-the-wild mobile prototype.</p>

<p class="profile-support">I build with AI, but design for <strong>human intelligence</strong>: the judgment, context, and care that machines do not have. Collaborations across Japan, Singapore, Canada, and Norway shape how I think about the cities we are about to live in.</p>

<nav class="research-entrypoints" aria-label="Explore Vishal Chauhan's work">
  <a href="{{ '/publications/' | relative_url }}">
    <span>Published evidence</span>
    <strong>09 papers <b>→</b></strong>
  </a>
  <a href="{{ '/portfolio/' | relative_url }}">
    <span>Built and evaluated</span>
    <strong>03 systems <b>→</b></strong>
  </a>
  <a href="{{ '/highlights/' | relative_url }}">
    <span>Research in motion</span>
    <strong>News &amp; field notes <b>→</b></strong>
  </a>
</nav>

{% include research-animation.html %}

<section class="research-lens" data-research-lens data-active="people" aria-labelledby="research-lens-title">
  <div class="research-lens__intro">
    <p>Research agenda</p>
    <h2 id="research-lens-title">Human-centered intelligence at city scale.</h2>
    <span>My research asks one question at city scale: <strong>as autonomous systems fill our streets, how do we keep the cognitive burden off people?</strong> I approach it through three connected directions—the vehicles that move through cities, the robots that inhabit them, and the urban infrastructure that can coordinate both.</span>
  </div>

  <div class="research-directions" aria-label="Three connected research directions">
    <div>
      <span>01 · Autonomous mobility</span>
      <h3>Readable vehicle intent</h3>
      <p>How eHMI, V2X communication, and immersive simulation can make automated-vehicle behavior easier for pedestrians to understand and anticipate.</p>
    </div>
    <div>
      <span>02 · Human–robot interaction</span>
      <h3>Everyday coexistence</h3>
      <p>How service and companion robots should move, signal, and interrupt in shared urban environments without forcing people to adapt to them.</p>
    </div>
    <div>
      <span>03 · Urban intelligence</span>
      <h3>Human-centered smart cities</h3>
      <p>How emerging technologies—interactive infrastructure, V2X, digital-twin simulation, and city-scale sensing—can act as a shared language between people and machines, so that smart cities support human judgment rather than demand more of it.</p>
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
        <p class="research-lens__signal">People · clarity, trust, workload</p>
        <h3>What must a person understand before taking the next step?</h3>
        <p>I study how pedestrians read intent, form confidence, and make decisions—across cultures, traffic conditions, and levels of automation.</p>
        <p class="research-lens__proof"><strong>Study signal</strong><span>40 participants · Japan + Norway</span></p>
        <a href="{{ '/publications/' | relative_url }}">See the human studies →</a>
      </article>

      <article class="research-lens__story" id="lens-machines" role="tabpanel" aria-labelledby="lens-tab-machines" data-lens-panel="machines">
        <p class="research-lens__signal">Machines · AVs and robots</p>
        <h3>How should autonomy reveal intent without demanding attention?</h3>
        <p>I prototype vehicle eHMI, mobile roadside interfaces, and robot behaviors that make an autonomous system's next move easier to anticipate.</p>
        <p class="research-lens__proof"><strong>System signal</strong><span>Vehicle eHMI · mobile SPIU · service robots</span></p>
        <a href="{{ '/portfolio/' | relative_url }}">Explore the systems →</a>
      </article>

      <article class="research-lens__story" id="lens-places" role="tabpanel" aria-labelledby="lens-tab-places" data-lens-panel="places">
        <p class="research-lens__signal">Places · shared intelligence</p>
        <h3>Can the street itself become part of the conversation?</h3>
        <p>Connected urban infrastructure can coordinate shared guidance across vehicles and people. SPIU is my flagship case study: a roadside interface that turns connected-vehicle intent into understandable guidance in shared spaces.</p>
        <p class="research-lens__proof"><strong>Environment signal</strong><span>V2X · smart poles · shared spaces</span></p>
        <a href="{{ '/portfolio/spiu/' | relative_url }}">Meet SPIU →</a>
      </article>

      <article class="research-lens__story" id="lens-evidence" role="tabpanel" aria-labelledby="lens-tab-evidence" data-lens-panel="evidence">
        <p class="research-lens__signal">Evidence · beyond the demo</p>
        <h3>What remains convincing when the prototype meets the world?</h3>
        <p>Each idea advances through complementary evidence: concept design, immersive simulation, human–AI comparison, cross-cultural replication, and field deployment.</p>
        <p class="research-lens__proof"><strong>Research signal</strong><span>Sketch → VR → human + AI → field</span></p>
        <a href="{{ '/publications/' | relative_url }}">Trace the published evidence →</a>
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
