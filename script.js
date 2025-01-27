document.getElementById('user-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get user input
  const age = document.getElementById('age').value;
  const sex = document.getElementById('sex').value;
  const weight = document.getElementById('weight').value;
  const fitnessLevel = document.getElementById('fitness-level').value;

  // Generate exercises based on input
  const exercises = generateExercises(age, sex, weight, fitnessLevel);

  // Display results
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `<h2>Recommended Exercises:</h2><ul>${exercises.map(ex => `<li>${ex}</li>`).join('')}</ul>`;
});

function generateExercises(age, sex, weight, fitnessLevel) {
  // Basic logic to generate exercises
  let exercises = [];
  if (fitnessLevel === 'beginner') {
    exercises = ['Bodyweight Squats', 'Push-ups', 'Plank'];
  } else if (fitnessLevel === 'intermediate') {
    exercises = ['Dumbbell Bench Press', 'Lunges', 'Deadlifts'];
  } else if (fitnessLevel === 'advanced') {
    exercises = ['Barbell Squats', 'Pull-ups', 'Deadlifts'];
  }
  return exercises;
}
