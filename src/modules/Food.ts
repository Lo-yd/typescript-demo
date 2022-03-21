//定义食物
class Food {
  //定义属性表示食物的元素
  element: HTMLElement;
  constructor () {
    /*末尾加个感叹号 表示this.element一定有值，
    不加会提示this.element可能为空的警告*/
    //获取food给element
    this.element = document.getElementById("food")!;
  }

  // 获取食物 X轴
  get X(){
    return this.element.offsetLeft;
  }

  // 获取食物 Y轴
  get Y(){
    return this.element.offsetTop;
  }

  //修改食物位置
  change () {
    //生成随机位置
    //食物坐标整10
    let left = Math.floor(Math.random() * 30) * 10;
    let top = Math.floor(Math.random() * 30) * 10;

    this.element.style.left = `${left}px`;
    this.element.style.left = `${top}px`;
  }
}
export default Food;
// const food = new Food()
// food.change()