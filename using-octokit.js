import { Octokit } from "octokit";

const octokit = new Octokit({
  log: console
})

octokit.request("/");