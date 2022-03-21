//记分牌
class ScorePanel {
  //分数和等级
  score: number;
  level: number;

  //分数和等级所在元素
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  //限制等级
  maxLevel: number;
  //限制每多少分升级
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10){
    this.score = 0;
    this.level = 1;
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  //加分
  addScore () {
    //分数自增
    this.scoreEle.innerHTML = `${++this.score}`;
    //判断分数是多少
    if (this.score % this.upScore === 0) {
      this.addLevel();
    }
  }

  //加等级
  addLevel () {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = `${++this.level}`
    }
  }
}
export default ScorePanel;

// const scorePanel = new ScorePanel(10,2);
// scorePanel.addScore();
// scorePanel.addScore();
// scorePanel.addScore()

// for (let i = 0; i< 200;i++) {
//   scorePanel.addScore()
// }