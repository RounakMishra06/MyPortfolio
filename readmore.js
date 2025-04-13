document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const moreText = this.previousElementSibling?.querySelector('.more-text');
      if (!moreText) return;
  
      moreText.classList.toggle('show');
      this.textContent = moreText.classList.contains('show') ? 'Read Less' : 'Read More';
  
      if (moreText.classList.contains('show')) {
        moreText.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const cardInner = this.closest('.service-box').querySelector('.card-inner');
      cardInner.classList.toggle('flipped');
  
      this.textContent = cardInner.classList.contains('flipped') ? 'Read Less' : 'Read More';
    });
  });
  console.log("JS file loaded");
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const cardInner = this.closest('.service-box').querySelector('.card-inner');
      cardInner.classList.toggle('slid');
      this.textContent = cardInner.classList.contains('slid') ? 'Read Less' : 'Read More';
    });
  });
  <script>
  let isSlid = false;


</script>
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.previousElementSibling;
    card.classList.toggle('flipped');

    button.textContent = card.classList.contains('flipped') ? 'Read Less' : 'Know More';
  });
});

console.log("JS file loaded successfully");
<script>
  document.querySelectorAll('.toggle-btn').forEach(button =  {
    button.addEventListener('click', () => {
      const card = button.previousElementSibling;
      card.classList.toggle('flipped');
      button.textContent = card.classList.contains('flipped') ? 'Read Less' : 'Know More';
    });
  });
</script>




