(function (window) {

    var fly = {
        getRadin: function (deg) {
            return deg / 180 * Math.PI
        },

        loadImage: function (arr, callback) {
            var length = arr.length;
            var count = 0
            var obj = {};
            arr.forEach(function (value, index) {
                var img = new Image();
                img.src = './images/' + value + '.png'
                obj[value] = img;
                img.onload = function () {
                    count++
                    if (count >= length) {
                        callback(obj);
                    }
                }

            });

        },
        //工厂模式 创建对象 
        factor:function(type,obj){
            switch(type){
                case "Birds":
                    return new fly.Birds(obj)
                 case "Sky":
                    return new fly.Sky(obj)
                 case "Pipe":
                    return new fly.Pipe(obj)
                 case "Land":
                    return new fly.Land(obj)
            }
        }
    }
    window.fly = fly;

})(window)