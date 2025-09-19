---
layout: page
title: Cignal
description: An app that neatly compiles US legislation in one place and uses a (local) LLM to summarize each article. 
img: assets/img/cignal.jpg
importance: 2
category: creative
---

Cignal is the project my best friend, Sawyer, and I created to try and learn new programming skills while doing something we deemed as meaningful. 

The app is not complete yet, but it currently uses the US Congress's API to pull bills and scrape the text before feeding that to an Ollama model LLM (currently using Mistral 7B, probably will change). Some bills can literally be thousands of pages, so we feel using a LLM to summarize the bill is a worthwhile use of AI. However, we are mindful of the impact large computation centers (like the ones that host GPT5 API) can have on the environment, which is why we chose to limit ourselves to Ollama models. These models can run on local computational resources, like ones own GPU (provided you have a compatible GPU). 

We quickly learned the limitations of local AI, as neither of us have industrial grade GPUs to run the excessively *large* LLMs, so we would break the LLM if we tried to summarize more than a few dozen pages. But adversity breeds innovation! We learned how to use chunk our input using XML, and then feed the LLM meaningful snippets with XPath.

The app is currently based in Python, but it might be rewritten in Javascript in the future.