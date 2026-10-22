---
layout: page
permalink: /collaboration/
title: Research
description: Research directions, current questions, and opportunities to work together.
nav: true
nav_order: 5
---

I am interested in collaboration on data-centric methods for foundation models, especially projects where better training data can lead to more capable, reliable, and efficient systems.

More broadly, I am interested in model-internal signals as a source of supervision: how uncertainty, activations, and intervention responses can inform learning, including our recent work on [activation-space exploration for RLVR](https://arxiv.org/abs/2610.27012).

## Training-data value

My primary focus is **training-data value for pre-training and mid-training**: understanding which examples are useful, why they are useful, and how to select or attribute data efficiently. I am particularly interested in combining maintainable rubric and prompt families with posterior training signals and representation-level evidence, including sparse autoencoders (SAEs), to improve quality modeling, data selection, attribution, and utility estimation at scale.

A question running through my work on [One-Step-Train](https://arxiv.org/abs/2605.07488), quality scorers, and RubricFlow is how assessments made before training relate to the capabilities a sample actually helps a model acquire. Quality scores are affordable at corpus scale; training signals provide more direct evidence of utility, but cost more. I want to understand where each is useful, when their disagreement matters, and how to preserve distinctions that coarse quality grades miss.

## Data synthesis and evaluation

I work on data synthesis and evaluation under verifiable frameworks: building reliable generation, filtering, and evaluation pipelines whose outputs can be checked rather than judged only by model preference. Geometric reasoning, including **GeoClaw** and **GeoSym-Bench**, is one direction in which I explore these ideas.

Through [GeoSym127K](https://arxiv.org/abs/2605.16371), I have become interested in reusing the same verification machinery across synthesis, evaluation, and agent behavior. Geometric constraints can check generated answers, identify reasoning errors, and constrain tool calls. This makes verification a reusable part of the research process, with results that can be rerun and inspected.

## Game-playing agents

I am also developing LLM- and agent-based game-playing systems, including [**YGO-Bench**](https://tomie56.github.io/YGO-Bench/) and **YGO-Agent**. YGO-Bench studies rule grounding, chain and priority timing, long-horizon decision-making, and recovery after an interrupted line of play in an engine-verified environment.

As a Yu-Gi-Oh! player, I am interested in situations where knowing individual rules is only the beginning: an agent must apply them at the right time and plan under hidden information. Executable rules make it possible to examine these decisions against a concrete game state.

## Project notes

- [YGO-Bench: Can an LLM or agent become a strong Yu-Gi-Oh! player?](https://tomie56.github.io/YGO-Bench/), with an [interactive review interface](https://tomie56.github.io/YGO-Bench/review/)
- [GeoClaw: Tool-using geometric problem-solving agent](https://my.feishu.cn/wiki/XYmsw5dCQilio8kAxkMcuuJ0nLb)
- [GeoSym-Reasoning](https://my.feishu.cn/wiki/TfvYw4H1eigkJpkUlCMcLs1xnlc)

If you are interested in collaborating on any of these directions, please [email me](mailto:jinhaojing@link.cuhk.edu.cn). I would be happy to discuss research ideas, datasets, experiments, or engineering projects.
