document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq li");

  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      alert(`Aqui está mais informação sobre: ${item.textContent}`);
    });
  });

  document.getElementById("frete-calculator").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Calculando frete...");
  });
});
