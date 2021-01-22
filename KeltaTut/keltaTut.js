/*

make an object 
new Tutorial()

make title
addTitle(obj);
this obj has name, classes

addSection
addSection(obj, true or false);
this obj has name, content(another object with sub topics) and true false is for whether it has subsections or not

addCode
addCode(obj,true or false)
this obj contains code and classes, true false is for dark theme

addQuestion
addQuestion(obj)
this obj contains questiondata, answer data and classes

*/
let isset = (val) => {
	
	if(val == "" || val == null){
		return false;
	}
	return true;
	
}

class SubSections{
	
	
	subTopicCount;
	constructor(){
		this.subTopicCount = 0;
	}
	
	getCount = () => {
		
		if(isset(this.subTopicCount)){
			return this.subTopicCount;
		}
		else{
			throw "Count is not yet set";
			return false;
		}
		
	}
	
	addSubTopic = (obj) => {
		
		let name = obj.name;
		let data = obj.data;
		let num = obj.num;
		
		this.subTopicCount++;
		
		let subTopic = document.createElement("DIV");
		let subTopicName = document.createElement("DIV");
		let subTopicData = document.createElement("DIV");
		
		subTopic.setAttribute("class", "w3-padding");
		
		subTopicName.setAttribute("class", "w3-xlarge");
		subTopicName.setAttribute("style", "font-weight:800");
		let nameTxt = document.createTextNode(num+"."+this.subTopicCount+" " + name);
		subTopicName.appendChild(nameTxt);
		
		subTopicData.setAttribute("class", "w3-large");
		
		subTopicData.innerHTML = data;
		
		subTopic.appendChild(subTopicName);
		subTopic.appendChild(subTopicData);
		
		return subTopic;
		
	}
	
}

class Tutorial{
	
	element;
	titleName;
	topicCount;
	queNumber;
	
	constructor(obj, dataObj = {
		classes: ""
	}){
		obj.className = "w3-content "+ dataObj.classes;
		obj.style.maxWidth = 800;
		this.element = obj;
		this.topicCount = 0;
		this.queNumber = 0;
	}
	
	getQuestionNumber = () => {
		
		if(isset(this.queNumber)){
			return this.queNumber;
		}
		else{
			throw "question number is not yet set";
			return false;
		}
		
	}
	
	getTitleName = () => {
		
		if(isset(this.titleName)){
			return this.titleName;
		}
		else{
			throw "Title is not yet set";
			return false;
		}
		
	}
	
	getTopicCount = () => {
		
		if(isset(this.titleName)){
			return this.topicCount;
		}
		else{
			throw "Count is not yet set";
			return false;
		}
		
	}
	
	addTitle = (obj = {
		name:"title", 
		classes:""
	}) => {
		
		//obj is bringing title and content of new subsection
		//this is the title of tutorial
		
		let name = obj.name;
		let classes = obj.classes + " w3-jumbo w3-center";
		
		this.titleName = name;
		
		let title = document.createElement("H1");
		let txt = document.createTextNode(name);
		title.appendChild(txt);
		
		title.className = classes;
		
		this.element.appendChild(title);
		
	}

	addFooter = (obj = {
		data:`Tutorial by KeltaKing`,
		classes:""
	}) =>{
		
		let data = obj.data;
		let classes = obj.classes + " w3-xxlarge w3-center";
		
		let footer = document.createElement("H1");
		let txt = document.createTextNode(data);
		footer.appendChild(txt);
		
		footer.className = classes;
		
		this.element.appendChild(footer);

	}
	
	addBlock = (obj = {
		data:`lorem ipsium`,
		classes:""
	}) => {

		let classes = "w3-round w3-padding w3-margin-top ";

		if(isset(obj.classes)){
			classes += obj.classes;
		}
		else{
			classes += "w3-black";
		}

		let str = `<b><div class='w3-round w3-padding w3-margin-top ${ classes }'>${obj.data}</div></b>`;
		return str		

	}

