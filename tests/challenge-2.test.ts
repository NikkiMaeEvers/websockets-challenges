import fs from 'fs';
import path from 'path';

test('Challenge 2: Correct Answer', () => {
  const filePath = path.join(__dirname, '../src/challenge2.md');
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract the student's answer from the markdown file
  const answerMatch = content.match(/Your Answer\*\*: (.)/);
  const studentAnswer = answerMatch ? answerMatch[1] : null;

  // Correct answer is 'C'
  const correctAnswer = 'C';

  expect(studentAnswer).toBe(correctAnswer);
});
