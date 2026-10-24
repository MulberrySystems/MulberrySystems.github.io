# New section: AI agents (shared by all round-2 options) — v2

Placement: directly after the hero, before the featured minefield case. Nav link "AI agents" (id="agents").

Eyebrow: New · AI agents
Title: Let AI agents work with the systems you already run
Intro: You don't need to rebuild to use AI. We put a secure, agent-ready layer on top of the API you already have, then build the agents that use it.

Flow strip (3 real steps, connected):
1. Your existing API
2. Headless mode — authenticated MCP server
3. Agents — chat and multi-agent flows

## Headless mode
Your system, operated by agents
We turn your existing API into an MCP server that people sign in to with their own account. They connect the AI assistant they already use, like Claude or ChatGPT, and work with your system through it, with their usual permissions and no new interface to build.
- MCP server built on your existing API
- Users sign in, agents act with their permissions
- A log of every action an agent takes

## Agent chat
An assistant inside your product
A chat assistant inside your product or internal tools that answers from your own data and gets tasks done, with a person approving the steps that matter.
- Chat embedded in web apps and internal tools
- Answers grounded in your documents and data
- Approval steps for sensitive actions

## Multi-agent flows
Teams of agents for complex work
For work too big for one prompt, we build long-running multi-agent flows in LangGraph. Specialised agents pass tasks to each other, check each other's output, and deliver what the user asked for. Every step is traced in Langfuse, so you can see how each result was produced.
- Orchestration with LangGraph
- Long-running flows with handoffs and review steps
- Tracing and evaluation with Langfuse

CTA under the section: "Have a system you want agents to use? Tell us about it →" linking to #contact

Stack section: add a "Agents" group (or add to the existing AI group): MCP, LangGraph, Langfuse.
Hero paragraph mention stays: "...and now AI agents that work with the systems you already run."
