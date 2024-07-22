
	let anmaition = document.querySelector('.animation-2');

	
	anmaition.addEventListener('mousemove',(m)=>{
	let positionLeft = m.pageX +'px'
     let positionTop = m.pageY +'px'; 

				let i = document.createElement('i')
				i.style.left= positionLeft;
			    i.style.top= positionTop;
				i.style.scale=`${Math.random()* 2 + 1}`;
					
			
				
				anmaition.appendChild(i)	
				
 			setTimeout(()=>{
			i.style.transform=`translate(${Math.random() * 400 - 200}px,${Math.random() * 400 - 200}px) `;
			},2000) 
			setTimeout(()=>{
				i.remove()
			},4000) 
			
			
			
			
	})