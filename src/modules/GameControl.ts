import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";


class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  //创建存储移动方向的字符串,决定蛇的运动方向
  direction: string = '';
  //判断游戏是否结束
  isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();


    //开始游戏
    this.init();
  }


  //初始化，，调用直接开始
  init() {
    //绑定键盘按下事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.run();
  }
  //创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    //修改direction属性
    this.direction = event.key;
  }

  //蛇移动的方法
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据按键方向来计算X值和Y值（未更新）
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        // 向上移动 top 减少
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        // 向下移动 top 增加
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        // 向左移动 left 减少
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        // 向右移动 left 增加
        X += 10;
        break;
    }

    //判断是否吃到食物
    this.checkEat(X, Y)


    //判断撞墙
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e: any) {
      alert(e.message)
      this.isLive = false;
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  //检查是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      //食物位置改变
      this.food.change();
      //分数加一
      this.scorePanel.addScore();
      //蛇身体加一
      this.snake.addBody();
    }
  }
}
export default GameControl;