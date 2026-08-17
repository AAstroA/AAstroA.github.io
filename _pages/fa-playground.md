---
layout: cosmos-page
title: "آزمایشگاه دانشجویان"
eyebrow: "آزمایشگاه تعاملی مالی"
description: "مفاهیم مالی کمی را در مرورگر تجربه کنید. ابزارها برای آموزش، آزمون فرض‌ها و ساختن شهود طراحی شده‌اند و به نصب نرم‌افزار یا سرور نیاز ندارند."
permalink: /fa/playground/
lang: fa
translation_url: /playground/
author_profile: false
---

<div class="playground-tabs" data-tabs data-reveal>
  <div class="playground-tabs__bar" role="tablist" aria-label="بخش‌های آزمایشگاه دانشجویان">
    <button id="tab-overview-fa" role="tab" aria-selected="true" aria-controls="panel-overview-fa" tabindex="0">نمای کلی</button>
    <button id="tab-lab-fa" role="tab" aria-selected="false" aria-controls="panel-lab-fa" tabindex="-1">آزمایش میانگین–واریانس</button>
    <button id="tab-source-fa" role="tab" aria-selected="false" aria-controls="panel-source-fa" tabindex="-1">راهنما و کد</button>
  </div>

  <section id="panel-overview-fa" class="playground-panel" role="tabpanel" aria-labelledby="tab-overview-fa">
    <div class="playground-intro">
      <div>
        <p class="section-kicker">آزمایش فعال</p>
        <h2>آزمایشگاه میانگین–واریانس</h2>
        <p>شبیه‌سازی تعاملی مارکویتز برای بررسی هندسه و منطق اقتصادی انتخاب پرتفوی. بازده مورد انتظار، نوسان، همبستگی و نرخ بدون ریسک را تغییر دهید و ببینید مجموعه فرصت‌ها و پرتفوی‌های بهینه چگونه هم‌زمان به‌روزرسانی می‌شوند.</p>
        <div class="cosmos-actions">
          <button class="cosmos-button cosmos-button--primary" type="button" data-open-tab="tab-lab-fa">اجرا در همین صفحه <span aria-hidden="true">←</span></button>
          <a class="cosmos-button" href="{{ '/Playground-for-Students/Mean-Variance-Lab/' | relative_url }}">نمایش تمام‌صفحه <span aria-hidden="true">↗</span></a>
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
      <div><strong>مرز کارا</strong><span>مرز حداقل واریانس دارایی‌های ریسکی، شامل شاخه‌های کارا و ناکارا.</span></div>
      <div><strong>پرتفوی‌های کلیدی</strong><span>پرتفوی حداقل واریانس سراسری، پرتفوی مماس و پرتفوی زنده برای بازده هدف.</span></div>
      <div><strong>تخصیص سرمایه</strong><span>دارایی بدون ریسک، خط بازار سرمایه و وزن‌های پرتفوی.</span></div>
      <div><strong>شهود ماتریسی</strong><span>مقادیر تعاملی ثابت‌های کلاسیک <span dir="ltr">A، B، C و D</span>.</span></div>
    </div>
  </section>

  <section id="panel-lab-fa" class="playground-panel playground-panel--embed" role="tabpanel" aria-labelledby="tab-lab-fa" hidden>
    <div class="embed-toolbar">
      <div><span class="live-dot" aria-hidden="true"></span><strong>آزمایشگاه میانگین–واریانس</strong><small>نسخه تعبیه‌شده از آزمایشگاه دانشجویان</small></div>
      <a href="{{ '/Playground-for-Students/Mean-Variance-Lab/' | relative_url }}">نمایش تمام‌صفحه ↗</a>
    </div>
    <iframe title="آزمایشگاه تعاملی میانگین–واریانس مارکویتز" data-src="{{ '/Playground-for-Students/Mean-Variance-Lab/' | relative_url }}" loading="lazy"></iframe>
  </section>

  <section id="panel-source-fa" class="playground-panel" role="tabpanel" aria-labelledby="tab-source-fa" hidden>
    <div class="source-grid">
      <article>
        <p class="section-kicker">روش استفاده</p>
        <h2>هر بار فقط یک فرض را تغییر دهید.</h2>
        <ol>
          <li>با اقتصاد پیش‌فرض دو دارایی شروع کنید و پرتفوی حداقل واریانس سراسری را بیابید.</li>
          <li>همبستگی را تغییر دهید و مشاهده کنید تنوع‌بخشی چگونه انحنای مرز را تغییر می‌دهد.</li>
          <li>نرخ بدون ریسک را اضافه کنید و پرتفوی مماس را با جوابِ فقط شامل دارایی‌های ریسکی مقایسه کنید.</li>
          <li>یک بازده هدف انتخاب کنید و وزن‌های حاصل و ثابت‌های ماتریسی را بررسی کنید.</li>
        </ol>
      </article>
      <article class="source-card">
        <span class="source-card__icon" aria-hidden="true">⌘</span>
        <h3>ابزار متن‌باز برای کلاس درس</h3>
        <p>این آزمایشگاه با <span dir="ltr">HTML، CSS و JavaScript</span> ساخته شده و همه محاسبات به‌صورت محلی در مرورگر اجرا می‌شوند.</p>
        <a class="cosmos-button" href="https://github.com/AAstroA/Playground-for-Students">مشاهده مخزن <span aria-hidden="true">↗</span></a>
      </article>
    </div>
  </section>
</div>

<section class="playground-roadmap" data-reveal>
  <p class="section-kicker">نقشه راه</p>
  <h2>مجموعه‌ای در حال رشد از آزمایش‌های مالی.</h2>
  <div class="roadmap-grid">
    <article class="is-live"><span>فعال</span><h3>آزمایشگاه میانگین–واریانس</h3><p>هندسه پرتفوی، پرتفوی مماس و تخصیص سرمایه.</p></article>
    <article><span>برنامه‌ریزی‌شده</span><h3>محیط آزمون قیمت‌گذاری دارایی</h3><p>بررسی عامل تنزیل، نمایش‌های بتا و محدودیت‌های مقطعی.</p></article>
    <article><span>برنامه‌ریزی‌شده</span><h3>آزمایشگاه مالی شبکه‌ای</h3><p>نمایش انتشار، مرکزیت و انتقال شوک در شبکه‌های مالی.</p></article>
  </div>
</section>
