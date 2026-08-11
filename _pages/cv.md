---
layout: page
permalink: /cv/
title: cv
description: Education, research, and industry experience.
nav: true
nav_order: 3
---

<div class="cv-actions"><a href="{{ '/assets/pdf/Jinhao-Jing-CV.pdf' | relative_url }}">Download full CV (PDF)</a></div>

## Education

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">2024 - 2026</div>
    <div class="timeline-body">
      <h3>M.S. in Artificial Intelligence and Robotics</h3>
      <div class="meta">The Chinese University of Hong Kong, Shenzhen</div>
      <p>GPA 3.78/4.0, ranked 7/117. Advised by Prof. Benyou Wang.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2019 - 2024</div>
    <div class="timeline-body">
      <h3>B.Eng. in Mechanical Engineering</h3>
      <div class="meta">Shanghai Jiao Tong University</div>
      <p>GPA 3.3/4.3. National Gold Award, China International College Students' Innovation Competition.</p>
    </div>
  </div>
</div>

## Research and Industry

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">Jun 2026 - present</div>
    <div class="timeline-body">
      <h3>Pre-training Data Algorithm Intern</h3>
      <div class="meta">Ubiquant / IQuest Lab, Beijing</div>
      <ul>
        <li>Led the end-to-end WebCode data pipeline from 2.5 TB of raw data to 60M selected samples (380B tokens).</li>
        <li>Trained and deployed a 1B quality scorer with a 0.954 pairwise win rate on a 30K validation set.</li>
        <li>Ran distributed inference on 256 H200 GPUs with throughput of roughly five billion records per day.</li>
      </ul>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">Apr 2026 - present</div>
    <div class="timeline-body">
      <h3>Visiting Student</h3>
      <div class="meta">Tsinghua University / BNRist, remote</div>
      <p>Researching multimodal representation engineering and rollout-time steering with Prof. Yuwang Wang.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">Jul 2025 - Apr 2026</div>
    <div class="timeline-body">
      <h3>Research Algorithm Intern</h3>
      <div class="meta">SenseTime Research, Shenzhen</div>
      <ul>
        <li>Built multimodal mid-training data pipelines and delivered more than 2M examples totaling over 2B tokens.</li>
        <li>Designed SFT and RL experiments on H100 clusters to validate data filtering and augmentation strategies.</li>
        <li>Developed One-Step-Train and the GeoSym neuro-symbolic data synthesis engine.</li>
      </ul>
    </div>
  </div>
</div>

## Selected Projects

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">2025 - 2026</div>
    <div class="timeline-body">
      <h3>GeoSym127K</h3>
      <p>A scalable neuro-symbolic engine and dataset for verifiable multimodal geometric reasoning: 51K images, 127K verified QA pairs, and 55K solver-verified chain-of-thought examples.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2026 - present</div>
    <div class="timeline-body">
      <h3>Rollout-Time Steering for RLVR</h3>
      <p>Activation-level interventions for GRPO/RLVR reasoning. Linear steering improved Math500 acc@8 from 61.42% to 64.25% over the GRPO baseline.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2025</div>
    <div class="timeline-body">
      <h3>One-Step-Train</h3>
      <p>An incremental optimization utility framework for efficient multimodal data selection, reducing training cost by 43% while outperforming Full-SFT.</p>
    </div>
  </div>
</div>
