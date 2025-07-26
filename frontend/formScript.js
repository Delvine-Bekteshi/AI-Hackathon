document.addEventListener('DOMContentLoaded', () => {
  const moodCheckboxes = document.querySelectorAll('input[name="mood"]');

  moodCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const checked = document.querySelectorAll('input[name="mood"]:checked');
      if (checked.length > 2) {
        checkbox.checked = false;
        alert("You can only select up to two moods.");
      }
    });
  });
});
