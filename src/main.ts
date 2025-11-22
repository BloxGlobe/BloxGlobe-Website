import { openSecurityPrompt } from "../packages/Oauth/securityPrompt.js"; 
// 👆 IMPORTANT: .js extension because the compiled output in /dist uses .js

// Wait until DOM is loaded so router-injected pages work
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    // Handle Site Updates → Post Update Button
    if (target && target.id === "postUpdateBtn") {
      openSecurityPrompt(() => {
        const input = document.getElementById(
          "updateInput"
        ) as HTMLTextAreaElement;
        const log = document.getElementById("changelog") as HTMLElement;

        if (!input || !log) return; // Avoid router timing errors
        if (!input.value.trim()) return;

        // Add update
        log.innerHTML =
          `<div class="mb-2">• ${input.value}</div>` + log.innerHTML;

        input.value = "";
      });
    }
  });
});
