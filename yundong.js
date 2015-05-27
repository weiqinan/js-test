function getByClass(oParent, sClass){
  var result=[];
  var aEle = oParent.getElementsByTagName('*');
  //console.log(2,aEle.length);
  for(var i = 0; i < aEle.length; i++){

    if(aEle[i].className==sClass){

           result.push(aEle[i]);
    }
  }
  return result;
}

function getStyle (obj, name){
  if(obj.currentStyle){
     return obj.currentStyle[name];
  }else{
    return getComputedStyle(obj,false)[name];
  }
}

function starMove (obj, attr, iTarget) {
  clearInterval(obj.timer);
  var current='';
  obj.timer=setInterval(function(){
    if(attr =='opacity'){
      //0.07*100 不等于 7
      current = Math.round(parseFloat( getStyle(obj,attr) )*100);
    }else{
      current = parseInt( getStyle(obj,attr) );
    }
    var speed =(iTarget-current)/6;
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
    if(current==iTarget){
      clearInterval(obj.timer);
    }else{
      if(attr == 'opacity'){
        obj.style.filter ='alpha(opacity:'+(current +speed) +')';
        obj.style.opacity = (current +speed) / 100;
      }else{
        obj.style[attr]=current+speed+'px';
      }
      
    }

  }, 30);
}