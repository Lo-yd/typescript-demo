class Snake{
  //蛇头的元素
  head: HTMLElement;
  //蛇身体（包括蛇头）
  bodies: HTMLCollection;
  //获取蛇的容器
  element: HTMLElement;

  constructor () {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.bodies = this.element.getElementsByTagName("div");
  }

  //获取蛇头坐标
  get X () {
    return this.head.offsetLeft;
  }
  //获取蛇头坐标
  get Y () {
    return this.head.offsetTop;
  }

  //设置蛇头坐标
  set X (value) {
    if (value === this.X) return;
    if (value < 0 || value > 290) {
      throw new Error("撞墙了")
    }
    this.moveBody();
    this.head.style.left = `${value}px`
  }

  //设置蛇头坐标
  set Y (value) {
    if (value === this.Y) return;
    if (value < 0 || value > 290) {
      throw new Error("撞墙了")
    }
    this.moveBody();
    this.head.style.top = `${value}px`
  }

  //添加身体
  addBody () {
    //向element中添加一个div
    this.element.appendChild(document.createElement('div'))
  }

  //身体移动，从后往前移动
  moveBody () {
    for (let i = this.bodies.length - 1; i > 0; i--){
      //前面身体
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
      
      (this.bodies[i] as HTMLElement).style.left = `${X}px`;
      (this.bodies[i] as HTMLElement).style.top = `${Y}px`;
    }
  }
}
export default Snake;