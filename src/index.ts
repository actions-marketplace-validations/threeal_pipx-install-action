import * as core from "@actions/core";
import { pipxInstallAction } from "pipx-install-action";

async function main() {
  const pkgs = core
    .getInput("packages", { required: true })
    .split(/(\s+)/)
    .filter((pkg) => pkg.trim().length > 0);

  await pipxInstallAction(...pkgs);
}

main().catch((err) => core.setFailed(err));
