import { openSecurityPrompt } from "../packages/Oauth/securityPrompt";

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.id === "postUpdateBtn") {
    openSecurityPrompt(() => {
      const input = document.getElementById("updateInput") as HTMLTextAreaElement;
      const log = document.getElementById("changelog") as HTMLElement;

      if (!input.value.trim()) return;

      log.innerHTML = `<div class="mb-2">• ${input.value}</div>` + log.innerHTML;
      input.value = "";
    });
  }
});
