(function (fly) {

    function Land(obj) {
        this.img = obj.img;
        this.ctx = obj.ctx;
        this.width = obj.img.width;
        this.height = obj.img.height;
        this.v = 0.3;
        this.x = obj.x;
    }

    Land.prototype = {
        constructor: Land,
        render: function (timer) {
            this.x -= this.v * timer;
            if (this.x <= -this.width) {
                this.x += this.width * 4;
            }
            this.ctx.drawImage(this.img, 0, 0, this.width, this.height, this.x, cv.height - this.height, this.width, this.height);
        }
    }

    fly.Land = Land;

})(fly)