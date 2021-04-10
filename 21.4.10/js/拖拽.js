
        function drag(obj){    
            //拖拽box1元素
            //当鼠标在被拖拽元素上被按下时，开始拖拽
            var obj = document.getElementById(obj);
            
            obj.onmousedown = function (e) {
                obj.setCapture && obj.setCapture();
                e = event || window.event;
                
                //此时鼠标移动，元素跟随鼠标移动
                var objX = e.clientX - obj.offsetLeft;
                var objY = e.clientY - obj.offsetTop;
                document.onmousemove = function(e){
                    e = event || window.event;
                    console.log(e);
                    var X = e.clientX;
                    var Y = e.clientY;
                    // var Width = obj.clientWidth / 2;
                    // var Height = obj.clientHeight / 2;
                    
                    obj.style.left = X - objX + 'px';
                    obj.style.top = Y - objY + 'px';
                }
                //鼠标松开，元素固定在最终位置
                document.onmouseup = function(){
                    //取消onmousemove
                    document.onmousemove = null;
                    document.onmouseup = null;
                    // alert("鼠标松开了！");

                    obj.releaseCapture && obj.releaseCapture();
                }

                // return false;
            }   
        }

