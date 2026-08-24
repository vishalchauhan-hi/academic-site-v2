---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<p class="profile-kicker">Human–computer interaction · Autonomous mobility · Robotics</p>

<h1 class="profile-headline">Human intelligence for an autonomous world.</h1>

<p class="profile-lede">I am <strong>Vishal Chauhan</strong>, an HCI researcher at <a href="https://www.u-tokyo.ac.jp/en/">The University of Tokyo</a>. I design how people understand, trust, and act around autonomous vehicles, robots, and connected urban environments.</p>

<p class="profile-support">My doctoral work created the <strong>Smart Pole Interaction Unit (SPIU)</strong> and carried it from early sketches through immersive VR, human–AI comparison, cross-cultural evaluation, and an in-the-wild mobile prototype. In parallel, I contribute to Autoware at TIER IV and study human–robot interaction with mobile service robots at AIST.</p>

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
    <p>Interactive research lens</p>
    <h2 id="research-lens-title">Rotate the question, not the evidence.</h2>
    <span>The same autonomous encounter looks different depending on where you stand. Choose a lens to see how I frame it.</span>
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
        <p>SPIU moves communication beyond a single vehicle, using connected roadside infrastructure to coordinate understandable guidance in shared spaces.</p>
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
