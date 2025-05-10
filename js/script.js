const correctAnswers = {
  gfm: {
    lesson1: [1, 2, 2, 1, 1],
    lesson2: [1, 2, 1, 1, 1],
    lesson3: [1, 2, 2, 1, 1],
    lesson4: [1, 1, 2, 2, 2],
    lesson5: [1, 1, 2, 2, 2],
    lesson6: [1, 1, 2, 2, 1],
    lesson7: [1, 1, 2, 1, 2],
    lesson8: [2, 2, 2, 0, 1],
    lesson9: [1, 2, 2, 2, 1],
    lesson10: [1, 2, 1, 1, 0]
  },
  gfl: {
    lesson1: [1, 2, 1, 2, 2],
    lesson2: [1, 1, 2, 2, 1],
    lesson3: [1, 1, 2, 1, 1],
    lesson4: [2, 2, 0, 1, 1],
    lesson5: [1, 2, 1, 1, 1],
    lesson6: [1, 1, 1, 2, 2],
    lesson7: [1, 1, 2, 2, 2],
    lesson8: [1, 2, 2, 1, 1],
    lesson9: [1, 1, 1, 2, 1],
    lesson10: [1, 1, 2, 1, 0]
  },
  "grid-forming-inverters": {
    lesson1: [1, 1, 1, 1, 1],
    lesson2: [1, 1, 2, 2, 1],
    lesson3: [1, 3, 0, 2, 1],
    lesson4: [1, 1, 1, 2, 2],
    lesson5: [2, 1, 1, 1, 2],
    lesson6: [1, 2, 1, 1, 1],
    lesson7: [1, 1, 0, 2, 1],
    lesson8: [1, 2, 1, 2, 1],
    lesson9: [1, 1, 2, 1, 2],
    lesson10: [0, 1, 1, 0, 1]
  },
  course2: {
    lesson1: [1, 0, 2, 2, 2],
    lesson2: [1, 2, 2, 1, 2],
    lesson3: [2, 1, 1, 2, 1],
    lesson4: [2, 2, 2, 2, 2],
    lesson5: [2, 2, 1, 1, 2],
    lesson6: [2, 1, 2, 2, 2],
    lesson7: [1, 2, 1, 2, 2],
    lesson8: [1, 2, 1, 3, 2],
    lesson9: [1, 1, 1, 1, 2],
    lesson10: [1, 3, 2, 2, 1]
  },
  course3: {
    lesson1: [2, 1, 2, 1, 2],
    lesson2: [1, 1, 1, 1, 1],
    lesson3: [2, 1, 2, 1, 1],
    lesson4: [1, 2, 2, 1, 2],
    lesson5: [2, 0, 2, 2, 1],
    lesson6: [1, 1, 1, 1, 2],
    lesson7: [1, 1, 1, 1, 2],
    lesson8: [2, 0, 2, 1, 2],
    lesson9: [1, 1, 1, 1, 1],
    lesson10: [1, 1, 1, 2, 2]
  },
  course4: {
    lesson1: [1, 2, 1, 2, 1],
    lesson2: [1, 2, 2, 2, 1],
    lesson3: [1, 1, 2, 1, 2],
    lesson4: [2, 2, 1, 1, 1],
    lesson5: [1, 2, 1, 2, 1],
    lesson6: [2, 2, 2, 2, 2],
    lesson7: [1, 2, 2, 1, 2],
    lesson8: [1, 2, 2, 1, 2],
    lesson9: [2, 2, 2, 1, 2],
    lesson10: [2, 2, 2, 1, 2]
  }
};

// ✅ Helper: extract course/lesson from URL
function getLessonKey() {
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);
  const course = parts[parts.length - 2];
  const lesson = parts[parts.length - 1].replace(".html", "");
  return { course, lesson };
}

// ✅ Scoring logic
function submitQuiz(quizContainer) {
  const { course, lesson } = getLessonKey();
  const correct = correctAnswers[course]?.[lesson];
  if (!correct) {
    alert("⚠️ No answer key found for this lesson.");
    return;
  }

  const questions = quizContainer.querySelectorAll(".quiz-question");
  let score = 0;

  questions.forEach((question, i) => {
    const selected = question.querySelector("input[type='radio']:checked");
    const labels = Array.from(question.querySelectorAll("label"));
    const selectedIndex = labels.findIndex(label => label.contains(selected));
    if (selectedIndex === correct[i]) score++;
  });

  alert(`✅ Your score: ${score} / ${questions.length}`);
}
