---
layout: cosmos-page
title: "Playground for Students"
eyebrow: "Interactive finance laboratory"
description: "Explore quantitative finance concepts in the browser. The tools are designed for teaching, experimentation, and intuition-building—no installation or backend required."
permalink: /playground/
author_profile: false
---

<div class="playground-tabs" data-tabs data-reveal>
  <div class="playground-tabs__bar" role="tablist" aria-label="Student playground sections">
    <button id="tab-overview" role="tab" aria-selected="true" aria-controls="panel-overview" tabindex="0">Overview</button>
    <button id="tab-lab" role="tab" aria-selected="false" aria-controls="panel-lab" tabindex="-1">Mean-Variance Lab</button>
    <button id="tab-source" role="tab" aria-selected="false" aria-controls="panel-source" tabindex="-1">Notes & source</button>
  </div>

  <section id="panel-overview" class="playground-panel" role="tabpanel" aria-labelledby="tab-overview">
    <div class="playground-intro">
      <div>
        <p class="section-kicker">Current experiment</p>
        <h2>Mean-Variance Lab</h2>
        <p>An interactive Markowitz simulator for exploring the geometry and economics of portfolio choice. Change expected returns, volatilities, correlations, and the risk-free rate, then watch the opportunity set and optimal portfolios update in real time.</p>
        <div class="cosmos-actions">
          <button class="cosmos-button cosmos-button--primary" type="button" data-open-tab="tab-lab">Launch inside this page <span aria-hidden="true">→</span></button>
          <a class="cosmos-button" href="{{ '/Playground-for-Students/Mean-Variance-Lab/' | relative_url }}">Open full screen <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="lab-orbit" aria-hidden="true">
        <span class="lab-orbit__axis lab-orbit__axis--x"></span>
        <span class="lab-orbit__axis lab-orbit__axis--y"></span>
        <span class="lab-orbit__frontier"></span>
        <span class="lab-orbit__line"></span>
        <span class="lab-orbit__point"></span>
      </div>
    </div>

    <div class="feature-matrix">
      <div><strong>Efficient frontier</strong><span>Risky-asset minimum-variance frontier, including efficient and inefficient branches.</span></div>
      <div><strong>Key portfolios</strong><span>Global minimum-variance, tangency, and live target-return portfolios.</span></div>
      <div><strong>Capital allocation</strong><span>Risk-free asset, Capital Market Line, and portfolio weights.</span></div>
      <div><strong>Matrix intuition</strong><span>Interactive values for the classical constants A, B, C, and D.</span></div>
    </div>
  </section>

  <section id="panel-lab" class="playground-panel playground-panel--embed" role="tabpanel" aria-labelledby="tab-lab" hidden>
    <div class="embed-toolbar">
      <div><span class="live-dot" aria-hidden="true"></span><strong>Mean-Variance Lab</strong><small>Embedded from the student playground</small></div>
      <a href="{{ '/Playground-for-Students/Mean-Variance-Lab/' | relative_url }}">Open full screen ↗</a>
    </div>
    <iframe title="Interactive Markowitz mean-variance laboratory" data-src="{{ '/Playground-for-Students/Mean-Variance-Lab/' | relative_url }}" loading="lazy"></iframe>
  </section>

  <section id="panel-source" class="playground-panel" role="tabpanel" aria-labelledby="tab-source" hidden>
    <div class="source-grid">
      <article>
        <p class="section-kicker">How to use it</p>
        <h2>Move one assumption at a time.</h2>
        <ol>
          <li>Start with the default two-asset economy and identify the global minimum-variance portfolio.</li>
          <li>Change correlation and observe how diversification bends the frontier.</li>
          <li>Add the risk-free rate and compare the tangency portfolio with the risky-only solution.</li>
          <li>Select a target return and inspect the implied weights and matrix constants.</li>
        </ol>
      </article>
      <article class="source-card">
        <span class="source-card__icon" aria-hidden="true">⌘</span>
        <h3>Open-source classroom tool</h3>
        <p>The laboratory is implemented in HTML, CSS, and JavaScript. All calculations run locally in the browser.</p>
        <a class="cosmos-button" href="https://github.com/AAstroA/Playground-for-Students">View repository <span aria-hidden="true">↗</span></a>
      </article>
    </div>
  </section>
</div>

<section class="playground-roadmap" data-reveal>
  <p class="section-kicker">Roadmap</p>
  <h2>A growing collection of finance experiments.</h2>
  <div class="roadmap-grid">
    <article class="is-live"><span>Live</span><h3>Mean-Variance Lab</h3><p>Portfolio geometry, the tangency portfolio, and capital allocation.</p></article>
    <article><span>Planned</span><h3>Asset-Pricing Sandbox</h3><p>Explore discount factors, beta representations, and cross-sectional restrictions.</p></article>
    <article><span>Planned</span><h3>Network Finance Lab</h3><p>Visualize propagation, centrality, and shock transmission in financial networks.</p></article>
  </div>
</section>
