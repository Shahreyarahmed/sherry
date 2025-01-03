// You can add JavaScript functionalities here
document.addEventListener('DOMContentLoaded', function() {
    // Example: Alert message on button click
    document.querySelector('.btn-primary').addEventListener('click', function() {
        alert('Welcome to Music Player Manager!');
    });
});
// Highlight selected song
document.querySelectorAll(".list-group-item").forEach(item => {
    item.addEventListener("click", () => {
      // Remove highlight from all items
      document.querySelectorAll(".list-group-item").forEach(song => {
        song.classList.remove("active-song");
      });
      // Highlight the selected item
      item.classList.add("active-song");
    });
  });
  