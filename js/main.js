const form = document.getElementById('submit');
const selectedRating = document.getElementById('rating');
const ratingCard = document.getElementById('ratingCard');
const thanksCard = document.getElementById('thanksCard');
const rating = document.querySelectorAll('input[type="radio"]');

// When submit button is clicked, toggle visibility for the primary card to the thank you card
// Find the rating that was selected and pass that value to the document
form.addEventListener('click', (e) => {
  //   prevent page redirect
  e.preventDefault();
  // loop through radio buttons to find the button that is checked
  rating.forEach((r) => {
    //   confirm that a button is checked
    if (r.checked) {
      // assign value of checked button to innerHTML on thank you card
      selectedRating.innerHTML = r.id;
      //   hide primary card
      ratingCard.classList.add('hidden');
      //   show thank you card
      thanksCard.classList.remove('hidden');
    }
  });
});
