const problems = {
  '2023-09-09': {
    source: '2000 AMC 12A Problem 11',
    statement: 'Two non-zero real numbers, $a$ and $b,$ satisfy $ab = a - b$. Which of the following is a possible value of $\\dfrac{a}{b} + \\dfrac{b}{a} - ab$?',
    A: '- 2',
    B: '\\dfrac {- 1}{2}',
    C: '\\dfrac {1}{3}',
    D: '\\dfrac {1}{2}',
    E: '2',
  },
}
export default function getProblem() {
  let key = new Date().toISOString().split('T')[0];
  return problems[key];
}