interface Scores {
  math: number;
  english: number;
  science: number;
  [anything: string]: number;
}

const scores: Scores = {
math:90,
english:45,
science:92,
athletics:100,
french: 75,
spanish:70
};
console.log(scores);
