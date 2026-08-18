---
layout: cosmos-page
title: "ابزارهای آموزشی مالی"
eyebrow: "آزمایشگاه تعاملی"
description: "مدل‌های مالی را در مرورگر آزمایش کنید، فرض‌ها را تغییر دهید و اثر آن‌ها را بی‌درنگ روی نمودارها و پرتفوی‌های بهینه ببینید."
permalink: /fa/playground/
lang: fa
translation_url: /playground/
author_profile: false
---

<div class="playground-tabs" data-tabs data-reveal>
  <div class="playground-tabs__bar" role="tablist" aria-label="بخش‌های ابزارهای آموزشی">
    <button id="tab-overview-fa" role="tab" aria-selected="true" aria-controls="panel-overview-fa" tabindex="0">معرفی</button>
    <button id="tab-lab-fa" role="tab" aria-selected="false" aria-controls="panel-lab-fa" tabindex="-1">آزمایشگاه میانگین–واریانس</button>
    <button id="tab-volrisk-fa" role="tab" aria-selected="false" aria-controls="panel-volrisk-fa" tabindex="-1">آزمایشگاه سطح نوسان</button>
    <button id="tab-source-fa" role="tab" aria-selected="false" aria-controls="panel-source-fa" tabindex="-1">راهنما و کد</button>
  </div>

  <section id="panel-overview-fa" class="playground-panel" role="tabpanel" aria-labelledby="tab-overview-fa">
    <div class="playground-intro">
      <div>
        <p class="section-kicker">ابزار جدید</p>
        <h2>آزمایشگاه ریسک سطح نوسان</h2>
        <p>محیطی چندبخشی برای ساخت سطح نوسان ضمنی، تغییر عوامل تحلیل مؤلفه‌های اصلی، شبیه‌سازی سناریوهای هستون و تاریخی و بررسی اثر هر انتخاب مدلی بر ارزش در معرض ریسک و زیان مورد انتظار پرتفوی اختیار معامله.</p>
        <div class="cosmos-actions">
          <button class="cosmos-button cosmos-button--primary" type="button" data-open-tab="tab-volrisk-fa">اجرا در همین صفحه <span aria-hidden="true">←</span></button>
          <a class="cosmos-button" href="{{ '/Playground-for-Students/Volatility-Surface-Risk-Lab/' | relative_url }}">نمایش تمام‌صفحه <span aria-hidden="true">↗</span></a>
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
      <div><strong>ساخت سطح</strong><span>مقایسهٔ سطح بازار، چندجمله‌ای و ساختاری هستون در شبکهٔ سررسید و قیمت اعمال.</span></div>
      <div><strong>عوامل اصلی</strong><span>تغییر سطح، شیب، ساختار زمانی و انحنا در دو پایهٔ کوواریانس و همبستگی.</span></div>
      <div><strong>سناریوهای آینده</strong><span>مقایسهٔ مسیرهای فیزیکی هستون، حساسیت ریسک‌خنثی و شبیه‌سازی تاریخی.</span></div>
      <div><strong>اعتبارسنجی ریسک</strong><span>ارزش در معرض ریسک، زیان مورد انتظار و آزمون‌های پوشش برون‌نمونه.</span></div>
    </div>
  </section>

  <section id="panel-lab-fa" class="playground-panel playground-panel--embed" role="tabpanel" aria-labelledby="tab-lab-fa" hidden>
    <div class="embed-toolbar">
      <div><span class="live-dot" aria-hidden="true"></span><strong>آزمایشگاه میانگین–واریانس</strong><small>همه محاسبات در مرورگر انجام می‌شوند</small></div>
      <a href="{{ '/Playground-for-Students/Mean-Variance-Lab/' | relative_url }}">نمایش تمام‌صفحه ↗</a>
    </div>
    <iframe title="آزمایشگاه تعاملی میانگین–واریانس مارکویتز" data-src="{{ '/Playground-for-Students/Mean-Variance-Lab/' | relative_url }}" loading="lazy"></iframe>
  </section>

  <section id="panel-volrisk-fa" class="playground-panel playground-panel--embed playground-panel--risk" role="tabpanel" aria-labelledby="tab-volrisk-fa" hidden>
    <div class="embed-toolbar">
      <div><span class="live-dot" aria-hidden="true"></span><strong>آزمایشگاه ریسک سطح نوسان</strong><small>سطح نوسان، عوامل اصلی، سناریوهای هستون و اعتبارسنجی ریسک</small></div>
      <a href="{{ '/Playground-for-Students/Volatility-Surface-Risk-Lab/' | relative_url }}">نمایش تمام‌صفحه ↗</a>
    </div>
    <iframe title="آزمایشگاه تعاملی سطح نوسان و ریسک پرتفوی اختیار معامله" data-src="{{ '/Playground-for-Students/Volatility-Surface-Risk-Lab/' | relative_url }}" loading="lazy"></iframe>
  </section>

  <section id="panel-source-fa" class="playground-panel" role="tabpanel" aria-labelledby="tab-source-fa" hidden>
    <div class="source-grid">
      <article>
        <p class="section-kicker">پیشنهاد برای شروع</p>
        <h2>هر بار فقط یک فرض را تغییر دهید</h2>
        <ol>
          <li>در آزمایشگاه میانگین–واریانس ارتباط بازده، کوواریانس و مرز کارا را بررسی کنید.</li>
          <li>در آزمایشگاه سطح نوسان نمایش بازار، چندجمله‌ای و هستون را مقایسه کنید.</li>
          <li>عوامل اصلی یا پارامترهای سناریو را تغییر دهید و توزیع سود و زیان پرتفوی را ببینید.</li>
          <li>نتایج شبیه‌سازی را با آزمون‌های برون‌نمونهٔ سال‌های ۲۰۰۵ تا ۲۰۲۱ مقایسه کنید.</li>
        </ol>
      </article>
      <article class="source-card">
        <span class="source-card__icon" aria-hidden="true">⌘</span>
        <h3>ابزار متن‌باز برای کلاس و مطالعه شخصی</h3>
        <p>هر دو آزمایشگاه با <span class="latin" dir="ltr">HTML, CSS, and JavaScript</span> ساخته شده‌اند و همه محاسبات زنده به‌صورت محلی در مرورگر اجرا می‌شوند.</p>
        <a class="cosmos-button" href="https://github.com/AAstroA/Playground-for-Students">مشاهده کد پروژه <span aria-hidden="true">↗</span></a>
      </article>
    </div>
  </section>
</div>

<section class="playground-roadmap" data-reveal>
  <p class="section-kicker">نقشه راه</p>
  <h2>ابزارهای آموزشی بیشتری در راه است</h2>
  <div class="roadmap-grid">
    <article class="is-live"><span>فعال</span><h3>آزمایشگاه میانگین–واریانس</h3><p>مرز کارا، پرتفوی مماس و تخصیص سرمایه.</p></article>
    <article class="is-live"><span>جدید</span><h3>آزمایشگاه سطح نوسان</h3><p>بازسازی سطح، سناریوهای نوسان تصادفی و اعتبارسنجی ریسک.</p></article>
    <article><span>در دست طراحی</span><h3>آزمایشگاه شبکه‌های مالی</h3><p>انتشار شوک، مرکزیت و انتقال ریسک در شبکه‌های مالی.</p></article>
  </div>
</section>
