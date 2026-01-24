
# Look-Ahead-Bench

**A standardized benchmark for detecting look-ahead bias in Large Language Models for finance**


---

## Overview

**Look-Ahead-Bench** is a standardized benchmark designed to measure **look-ahead bias** in Large Language Models (LLMs) used for financial decision-making.

Instead of evaluating isolated question-answering or factual recall, the benchmark evaluates **end-to-end trading behavior** using realistic agentic trading workflows. It measures how model performance degrades when moving from potentially memorized historical periods to genuinely unseen market regimes, allowing practitioners to distinguish **true predictive reasoning** from **memorization-driven performance**.

---

## Why Look-Ahead Bias Matters

Financial LLMs are often trained on web-scale data containing post-hoc market analyses and explicit descriptions of historical asset performance. This can lead to **training data leakage**, where models appear predictive in backtests but fail catastrophically once deployed beyond their knowledge cutoff.

Look-Ahead-Bench provides a practical way to detect this issue before real capital is at risk.

---

## Benchmark at a Glance

- **Evaluation style:** End-to-end agentic trading
- **Framework:** AI Hedge Fund (multi-agent LLM system)
- **Metric:** Alpha and **Alpha Decay**
- **Assets:** AAPL, MSFT, GOOGL, NVDA, TSLA
- **Periods:**  
  - P1 (In-sample): Apr 2021 – Sep 2021  
  - P2 (Out-of-sample): Jul 2024 – Dec 2024  

---

## Models Evaluated

- **Standard LLMs:** Llama 3.1 (8B, 70B), DeepSeek 3.2  
- **Point-in-Time LLMs:** Pitinf-Small, Pitinf-Medium, Pitinf-Large  

---

## Key Findings (Summary)

- Standard foundation models exhibit **severe alpha decay** when evaluated out-of-sample.
- Larger standard models often generalize *worse* due to stronger memorized priors.
- Point-in-Time (PiT) models show **stable or improving performance** as they scale.
- Demonstrates a clear **scaling paradox** in the presence of look-ahead bias.

---


The benchmark runs fully in simulation and does **not** require live trading or brokerage APIs.

---

## How to Contribute

Look-Ahead-Bench is intended to evolve into a **community-standard diagnostic** for temporal bias in financial LLMs. Contributions are strongly encouraged and can take many forms, ranging from incremental improvements to major extensions of the benchmark.

### 1. Expand the Asset Universe

The current benchmark focuses on five large-cap U.S. technology stocks, which are especially prone to memorization. Valuable contributions include:

* Adding **small-cap stocks**, which are less represented in training corpora
* Expanding to **non-tech sectors** (e.g., Healthcare, Industrials, Energy)
* Supporting **international equities**
* Extending to **other asset classes** (ETFs, commodities, FX, crypto)

These extensions help test whether observed behavior generalizes beyond highly visible assets.

---

### 2. Add New Trading Agents or Frameworks

Look-Ahead-Bench currently relies on the [AI Hedge Fund framework](https://github.com/benstaf/aihedgefund_lookaheadbench/blob/main/README.md). The benchmark would benefit greatly from the integration of additional agentic systems, including (but not limited to):

* FinGPT
* FinMem / FinCon
* FinRL-DeepSeek
* TradingAgents
* Hedge-Agents
* FinAgent, FinRobot, StockAgent
* QuantAgent and factor-based LLM systems

Each added agent should follow the same **point-in-time constraints** and evaluation protocol to ensure fair comparison.

---

### 3. Extend Model Coverage

You are encouraged to evaluate:

* New open-source foundation models
* Proprietary or commercial LLMs (when legally permissible)
* Alternative Point-in-Time or temporally aware models
* Models with explicit decontamination or logit-adjustment techniques

When adding a model, please clearly document:

* Training cutoff assumptions
* Prompting strategy
* Inference parameters

---

### 4. Improve Bias Diagnostics and Metrics

While **alpha decay** is the core metric, the benchmark is intentionally extensible. Possible contributions include:

* Alternative decay or stability metrics
* Statistical tests for memorization or leakage
* Confidence-weighted or risk-adjusted performance measures
* Cross-period or rolling-window evaluations

The goal is to strengthen the benchmark’s ability to *separate reasoning from recall*.

---

### 5. Expand Backtesting Methodology

More advanced validation techniques are welcome, including:

* Multiple non-overlapping evaluation periods
* Synthetic or counterfactual market scenarios
* Stress tests across different market regimes
* Anti-overfitting diagnostics (e.g., RAS-style methods)

---

### Contribution Guidelines

* Open an **issue** to discuss major changes before implementation
* Submit a **pull request** with:

  * Clear motivation
  * Reproducible experiments
  * Documentation of assumptions

All contributions should aim to improve **realism, robustness, and bias detection**.

---