	addCode = (obj = {
		code:"-",
		classes: ""
	}, darkTheme = true) => {
		
		let classes = obj.classes;
		let codeData = obj.code.split("\n");
		
		let code = document.createElement("DIV");
		code.setAttribute("class", classes + " w3-padding w3-margin w3-round");
			
		if(darkTheme){
			
			code.setAttribute("style", "background-color:#222222;color:#f1f1f1");
			
		}
		else{
			
			code.setAttribute("style", "background-color:#FFFFFF; border:1px solid black");
			
		}
		
		for(let i=0;i<codeData.length;i++){
			
			code.innerHTML += codeData[i] + "<br>";
			
		}
		
		
		this.element.appendChild(code);
		
	}	
	
	addQuestion = (obj = {
		question:"Question statement",
		answer:"Answer of question",
		classes:""
	}) => {
		
		//this obj contains question statement and answer statement
		
		let questionData = obj.question;
		let answerData = obj.answer;
		let classes = obj.classes;
		
		this.queNumber++;
		let queNumber = this.queNumber;
		
		let question = document.createElement("DIV");
		let queElem = document.createElement("DIV");
		let ansElem = document.createElement("DIV");
		
		question.setAttribute("class", classes + " w3-padding w3-margin w3-round w3-border w3-large w3-dark-gray");
		//question.style.backgroundColor = "#F8F8F8";
		
		queElem.innerHTML = `
		<table>
			<tr>
				<td style='vertical-align:top'><span class='w3-xlarge'><b>Q-${queNumber}.</b></span> <td>
				<td>${questionData}</td>
			</tr>
		</table>
		<hr>
		`;
		
		ansElem.innerHTML = `
		<table>
			<tr>
				<td style='vertical-align:top'><span class='w3-xlarge'><b>Answer:</b></span> <td>
				<td>${answerData} </td>
			</tr>
		</table>
		`;
		
		question.appendChild(queElem);
		question.appendChild(ansElem);
		
		this.element.appendChild(question);
		
	}
	
	addSection = (obj = {
		name:"untitles",
		content:"lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium lauren ipsium "
	}, subSections = false) => {
		
		//here content is itself an object
		let name = obj.name;
		let content = obj.content;
		
		this.topicCount++;
		
		//making 3 divs, subtitle and content will be child of section
		let section = document.createElement("DIV");
		let subTitle = document.createElement("DIV");
		let contentData = document.createElement("DIV");
		
		//section setup
		section.setAttribute("class", "w3-padding-16 w3-margin");
		
		//subtitle setup
		subTitle.setAttribute("id", "subTitle"+this.topicCount);
		subTitle.setAttribute("style","font-weight:700");
		subTitle.setAttribute("class", "w3-padding-16 w3-xxlarge")
		
		let subTitleTxt = document.createTextNode(this.topicCount+". " + name);
		subTitle.appendChild(subTitleTxt);
		
		//content setup
		contentData.setAttribute("id", "content"+this.topicCount);
		contentData.setAttribute("class", "w3-large w3-justify");
		
		if(subSections){
			
			//subsections will say whether the subsections are there or not
			let subSectionData = obj.content;
			let subSections = new SubSections();
			
			for(let name in subSectionData){
				
				if(subSectionData.hasOwnProperty(name)){
					
					let subSecData = subSectionData[name];
					//now we have the subsection name and data
					
					let obj = {
						
						name:name,
						data:subSecData,
						num:this.topicCount
						
					};
					
					let subsec = subSections.addSubTopic(obj);
					contentData.appendChild(subsec);
					
				}
				
			}
			
		}
		else{
			contentData.innerHTML = obj.content;
		}		
		
		section.appendChild(subTitle);
		section.appendChild(contentData);
		
		this.element.appendChild(section);		
		
	}

	addYTVideo = (vals = {
		name:"untitled",
		url:"https://www.youtube.com/embed/G_kwX0vyIVQ",
	}) => {

		let str = `<center><div style='max-width:700px' class='w3-padding-32'><div class='videoWrapper'><iframe width="560" height="349" src=${vals.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div></div></center>`;
		return str

	}
	
}