fetch('data.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch JSON data");
    }
    return response.json();
  })
  .then((jsonData) => {
    let totalScore = 0;
    jsonData.forEach((item, index) => {
        totalScore += item.score;
      // Find the corresponding summary container using index
      const scoreElement = document.querySelectorAll('.summary-container-score')[index];

      if (scoreElement) {
        scoreElement.textContent = `${item.score}`; // Update the score
      }
    });

    const finalScore = Math.round(totalScore / jsonData.length);

    const score = document.getElementById('scorefinal');
    score.textContent = `${finalScore}`;
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });