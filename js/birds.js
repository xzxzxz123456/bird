(function (fly) {

    function Birds(obj) {
        this.img = obj.birds;
        this.ctx = obj.context;
        this.birdswidth = 52
        this.birdsHeight = 45
        this.index = 0;
        this.v0 = 0;
        this.s = 0;
        this.a = 0.0005;
        this.x = 100;
        this.y = 100;
        this.maxV = 0.3;
        this.maxDeg = 45;
        this.birdsBeg = 0;
        this.listeners = []

    }

    Birds.prototype = {
        constructor: Birds,
        render: function (timer) {
            this.isStop()
            //下落的速度 和位移

            this.v0 = this.v0 + this.a * timer;
            this.s = this.v0 * timer + 1 / 2 * this.a * timer * timer;
            this.v = this.v0 + this.a * timer;
            //小鸟的纵坐标
            this.y += this.s;
            // 小鸟旋转
            this.birdsBeg = this.maxDeg / this.maxV * this.v0;
            if (this.birdsBeg >= this.maxDeg) {
                this.birdsBeg = this.maxDeg
            } else if (this.birdsBeg <= -this.maxDeg) {
                this.birdsBeg = -this.maxDeg
            };

            //先平移后旋转 
            this.ctx.translate(this.x, this.y);
            this.ctx.rotate(fly.getRadin(this.birdsBeg));
            // 渲染画面
            this.ctx.drawImage(this.img, this.birdswidth * this.index++, 0, this.birdswidth, this.birdsHeight, -this.birdswidth / 2, -this.birdsHeight / 2, this.birdswidth, this.birdsHeight);
            this.index = this.index % 3

        },
        //观察者模式 去判断  撞击

        //添加订阅函数
        addlisteners: function (fn) {
            this.listeners.push(fn)
        },

        isStop: function () {
            if (this.y - 10 < 0 || this.y + 10 > (600 - 112) || context.isPointInPath(this.x, this.y)) {
                this.listeners.forEach(function (fn) {
                    fn();
                })
            }
        }

    };





    fly.Birds = Birds;
})(fly)