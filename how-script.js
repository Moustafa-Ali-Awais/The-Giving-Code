// JavaScript to handle animation
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  const delayBetweenSteps = 1000; // Delay in ms between each step

  let currentStep = 0;

  const revealSteps = () => {
    if (currentStep < steps.length) {
      steps[currentStep].classList.add("active");
      currentStep++;
      setTimeout(revealSteps, delayBetweenSteps);
    }
  };

  // Start revealing steps after a small delay
  setTimeout(revealSteps, 1000);
});
