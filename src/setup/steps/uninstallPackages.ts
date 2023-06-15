import { $ } from "execa";

export async function uninstallPackages() {
	await $`pnpm remove chalk execa js-yaml`;
	await $`pnpm remove @clack/prompts @octokit/request-error @types/git-url-parse @types/js-yaml @types/prettier all-contributors-cli c8 git-remote-origin-url git-url-parse globby npm-user octokit replace-in-file title-case tsx -D`;
}