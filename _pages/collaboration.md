---
layout: page
permalink: /collaboration/
title: Research
description: Training-data value, verifiable synthesis and evaluation, and model-internal signals.
nav: true
nav_order: 5
---

My research centers on **training-data value for foundation models**: which examples improve model capabilities, why they help, and how to identify them efficiently. I develop methods for data selection, quality modeling, and verifiable data synthesis and evaluation. I also study model-internal signals, including uncertainty, activations, and intervention responses, to guide learning and understand model behavior.

Explore [training-data value](#training-data-value), [verifiable synthesis and evaluation](#verifiable-synthesis-and-evaluation), and [model-internal signals](#model-internal-signals). My [full CV]({{ '/assets/pdf/Jinhao-Jing-CV.pdf' | relative_url }}) includes the publication list and research background.

## Training-data value

I study how data, training, and model capability relate. Prior signals assess a sample before training; posterior signals measure what training on it changed. My goal is to connect these signals, attribute capabilities to the data that produced them, and make data selection practical at corpus scale.

### One-Step-Train

Can a lightweight model predict which examples will help a larger model learn? I proposed **marginal training utility**, estimated through the loss change after one simulated update on an InternVL3-1B proxy. From 350K math chain-of-thought samples, the proxy selects the top 20% for training a 30B in-house model and Qwen3-VL-8B. These experiments report gains of **8.8 points over Full-SFT** and **5.6 points over LLM-as-a-Judge selection**, with **43% lower training cost**. One-Step-Train was adopted in the production data pipeline at SenseTime.

[Paper](https://arxiv.org/abs/2605.07488)

### Quality-scorer models

Distilling LLM judgments into a scorer raises three connected problems: preserving diversity during sampling, distinguishing documents within coarse score bands, and handling noisy pairwise ordering during training. I draw training pools for both quality and coverage, refine coarse annotations with a second pass, and expand difficult cases through active learning and LLM rewriting. The training objective accounts for how label distance affects ranking and regression. The resulting **8- and 20-head scorers reach an 86.7% adjacent-pair win rate on a 100K held-out set** and are used to filter pre-training corpora at IQuest, where my work also includes the approximately 1.2T-token WebCode corpus for IQuest-Q1.

[Research details in CV]({{ '/assets/pdf/Jinhao-Jing-CV.pdf' | relative_url }}#page=2) · [IQuest-Q1](https://github.com/IQuestLab/IQuest-Q1)

### RubricFlow

Coarse quality grades leave many documents tied within the same band. I built a **preference DAG** from LLM comparisons and used chains with shared anchors to induce local rubrics. On **19.7K blind pairs**, the induced within-band order holds at **68.8%**, compared with **55.8%** for the underlying coarse grades. This work explores how comparison structure can provide more useful supervision for fine-grained data selection.

[Research details in CV]({{ '/assets/pdf/Jinhao-Jing-CV.pdf' | relative_url }}#page=2)

### Combining signals

Quality scores are inexpensive to apply at scale, while influence functions, loss trajectories, and gradient alignment offer evidence about training effects at a higher cost. Sparse autoencoders offer another view by identifying the features a sample carries. I am interested in how to combine these sources: which signals to use across a corpus, which to spend near a selection boundary, and what their disagreement reveals.

## Verifiable synthesis and evaluation

I build training data, rewards, and benchmarks whose correctness can be checked with symbolic solvers and executable rules. My work focuses on multimodal reasoning and constrained decision-making, where the same verification machinery can support generation, evaluation, and diagnosis.

### GeoSym127K

Reliable geometric reasoning requires diagrams, answers, and reasoning traces that agree. I built a **neuro-symbolic synthesis engine** with geometric relations represented in SymPy, diagram topology generated under a type-conditioned grammar, and an analytic solver that verifies answers before they are retained. GeoSym127K provides **51K images, 127K answer-verified QA pairs, and 55K solver-verified chain-of-thought traces**. SFT and RL on GeoSym improve **Qwen3-VL-8B by 22.21 points on MathVerse (Vision-Only)**.

[Paper](https://arxiv.org/abs/2605.16371) · [Code](https://github.com/Tomie56/GeoSym127K) · [Dataset](https://huggingface.co/datasets/Tomie0506/GeoSym127K)

### GeoSym-Bench

The solver used to generate training data can also evaluate reasoning. GeoSym-Bench contains **511 expert-curated problems**, scored through answer and symbolic-equivalence checks. GeoSym training improves **Qwen3-VL-8B from 17.42% to 26.81%** on this benchmark; the reported Claude Opus 4.6 result is **27.79%**. These checks also support reasoning-error diagnosis in GeoSym-Debug and an extension to solid geometry in GeoSym3D.

[Paper](https://arxiv.org/abs/2605.16371) · [GeoSym-Reasoning notes](https://my.feishu.cn/wiki/TfvYw4H1eigkJpkUlCMcLs1xnlc)

### GeoClaw

How can a geometry agent check intermediate steps as well as its final answer? GeoClaw extends the verification machinery to tool-using problem solving, with checks governing parsing, solving, and tool calls. The project explores how an executable verifier can constrain an agent throughout its reasoning process.

[Project notes](https://my.feishu.cn/wiki/XYmsw5dCQilio8kAxkMcuuJ0nLb)

### YGO-Bench

Competitive card games combine executable rules, a combinatorial action space, and planning under hidden information. Drawing on my experience as a Yu-Gi-Oh! player, I built a benchmark from tournament decks and game states, with **every label checked by a rule engine**. YGO-Bench evaluates rule understanding and constrained decision-making in LLMs and agents, including chain and priority timing. My related YGO-Agent work explores game-playing systems in this setting.

[Benchmark](https://tomie56.github.io/YGO-Bench/) · [Interactive review](https://tomie56.github.io/YGO-Bench/review/)

## Model-internal signals

A model's final answer captures only part of its behavior. I study uncertainty, activation differences, and intervention responses as sources of supervision for reinforcement learning and evidence about how model behavior can be changed.

### Entropy-calibrated RLVR

A verifiable reward alone does not distinguish a confident solution from a lucky guess. Groups of uniformly correct or uniformly incorrect rollouts also provide no reward-based advantage. Our method uses a **zero-overhead token-entropy proxy with asymmetric calibration** to recover a within-group gradient while keeping the verifier unchanged.

[Paper](https://arxiv.org/abs/2602.22751)

### Activation-Space Exploration

Confidence describes sampled paths, but exploration also requires reaching alternatives. We cluster activation differences between correct and incorrect responses to the same problem into a **bank of latent exploration vectors**, then use them to steer later rollouts. At equal budget, **mean@8 over six math benchmarks exceeds GRPO by 4.87 points on Qwen3-1.7B-Base and 1.87 points on Qwen3-8B-Base**.

[Paper](https://arxiv.org/abs/2610.27012)

### Predictive Memory Localization

Locating a fact in a model does not establish whether an intervention at that location will be selective. I treat an intervention path, defined by the record, direction, layer, and strength, as a **forecast target**. Responses to a weak probe predict which paths can change the target while preserving semantic neighbors at strengths that have not yet been tried. This provides a way to assess the usable operating range of an intervention.

[Paper](https://arxiv.org/abs/2608.12892) · [Code](https://github.com/Tomie56/Predictive-Memory-Localization) · [Data](https://github.com/Tomie56/Predictive-Memory-Localization/tree/main/data)

## Collaboration

I welcome collaboration on training-data value, verifiable synthesis and evaluation, and model-internal signals. If you have a related research question, dataset, experiment, or engineering project in mind, please [email me](mailto:jinhaojing@link.cuhk.edu.cn).
