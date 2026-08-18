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
    <button id="tab-volrisk" role="tab" aria-selected="false" aria-controls="panel-volrisk" tabindex="-1">Vol-Surface Risk Lab</button>
    <button id="tab-source" role="tab" aria-selected="false" aria-controls="panel-source" tabindex="-1">Notes & source</button>
  </div>

  <section id="panel-overview" class="playground-panel" role="tabpanel" aria-labelledby="tab-overview">
    <div class="playground-intro">
      <div>
        <p class="section-kicker">New experiment</p>
        <h2>Volatility Surface Risk Lab</h2>
        <p>A multi-tab laboratory for shaping the implied-volatility surface, moving PCA factors, simulating Heston and historical scenarios, and tracing each modeling choice into option-portfolio VaR and expected shortfall.</p>
        <div class="cosmos-actions">
          <button class="cosmos-button cosmos-button--primary" type="button" data-open-tab="tab-volrisk">Launch inside this page <span aria-hidden="true">→</span></button>
          <a class="cosmos-button" href="{{ '/Playground-for-Students/Volatility-Surface-Risk-Lab/' | relative_url }}">Open full screen <span aria-hidden="true">↗</span></a>
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
      <div><strong>Surface studio</strong><span>Interactive maturity × moneyness surfaces with flexible, polynomial, and Heston representations.</span></div>
      <div><strong>PCA factors</strong><span>Move level, skew, term-slope, and curvature factors in covariance or correlation bases.</span></div>
      <div><strong>Future scenarios</strong><span>Compare physical Heston paths, Q sensitivities, paired FHS, and historical factor shocks.</span></div>
      <div><strong>Risk validation</strong><span>Connect scenario P&amp;L to VaR, expected shortfall, coverage tests, and model limitations.</span></div>
    </div>
  </section>

  <section id="panel-lab" class="playground-panel playground-panel--embed" role="tabpanel" aria-labelledby="tab-lab" hidden>
    <div class="embed-toolbar">
      <div><span class="live-dot" aria-hidden="true"></span><strong>Mean-Variance Lab</strong><small>Embedded from the student playground</small></div>
      <a href="{{ '/Playground-for-Students/Mean-Variance-Lab/' | relative_url }}">Open full screen ↗</a>
    </div>
    <iframe title="Interactive Markowitz mean-variance laboratory" data-src="{{ '/Playground-for-Students/Mean-Variance-Lab/' | relative_url }}" loading="lazy"></iframe>
  </section>

  <section id="panel-volrisk" class="playground-panel playground-panel--embed playground-panel--risk" role="tabpanel" aria-labelledby="tab-volrisk" hidden>
    <div class="embed-toolbar">
      <div><span class="live-dot" aria-hidden="true"></span><strong>Volatility Surface Risk Lab</strong><small>Surface, PCA, Heston scenarios, VaR, ES, and backtests</small></div>
      <a href="{{ '/Playground-for-Students/Volatility-Surface-Risk-Lab/' | relative_url }}">Open full screen ↗</a>
    </div>
    <iframe title="Interactive volatility-surface and option-portfolio risk laboratory" data-src="{{ '/Playground-for-Students/Volatility-Surface-Risk-Lab/' | relative_url }}" loading="lazy"></iframe>
  </section>

  <section id="panel-source" class="playground-panel" role="tabpanel" aria-labelledby="tab-source" hidden>
    <div class="source-grid">
      <article>
        <p class="section-kicker">How to use the laboratories</p>
        <h2>Move one assumption at a time.</h2>
        <ol>
          <li>Use Mean-Variance Lab to connect expected returns, covariance, and the efficient frontier.</li>
          <li>Use Vol-Surface Risk Lab to compare market, polynomial, and Heston surface representations.</li>
          <li>Move PCA factors or scenario parameters, then inspect the resulting portfolio loss distribution.</li>
          <li>Compare simulated risk with the documented 2005–2021 out-of-sample backtests.</li>
        </ol>
      </article>
      <article class="source-card">
        <span class="source-card__icon" aria-hidden="true">⌘</span>
        <h3>Open-source classroom tool</h3>
        <p>Both laboratories are implemented in HTML, CSS, and JavaScript. All live calculations run locally in the browser.</p>
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
    <article class="is-live"><span>New</span><h3>Vol-Surface Risk Lab</h3><p>Surface reconstruction, stochastic-volatility scenarios, and risk validation.</p></article>
    <article><span>Planned</span><h3>Network Finance Lab</h3><p>Visualize propagation, centrality, and shock transmission in financial networks.</p></article>
  </div>
</section>
