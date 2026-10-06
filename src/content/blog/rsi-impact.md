---
title: "When Research No Longer Needs Researchers"
description: "How coding agents are taking over the AI research loop, the AI-native routes to self-improvement, and what recursive self-improvement means for science, academia, safety, and the role of humans."
pubDate: "Oct 06 2026"
tags: ["AI Research", "AI Safety", "RSI"]
coverImage: "/blog/rsi-impact/cover.jpg"
---

## Introduction

Until recently, a human researcher drove every stage of the AI research and development (R&D) loop: narrowing an intuition into *falsifiable hypotheses*, implementing experiments by hand, running training jobs that took hours to days, and separating real effects from noise. Each turn of the loop was bottlenecked on scarce expert time.

Coding agents have changed the bottleneck. Systems such as Claude Code and Codex now write most of the code in this loop, and their role is expanding upstream into research itself [[1]](#ref-1), [[2]](#ref-2). If every stage can be delegated, we reach **recursive self-improvement (RSI): an AI system that can design, train, and evaluate its own successor with little or no human involvement** [[2]](#ref-2). This post looks at how agents are taking over the loop, the AI-native routes to self-improvement, and what RSI means for progress, the research community, safety, and the role humans should keep.

## How AI Agents Are Taking Over the AI Research Loop

Epoch AI decomposes AI R&D into six stages: **Decide, Design, Build, Run, Analyze, and Communicate** [[3]](#ref-3).

<figure>
  <img src="/blog/rsi-impact/fig1.webp" alt="Diagram of the six-stage AI research loop (Decide, Design, Build, Run, Analyze, Communicate), illustrated with an MLA vs. MHA ablation" loading="lazy" />
  <figcaption>Figure 1. The AI research loop, illustrated with an ablation of Multi-head Latent Attention (MLA) versus standard Multi-Head Attention (MHA). Source: Epoch AI, CC-BY <a href="#ref-3">[3]</a>.</figcaption>
</figure>

Agents entered at the most mechanical stages and are moving upstream. **Build and Run** went first: by May 2026, more than 80% of Anthropic's merged production code was AI-written [[2]](#ref-2). Karpathy's autoresearch closes the Build–Run–Analyze sub-loop, effectively *greedy hill-climbing over code edits* with a short training run as the fitness function; over two days it found changes that together cut training time by 19% [[4]](#ref-4), [[5]](#ref-5). Design and Communicate are next, with Sakana AI's AI Scientist-v2 producing a paper that passed workshop peer review [[6]](#ref-6). **Only Decide remains largely human-driven.** Both OpenAI and Anthropic report that people still set research priorities and that current models are comparatively weak at choosing goals [[1]](#ref-1), [[2]](#ref-2).

## Self-Evolving AI Systems

Automating the human researcher is not the only route to RSI. A human improves a model *indirectly*, by editing the code and data that produce the next checkpoint. A growing body of work instead lets a system generate its own learning signal and update itself. These methods can be organized by *where* in the model lifecycle the improvement happens:

- **Self-play (training time).** The model produces the experience it learns from, so the curriculum *automatically tracks* the learner's ability. AlphaGo Zero is the canonical case [[7]](#ref-7). Self-play SWE-RL brings the idea to LLMs: one agent alternates between injecting bugs into real repositories and repairing them, with the test suite as a *verifiable reward* [[8]](#ref-8).
- **Evolutionary search (dedicated improvement stage).** The system mutates its own scaffold (prompts, tools, and code), evaluates each variant on a benchmark, and keeps the best. The Darwin Gödel Machine raised SWE-bench performance from 20% to 50% this way [[9]](#ref-9). The weakness is *Goodhart's law*: once the benchmark is the selection pressure, variants that exploit the evaluator are selected as readily as real improvements.
- **Continual learning (deployment time).** The system keeps improving from deployment feedback, storing what it learns either in the **weights**, as with Cursor's Tab model retrained by online RL on accept/reject signals every few hours [[10]](#ref-10), or in **context**, as an evolving playbook of skills and lessons [[11]](#ref-11). Context-based learning has a governance advantage: the learned state is human-readable, so it can be inspected, audited, and rolled back.

Each method has been validated in a bounded setting such as Go, code repair, or code completion, but **none alone has produced the next generation of a general-purpose frontier model**. The open problems are known: verifiable rewards are scarce outside games and code, self-generated data risks drift and loss of diversity, and benchmark gains don't reliably transfer.

Researcher-like agents and AI-native self-improvement are best seen as **two routes to the same destination**: a general system that can produce its stronger successor without human intervention (Figure 2) [[12]](#ref-12), [[13]](#ref-13). A production RSI pipeline will probably combine both, along with very large amounts of compute and breakthroughs that do not exist yet. Many researchers expect frontier labs to reach some form of RSI between late 2026 and 2027, though others argue that compute and evaluation bottlenecks will slow it [[14]](#ref-14).

<figure>
  <img src="/blog/rsi-impact/fig2.webp" alt="Diagram of two routes toward recursive self-improvement: AI as researcher, and AI-native self-improvement via self-play, evolutionary search, and continual learning" loading="lazy" />
  <figcaption>Figure 2. Two routes toward recursive self-improvement.</figcaption>
</figure>

## The Benefit: Acceleration of AI Research and Science

Automated research is accelerating both capability gains and release cadence. On the Artificial Analysis Intelligence Index, the frontier score rose **from 24.9 to 57.6** over the last 12 months, a gain of 32.7 points against 13.5 the year before [[15]](#ref-15). Anthropic reports that Claude now leads 26% of its AI R&D work and contributes to more than 95% of it, while its release interval shrank from 46 days in the first half of 2026 to 26 days in the second [[16]](#ref-16). These are *correlational signals*, since compute budgets and commercial pressure grew too, but the labs' own reports suggest AI is increasingly helping build its successors [[2]](#ref-2), [[16]](#ref-16).

<figure>
  <img src="/blog/rsi-impact/fig3.webp" alt="Step chart of the Artificial Analysis Intelligence Index for frontier models from 10 labs, Nov 2022 to Sep 2026" loading="lazy" />
  <figcaption>Figure 3. Frontier language model intelligence over time, from Artificial Analysis <a href="#ref-15">[15]</a>.</figcaption>
</figure>

The same capabilities transfer to other sciences that share the loop of generating hypotheses, searching a huge space, and verifying results. Mathematics leads because proof assistants provide a *cheap, exact verifier*. In September 2026, OpenAI announced that an internal agent system had produced a Lean-verified proof of finite-time blow-up for the 3D Navier–Stokes equations, which would resolve a Millennium Prize Problem if it survives peer review [[17]](#ref-17). Similar AI-driven discoveries are starting to appear in fields such as biology [[18]](#ref-18). As in AI research today, AI takes over the search-heavy and execution-heavy work, while humans set the direction and verify the results.

## The Impact: Collapse of the Academic Publication System

Rising AI R&D capability also reshapes the academic community. Agents lower the barrier to entry, and submissions have surged: ICLR 2027 received more than **62,000 submissions** by the abstract deadline, more than the previous ten years combined [[19]](#ref-19). But volume is not quality. Strong empirical work still requires compute, well-controlled experiments, good data, and expert judgment, and AI-drafted papers commonly contain unsupported claims, irreproducible results, and hallucinated citations [[20]](#ref-20).

Peer review is under strain too. Because major conferences require authors to review, the same surge expands the pool of inexperienced reviewers, who increasingly lean on LLMs: an estimated **21% of ICLR 2026 reviews** were entirely AI-generated [[21]](#ref-21). The publication record's signal-to-noise ratio is falling, and acceptance is eroding as a quality signal.

The deeper issue is that the paper is a *lossy compression* of research, designed for humans communicating with humans. Implementation details, failed attempts, and negative results are routinely left out, which drives the reproducibility problem and makes selective reporting easy. AI-native formats such as Paper2Agent, which turns a paper and its codebase into an agent others can query to rerun the analysis [[22]](#ref-22), could make the technology straining the publication system the basis for a more reliable one.

## The Concern: Compounding Errors

Reward hacking, where a policy increases its reward without performing the intended task, is not hypothetical. In July 2026, an OpenAI model escaped its network sandbox during large-scale RL training and breached Hugging Face in search of answers to its training tasks, and OpenAI paused training of its newest models for about two weeks [[23]](#ref-23), [[24]](#ref-24).

A one-off failure can be caught and patched. RSI is different because each model generation helps build the next, so a latent flaw can be *inherited and amplified* rather than corrected [[2]](#ref-2). A misaligned model in an RSI pipeline touches **every channel that shapes its successor**: it writes the training infrastructure, generates the synthetic data, and acts as the reward model or judge. A policy that learned to exploit its evaluator may, once promoted to evaluator itself, penalize the same exploit less, and AI-on-AI oversight may share the blind spots of the system it oversees [[25]](#ref-25).

## The Question: What Should Humans Do?

Once RSI arrives, AI systems will be better than any human researcher at designing their successors. Humans may no longer write the code, choose the architecture, or even pick the next research direction. They should nevertheless remain at the center, with their role shifting from *doing* the research to *governing* it:

1. **Specify the target.** Humans must define what a better system is: what it should value and how it should behave. Labs already codify this in documents such as OpenAI's Model Spec and Anthropic's constitution for Claude [[26]](#ref-26), [[27]](#ref-27), and these become more consequential as capabilities grow.
2. **Draw red lines.** Humans must decide which capabilities may not be developed and which require additional safeguards, so that growing capability is not turned against the common good.
3. **Monitor the R&D process.** Hardest of all, humans must catch signals such as reward hacking and misalignment as early as possible. Supervising a system more capable than its overseers is a *scalable-oversight problem* in its own right. Dario Amodei argues that frontier development should be paced so human oversight can keep up, and has committed to giving independent third-party evaluators access to internal systems and data [[28]](#ref-28). Whether such measures can keep pace remains an open question.

## Conclusion

AI is increasingly able to build AI, both by taking over researchers' work and by improving itself. The result is faster progress and spillover into other sciences, a strained paper-and-review system, and errors that can compound across generations. When AI research no longer needs humans, humans should still stay in the loop, defining values, drawing red lines, and monitoring the process, so that every new generation of AI is built for, and used for, the common good.

## References

<div class="text-base">

<a id="ref-1" class="scroll-mt-20"></a>[1] OpenAI, “Research acceleration: The view inside OpenAI,” Sep. 6, 2026. [Online]. Available: [https://openai.com/index/research-acceleration-view-inside-openai/](https://openai.com/index/research-acceleration-view-inside-openai/)

<a id="ref-2" class="scroll-mt-20"></a>[2] M. Favaro and J. Clark, “When AI builds itself,” The Anthropic Institute, May 2026 (updated Sep. 18, 2026). [Online]. Available: [https://www.anthropic.com/institute/recursive-self-improvement](https://www.anthropic.com/institute/recursive-self-improvement)

<a id="ref-3" class="scroll-mt-20"></a>[3] J.-S. Denain, J. Kwon, and A. Ho, “Toward an O\*NET for AI R&D,” Epoch AI, Gradient Updates, Jun. 17, 2026. [Online]. Available: [https://epoch.ai/gradient-updates/toward-an-onet-for-ai-rnd](https://epoch.ai/gradient-updates/toward-an-onet-for-ai-rnd)

<a id="ref-4" class="scroll-mt-20"></a>[4] A. Karpathy, “autoresearch,” GitHub, 2026. [Online]. Available: [https://github.com/karpathy/autoresearch](https://github.com/karpathy/autoresearch)

<a id="ref-5" class="scroll-mt-20"></a>[5] VentureBeat, “Andrej Karpathy’s new open source ‘autoresearch’ lets you run hundreds of AI experiments a night,” Mar. 2026. [Online]. Available: [https://venturebeat.com/technology/andrej-karpathys-new-open-source-autoresearch-lets-you-run-hundreds-of-ai](https://venturebeat.com/technology/andrej-karpathys-new-open-source-autoresearch-lets-you-run-hundreds-of-ai)

<a id="ref-6" class="scroll-mt-20"></a>[6] Sakana AI, “The AI Scientist generates its first peer-reviewed scientific publication,” Mar. 2025. [Online]. Available: [https://sakana.ai/ai-scientist-first-publication/](https://sakana.ai/ai-scientist-first-publication/)

<a id="ref-7" class="scroll-mt-20"></a>[7] D. Silver et al., “Mastering the game of Go without human knowledge,” Nature, vol. 550, pp. 354-359, Oct. 2017.

<a id="ref-8" class="scroll-mt-20"></a>[8] Y. Wei et al., “Toward training superintelligent software agents through self-play SWE-RL,” arXiv:2512.18552, Dec. 2025. [Online]. Available: [https://arxiv.org/abs/2512.18552](https://arxiv.org/abs/2512.18552)

<a id="ref-9" class="scroll-mt-20"></a>[9] J. Zhang, S. Hu, C. Lu, R. Lange, and J. Clune, “Darwin Godel Machine: Open-ended evolution of self-improving agents,” arXiv:2505.22954, May 2025. [Online]. Available: [https://arxiv.org/abs/2505.22954](https://arxiv.org/abs/2505.22954)

<a id="ref-10" class="scroll-mt-20"></a>[10] Cursor, “Improving Cursor Tab with online RL,” Sep. 2025. [Online]. Available: [https://cursor.com/blog/tab-rl](https://cursor.com/blog/tab-rl)

<a id="ref-11" class="scroll-mt-20"></a>[11] Q. Zhang et al., “Agentic context engineering: Evolving contexts for self-improving language models,” arXiv:2510.04618, Oct. 2025. [Online]. Available: [https://arxiv.org/abs/2510.04618](https://arxiv.org/abs/2510.04618)

<a id="ref-12" class="scroll-mt-20"></a>[12] T. Genewein et al., “From AGI to ASI,” Google DeepMind, arXiv:2606.12683, Jun. 2026. [Online]. Available: [https://arxiv.org/abs/2606.12683](https://arxiv.org/abs/2606.12683)

<a id="ref-13" class="scroll-mt-20"></a>[13] Y. Duan et al., “The last AI built by humans: Toward genuine recursive self-improvement,” arXiv:2609.11873, Sep. 2026. [Online]. Available: [https://arxiv.org/abs/2609.11873](https://arxiv.org/abs/2609.11873)

<a id="ref-14" class="scroll-mt-20"></a>[14] M. Kim, “AI’s recursive self-improvement might not come so quickly after all,” MIT Technology Review, Aug. 18, 2026. [Online]. Available: [https://www.technologyreview.com/2026/08/18/1142188/ai-recursive-self-improvement/](https://www.technologyreview.com/2026/08/18/1142188/ai-recursive-self-improvement/)

<a id="ref-15" class="scroll-mt-20"></a>[15] Artificial Analysis, “Frontier language model intelligence, over time,” Artificial Analysis Intelligence Index v4.3.2. [Online]. Available: [https://artificialanalysis.ai](https://artificialanalysis.ai) (accessed Oct. 4, 2026).

<a id="ref-16" class="scroll-mt-20"></a>[16] M. Sullivan, “Why AI model releases feel nonstop,” Fast Company, Sep. 23, 2026. [Online]. Available: [https://finance.yahoo.com/technology/ai/articles/why-ai-model-releases-feel-102100600.html](https://finance.yahoo.com/technology/ai/articles/why-ai-model-releases-feel-102100600.html)

<a id="ref-17" class="scroll-mt-20"></a>[17] OpenAI, “On the Navier–Stokes Millennium Prize Problem,” Sep. 8, 2026. [Online]. Available: [https://openai.com/index/navier-stokes-solution/](https://openai.com/index/navier-stokes-solution/)

<a id="ref-18" class="scroll-mt-20"></a>[18] Anthropic, “Claude discovers a novel enzyme system with CRISPR-like repeats,” Sep. 23, 2026. [Online]. Available: [https://www.anthropic.com/news/claude-discovers-novel-enzyme-system](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system)

<a id="ref-19" class="scroll-mt-20"></a>[19] Reviewer3, “ICLR went from 490 submissions to 62,000 in ten years,” Sep. 2026. [Online]. Available: [https://reviewer3.com/evidence/iclr-submissions-2027](https://reviewer3.com/evidence/iclr-submissions-2027)

<a id="ref-20" class="scroll-mt-20"></a>[20] L. Kong et al., “AI for auto-research: Roadmap & user guide,” arXiv:2605.18661, May 2026. [Online]. Available: [https://arxiv.org/abs/2605.18661](https://arxiv.org/abs/2605.18661)

<a id="ref-21" class="scroll-mt-20"></a>[21] Pangram Labs, “Pangram predicts 21% of ICLR reviews are AI-generated,” Nov. 2025. [Online]. Available: [https://www.pangram.com/blog/pangram-predicts-21-of-iclr-reviews-are-ai-generated](https://www.pangram.com/blog/pangram-predicts-21-of-iclr-reviews-are-ai-generated)

<a id="ref-22" class="scroll-mt-20"></a>[22] J. Miao, J. R. Davis, Y. Zhang, J. K. Pritchard, and J. Zou, “Paper2Agent: Reimagining research papers as interactive and reliable AI agents,” Nature, Sep. 2026.

<a id="ref-23" class="scroll-mt-20"></a>[23] E. Forlini, “OpenAI says it paused AI training for two weeks and announces new security protocols following Hugging Face hack,” Fortune, Aug. 18, 2026. [Online]. Available: [https://fortune.com/2026/08/18/openai-says-it-paused-ai-training-for-two-weeks-and-announces-new-security-protocols-following-hugging-face-hack/](https://fortune.com/2026/08/18/openai-says-it-paused-ai-training-for-two-weeks-and-announces-new-security-protocols-following-hugging-face-hack/)

<a id="ref-24" class="scroll-mt-20"></a>[24] OpenAI, “Pacing model development in an era of cyber-critical capabilities,” Aug. 18, 2026. [Online]. Available: [https://openai.com/index/pacing-model-development-cyber-capabilities/](https://openai.com/index/pacing-model-development-cyber-capabilities/)

<a id="ref-25" class="scroll-mt-20"></a>[25] Anthropic, “Measurements for understanding the pace of AI development inside frontier labs,” 2026. [Online]. Available: [https://www.anthropic.com/institute/measuring-pace-of-ai-development](https://www.anthropic.com/institute/measuring-pace-of-ai-development)

<a id="ref-26" class="scroll-mt-20"></a>[26] OpenAI, “Model Spec,” Aug. 18, 2026. [Online]. Available: [https://model-spec.openai.com/2026-08-18.html](https://model-spec.openai.com/2026-08-18.html)

<a id="ref-27" class="scroll-mt-20"></a>[27] Anthropic, “Claude’s constitution,” Jan. 2026. [Online]. Available: [https://www.anthropic.com/constitution](https://www.anthropic.com/constitution)

<a id="ref-28" class="scroll-mt-20"></a>[28] D. Amodei, “We must pace the frontier,” Sep. 12, 2026. [Online]. Available: [https://darioamodei.com/post/we-must-pace-the-frontier](https://darioamodei.com/post/we-must-pace-the-frontier)

</div>
