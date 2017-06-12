(function (fly) {

    function Game() {
        this.imgsArr = ['birds', 'land', 'pipe1', 'pipe2', 'sky'];
        this.lateTime = new Date();
        this.timer = 0;
        this.flag = true
        this.arr = [];
        this.hero = null;
        this.nowTime = 0;

    }

    Game.prototype = {
        play: function () {
            var that = this
            fly.loadImage(this.imgsArr, function (obj) {
                that.create(obj);
                that.getEvent();
                that.render(obj);
            })
        },

        //创建对象
        create: function (obj) {
            var that = this
            //创建天空对象那个
            for (var i = 0; i < 2; i++) {
                var sky = fly.factor("Sky", {
                    img: obj.sky,
                    ctx: context,
                    x: i * obj.sky.width
                })
                this.arr.push(sky)

            };
            //创建管道
            for (var i = 0; i < 6; i++) {
                var pipe = fly.factor("Pipe", {
                    imgT: obj.pipe2,
                    imgB: obj.pipe1,
                    ctx: context,
                    x: i * obj.pipe1.width * 3 + 500
                })
                this.arr.push(pipe)
            }
            //创建 陆地
            for (var i = 0; i < 4; i++) {
                var land = fly.factor("Land", {
                    img: obj.land,
                    ctx: context,
                    x: i * obj.land.width
                })
                this.arr.push(land)

            }

            //创建小鸟   
            this.hero = fly.factor("Birds", {
                birds: obj.birds,
                context: context
            });



        },
        //绑定事件 
        getEvent: function () {
            var that = this
            cv.onclick = function () {
                that.hero.v0 = -0.3;
            }
        },
        //渲染
        render: function (obj) {
            var that = this;
            (function rander() {
                //保存状态
                context.save();
                // 清空画布
                context.clearRect(0, 0, cv.width, cv.height);
                // 开启新路径
                context.beginPath();

                // 获取时间
                that.nowTime = new Date();
                that.timer = that.nowTime - that.lateTime;
                that.lateTime = that.nowTime;


                //渲染
                that.arr.forEach(function (value) {
                    value.render(that.timer);
                })

                // 小鸟 渲染 
                that.hero.render(that.timer);

                // if (that.hero.y - 10 < 0 || that.hero.y + 10 > (cv.height - obj.land.height) || context.isPointInPath(that.hero.x, that.hero.y)) {
                //     that.flag = false;
                // }

                //添加 订阅 
                that.hero.addlisteners(function () {
                    that.flag = false;
                })


                //恢复状态
                context.restore();



                if (that.flag) {
                    // 动画实现方法
                    requestAnimationFrame(rander);
                }
            })()
        },


    }

    // 利用单例模式来 创建对象 (实例对象的唯一性)
    var a = null
    fly.getGame = function (obj) {
        if (a == null) {
            return new Game(obj)
        }
        return a;
    }



    fly.Game = Game;

})(fly)