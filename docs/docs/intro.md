# Introduction

> The FAQ page is available at
> [here](https://projects.open.models.platform/open-models-iecho/docs/faq).

Open Models iEcho (abbreviated as OA) is a chat-based and open-source assistant.
The vision of the project is to make a large language model that can run on a
single high-end consumer GPU. With some modifications, Open Models iEcho should
also be able to interface with other third-party applications easily as well as
retrieve information from databases and the Internet.

You can play with our current best model [here](https://open-models-iecho.io/chat)!

You should join the
[Open Models iEcho discord server](https://ykilcher.com/open-models-iecho-discord)
and/or comment on Github issues before making any major changes. Most dev
communications take place on the Discord server. There are four main areas that
you can work on:

1. Ranking, labelling and making responses in
   [open-models-iecho.io](https://open-models-iecho.io). You can take a look at
   [tasks docs section](https://projects.open.models.platform/open-models-iechocho/docs/tasks) for
   more information.
2. Curating datasets and performing data augmentation. This includes scraping,
   gathering other public datasets, etc. Most of these efforts will be
   concentrated at
   [`/data/datasets`](https://github.com/open-models-platform/open-models-iecho/tree/main/data/datasets)
   and are documented at
   [here](https://projects.open.models.platform/open-models-iechocho/docs/data/datasets).
3. Creating and fine-tuning Open Models iEcho itself. For that, you should pay
   special attention to
   [`/model`](https://github.com/open-models-platform/open-models-iecho/tree/main/model).
4. [open-models-iecho.io](https://open-models-iecho.io) dev. Take a close look at
   [`/website`](https://github.com/open-models-platform/open-models-iecho/tree/main/website) as
   well as
   [`/backend`](https://github.com/open-models-platform/open-models-iecho/tree/main/backend).

## GitHub folders explanation

> Do read the
> [developer guide](https://projects.open.models.platform/open-models-iechocho/docs/guides/developers)
> for further information.

Here's a list of first-level folders at
[Open Models iEcho's Github page](https://github.com/open-models-platform/open-models-iecho/).

- [`/ansible`](https://github.com/open-models-platform/open-models-iecho/tree/main/ansible) -
  for managing the full stack using
  [Ansible](<https://en.wikipedia.org/wiki/Ansible_(software)>)
- [`/assets`](https://github.com/open-models-platform/open-models-iecho/tree/main/assets) -
  contains logos
- [`/backend`](https://github.com/open-models-platform/open-models-iecho/tree/main/backend) -
  backend for open-models-iecho.io and discord bots, maybe helpful for locally test
  API calls
- [`/copilot`](https://github.com/open-models-platform/open-models-iecho/tree/main/copilot) -
  read more at AWS's [Copilot](https://aws.github.io/copilot-cli/). And no, this
  is not a folder that contains something similar to OpenAI's Codex.
- [`/data`](https://github.com/open-models-platform/open-models-iecho/tree/main/data) -
  contains
  [`/data/datasets`](https://github.com/open-models-platform/open-models-iecho/tree/main/data/datasets)
  that contains data scraping code and links to datasets on Hugging Face
- [`/deploy`](https://github.com/open-models-platform/open-models-iecho/tree/main/deploy)
- [`/discord-bot`](https://github.com/open-models-platform/open-models-iecho/tree/main/discord-bots) -
  frontend as discord bots for volunteer data collection
- [`/docker`](https://github.com/open-models-platform/open-models-iecho/tree/main/docker)
- [`/docs`](https://github.com/open-models-platform/open-models-iecho/tree/main/docs) - this
  website!
- [`/inference`](https://github.com/open-models-platform/open-models-iecho/tree/main/inference) -
  inference pipeline for Open Models iEcho model
- [`/model`](https://github.com/open-models-platform/open-models-iecho/tree/main/model) -
  currently contains scripts and tools for training/fine-tuning Open Models iEcho
  and other neural networks
- [\*`/notebooks`](https://github.com/open-models-platform/open-models-iecho/tree/main/inference) -
  DEPRECATED in favor of\*
  [`/data/datasets`](https://github.com/open-models-platform/open-models-iecho/tree/main/data/datasets).
  Contains jupyter notebooks for data scraping and augmentation
- [`/oasst-shared`](https://github.com/open-models-platform/open-models-iecho/tree/main/oasst-shared) -
  shared Python code for Open Models iEcho
- [`/scripts`](https://github.com/open-models-platform/open-models-iecho/tree/main/scripts) -
  contains various scripts for things
- [`/text-frontend`](https://github.com/open-models-platform/open-models-iecho/tree/main/text-frontend)
- [`/website`](https://github.com/open-models-platform/open-models-iecho/tree/main/website) -
  everything in [open-models-iecho.io](https://www.open-models-iecho.io), including
  gamification

## Principles

- We put the human in the center
- We need to get the MVP out fast, while we still have momentum
- We pull in one direction
- We are pragmatic
- We aim for models that can (or could, with some effort) be run on consumer
  hardware
- We rapidly validate our ML experiments on a small scale, before going to a
  supercluster
