(function (fly) {

    function Sky(obj) {
        this.img = obj.img;
        this.ctx = obj.ctx;
        this.width = this.img.width;
        this.height = this.img.height;
        this.index = 0;
        this.v = 0.3;
        this.x = obj.x;



    };

    Sky.prototype = {
        constructor: Sky,
        render: function (timer) {
            this.x -= this.v * timer
            if (this.x < - this.width) {
                this.x +=  2 * this.width;
            }
            this.ctx.drawImage(this.img, 0, 0, this.width, this.height, this.x, 0, this.width, this.height);
        }

    }
    fly.Sky = Sky;

})(fly)