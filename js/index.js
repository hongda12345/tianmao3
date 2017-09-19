/*
* @Author: 宏达
* @Date:   2017-09-18 17:16:08
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-19 23:43:42
*/
window.onload=function(){
	/*侧导航*/
	let nav=document.getElementsByClassName('zhuti-nav')[0];
	let lis=nav.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');

	for(let i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
        	item[i].style.display='block';
        }
        lis[i].onmouseout=function(){
        	item[i].style.display='none';
        }
	}
	/*banner图*/
	let yuankuang=document.getElementsByClassName('yuankuang')[0];
	let yuan=yuankuang.getElementsByTagName('li');
	let bannertu=document.getElementsByClassName('bannertu');
	let kuang=document.getElementsByClassName('banner-zhuti')[0];
	for(let i=0;i<yuan.length;i++){
		yuan[i].onmouseover=function(){
			yuan[i].style.background='#fff';
            yuan[i].style.border='2px solid #a2a2a2';
			
             // bannertu[i].style.display='block';
		}
		yuan[i].onmouseout=function(){
			yuan[i].style.background='#a2a2a2';
			
			 // bannertu[i].style.display='none';
		}
		// yuan[i].onclick=function(){
		// 	for(j=0;j<yuan.length;j++){
		//      bannertu[j].style.display='none';
		// 	}
		//     bannertu[i].style.display='block';
		// }
	}
	let now=0;
	for(let i=0;i<yuan.length;i++){
		// yuan[i].index=i;   /*let换成var时*/
		yuan[i].onclick=function(){
			for(let j=0;j<yuan.length;j++){
				bannertu[now].style.display='none';
	            yuan[now].style.background='#a2a2a2';
			}
		   bannertu[i].style.display='block';
		   yuan[i].style.background='#fff';
		   yuan[i].style.border='2px solid #a2a2a2';
	    // bannertu[this.index].style.display='block';
	       now=i;
	   }
	}
		// 	now=this.index;
		// }
		// yuan[i].onclick=(function(i){
  //           return function(){
  //           	bannertu[now].style.display='none';
  //           	yuan[now].style.background='#a2a2a2';
  //           	bannertu[i].style.display='block';
  //           	yuan[i].style.background='#fff';
  //               yuan[i].style.border='2px solid #a2a2a2';
  //           	now=i;
  //           }
		// })(i);
	let num=0;
	let t=setInterval(move, 1000);
	function move(){
		num++;
		if(num==bannertu.length){
			num=0;
		}
		for(i=0;i<bannertu.length;i++){
            bannertu[i].style.display='none';
		    yuan[i].style.background='#a2a2a2';
            
		}
		bannertu[num].style.display='block';
		yuan[num].style.background='#fff';
        yuan[num].style.border='2px solid #a2a2a2';
	}
    kuang.onmouseover=function(){
        clearInterval(t);
   }
    kuang.onmouseout=function(){
        t=setInterval(move, 1000);
   }
}
