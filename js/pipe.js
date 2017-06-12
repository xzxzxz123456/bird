(function (fly) {

    function Pipe(obj) {
        this.imgT = obj.imgT;
        this.imgB = obj.imgB;
        this.width = obj.imgT.width;
        this.height = obj.imgT.height;
        this.ctx = obj.ctx;
        this.x = obj.x;
        this.yT = 0;
        this.yB = 0;
        this.v = 0.3;
        this.ramdom;
        this.jg = 300;
        this.random1();

    }
    Pipe.prototype = {
        constructor: Pipe,
        render: function (timer) {
            this.x -= this.v * timer;
            if (this.x < -this.width) {
                this.random1();
                this.x += 6 * this.width * 3;

            }
            this.ctx.drawImage(this.imgT, 0, 0, this.width, this.height, this.x, this.yT, this.width, this.height);
            this.ctx.drawImage(this.imgB, 0, 0, this.width, this.height, this.x, this.yB, this.width, this.height);
            this.ctx.rect(this.x, this.yT, this.width, this.height);
            this.ctx.rect(this.x, this.yB, this.width, this.height);
        },
        random1: function () {
            this.random = Math.random() * 200 + 50;
            this.yT = this.random - this.height;
            this.yB = this.jg + this.random;
        }


    }

    fly.Pipe = Pipe

})(fly)