import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  log: console
})

octokit.request("/");