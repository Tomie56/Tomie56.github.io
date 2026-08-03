---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<p class="intro-lede">My research focuses on how training data can be constructed, measured, selected, and used to steer model behavior. I work across data engines, scalable training infrastructure, and controlled model evaluation.</p>

<section class="project-entry" markdown="1">
<h2>GeoSym127K</h2>
<p class="project-meta">SenseTime Research Institute | Oct 2025 - Feb 2026</p>

As first author, I developed a scalable neuro-symbolic synthesis engine for multimodal geometric reasoning. The engine uses arbitrary-precision symbolic manifolds and type-conditioned grammars to evolve problem topology and generate difficulty-controlled, answer-verifiable tasks.

- 51K high-resolution images and 127K answer-verified question-answer pairs across three groups and ten difficulty levels.
- 55K chain-of-thought examples verified by the analytical SymGT solver, plus the expert-curated GeoSym-Bench benchmark.
- On Qwen3-VL-8B, SFT improved MathVerse Vision-Only by 22.21 points and WeMath by 6.19 points; on Qwen2.5-VL-7B, SFT and RL raised MathVista-MINI from 59.6% to 70.4%.

<div class="link-row">
  <a href="https://arxiv.org/abs/2605.16371v1">ArXiv</a>
  <a href="https://github.com/Tomie56/GeoSym127K">GitHub</a>
  <a href="https://huggingface.co/datasets/Tomie0506/GeoSym127K">Hugging Face</a>
</div>
</section>

<section class="project-entry" markdown="1">
<h2>Rollout-Time Representation Steering</h2>
<p class="project-meta">Tsinghua University | May 2026 - Present</p>

This project studies activation-space interventions for outcome-based GRPO/RLVR, where sparse correctness rewards do not directly constrain internal reasoning states. I implemented full-parameter GRPO training for Qwen3-1.7B with `verl`, and activation extraction and steering hooks with `vLLM`.

- Constructed 512 paired correct/incorrect rollout trajectories and compared CAA, linear probes, and logistic probes.
- GRPO increased Math500 acc@8 from 47.33% to 61.42%; linear steering further reached 64.25% acc@8 and 82.80% pass@8.
- Ongoing work studies dynamic intervention during GRPO rollouts.
</section>

<section class="project-entry" markdown="1">
<h2>One-Step-Train</h2>
<p class="project-meta">SenseTime Research Institute | Aug 2025 - Dec 2025</p>

One-Step-Train reframes data selection as ranking incremental optimization utility. A lightweight proxy model estimates each sample's marginal train value through a single update, providing a training-grounded alternative to black-box LLM judges.

- Evaluated on 350K mathematical chain-of-thought examples for 30B-scale backbones and Qwen3-VL-8B-Instruct.
- Reduced GPU training time by 43% and total compute by 17% against the LLM-as-a-Judge baseline.
- A top-20% subset outperformed the LLM-judge baseline by 5.6 points and the full-SFT baseline by 8.8 points.

<div class="link-row">
  <a href="https://arxiv.org/abs/2605.07488">ArXiv</a>
</div>
</section>
