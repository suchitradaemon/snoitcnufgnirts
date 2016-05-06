var TextHolder=function(container, data){
		//header,placeHolder,id,name,isEditable,isLeft
		/*<div width="100%" class="rowContainer">
			<span class="left">
				<div>
					<span>
						<label class="headerLabel">Enter your string here</label>
					</span>
				</div>
				<div>
					<span class="rightAlone">
						<label id="count" class="metadataLabel"></label>
						<label class="subheaderLabel">letters</label>&nbsp&nbsp
						<label id="words" class="metadataLabel"></label>
						<label class="subheaderLabel">words</label>&nbsp&nbsp
						<label class="subheaderLabel">md5: </label>
						<label id="md5" class="metadataLabel"></label>
					</span>
				</div>
				<div><textarea placeholder="Enter your text here" rows="5" class="editableTextArea" id="input" onkeyup="updateAll()"></textarea> </div>
			</span>
			<span class="right">
				<div><label class="headerLabel">String to search</label></div>
				<div><textarea placeholder="What do you wanna search in your text?" rows="5" class="editableTextArea" width="100" onkeyup=""></textarea></div>
			</span>
		</div>*/
		/*var rowContainer=document.createElement("div");rowContainer.width="100%";rowContainer.id='rowContainer';
		rowContainer.name='rowContainer';rowContainer.className="rowContainer";this.rowContainer=rowContainer;*/
		this.container=container;

		var mainSpanContainer=document.createElement("span");
		mainSpanContainer.className=(data.isLeft)?"left":"right";this.mainSpanContainer=mainSpanContainer;

		var headerDiv=document.createElement("div");this.headerDiv=headerDiv;
		var headerSpan=document.createElement("span");this.headerSpan=headerSpan;
		var headerLabel=document.createElement("label");headerLabel.className="headerLabel";
		headerLabel.innerHTML=data.header;this.headerLabel=headerLabel;
		headerSpan.appendChild(headerLabel);headerDiv.appendChild(headerSpan);

		var subHeaderDiv=document.createElement("div");this.subHeaderDiv=subHeaderDiv;
		var subHeaderSpan=document.createElement("span");subHeaderSpan.className="rightAlone";this.subHeaderSpan=subHeaderSpan;
		this.addSubHeader(subHeaderSpan, 'letters');
		this.addSubHeader(subHeaderSpan, 'words');
		this.addSubHeader(subHeaderSpan, 'lines');
		this.addSubHeader(subHeaderSpan, 'md5');
		subHeaderDiv.appendChild(subHeaderSpan);

		var mainTextDiv=document.createElement("div");this.mainTextDiv=mainTextDiv;
		var mainText=document.createElement('textarea');mainText.placeholder=data.placeHolder;
		if(!data.isEditable){mainText.readOnly=true;}
		mainText.rows=5;mainText.className=data.isEditable?"editableTextArea":"nonEditableTextArea";
		mainText.onafterupdate=this.updateMetadata.bind(this);
		mainText.id=data.id;mainText.name=data.name;this.mainText=mainText;
		mainTextDiv.appendChild(mainText);

		mainSpanContainer.appendChild(headerDiv);
		mainSpanContainer.appendChild(subHeaderDiv);
		mainSpanContainer.appendChild(mainTextDiv);
		
		this.updateMetadata();
		container.appendChild(mainSpanContainer);
}
TextHolder.prototype.addSubHeader=function(parent,name){
	var containerSpan=document.createElement("span");containerSpan.className="subHeader";this[name+'ContainerSpan']=containerSpan;
	var label=document.createElement("label");label.className="subHeaderLabel";
	label.innerHTML=name;this[name+'Label']=label;
	var data=document.createElement("label");data.className="metadataLabel";this[name]=data;
	containerSpan.appendChild(label);containerSpan.appendChild(data);
	parent.appendChild(containerSpan);
}
TextHolder.prototype.updateMetadata=function(){
	var str=this.mainText.value;
	if(str){
		this.letters.innerHTML=str.length;
		this.lines.innerHTML=str.split('\n').length;	
		var words=str.trim().split(/[\s]+/);
		if(words&&((1==words.length&&words[0])||1<words.length)){this.words.innerHTML=words.length;}
		else{this.words.innerHTML=0;}
	}else{
		this.letters.innerHTML=this.lines.innerHTML=this.words.innerHTML=0;
	}
	this.md5.innerHTML=md5(str);
}