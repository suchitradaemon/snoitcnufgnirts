var RowContainer=function(container, data){
	/*left{header,placeHolder,id,name,isEditable,}
	  right{header,placeHolder,id,name,isEditable}*/
	this.container=container;
	var rowContainer=document.createElement("div");rowContainer.width="100%";rowContainer.id='rowContainer';
	rowContainer.name='rowContainer';rowContainer.className="rowContainer";this.rowContainer=rowContainer;
	var leftData=data['left'];
	leftData['isLeft']=true;
	var rightData=data['right'];
	rightData['isRight']=false;
	var left=new TextHolder(rowContainer, data.left);this.left=left;
	var right=new TextHolder(rowContainer, data.right);this.right=right;
	container.appendChild(rowContainer);
}