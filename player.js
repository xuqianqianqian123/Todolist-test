    var box=document.getElementById('box');
    var uls=document.getElementsByTagName('ul');
    var imgs=uls[0].getElementsByTagName('li');
    var btn=uls[1].getElementsByTagName('li');
    var i=index=0; //中间量，统一声明；
    var play=null;
    console.log(box,uls,imgs,btn);//获取正确

    //图片切换, 淡入淡出效果（transition: opacity 0.8s linear）做的
    function show(a){        
        for(i=0;i<btn.length;i++ ){
            btn[i].className='';    //每个缩略图都先设置成看不见，然后把当前缩略图设置成可见。
            btn[a].className='current';
        }
        for(i=0;i<imgs.length;i++){ //把图片的效果设置和缩略图片相同
            imgs[i].style.opacity=0;
            imgs[a].style.opacity=1;
        }
    }
    //切换按钮功能，响应对应图片
    for(i=0;i<btn.length;i++){
        btn[i].index=i;  
        btn[i].onmouseover=function(){
            show(this.index);
            clearInterval(play); //clearInterval取消由 setInterval设定的定时执行操作
        }
    }

    //自动轮播
    function autoPlay(){
        play=setInterval(function(){ //这个paly是为了保存定时器的，变量必须在全局声明
            index++;
            if(index>=imgs.length)
            index=0;
            show(index);
        },2000)
    }
    autoPlay();//调用自动轮播的方法

    //鼠标移到缩略图上展示对应的缩略图，移开继续自动播放
    box.onmouseover=function(){
        clearInterval(play);
    };
    box.onmouseout=function(){
        autoPlay();
    };