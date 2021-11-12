const ChooseType = ({ open, setQuestions, questions }) => {

	if (!open) return null

	function addQuestion(e) {
        setQuestions(prev => [ ...prev, { question_id: questions.length, quest_title:"", question_type: e.target.getAttribute("name"), sub_questions:[{ qq_id: 1, qq_title: "Option"}] }])
    }

    return (    
    	<div className="choose-type">
			<div name="checkbox" onClick={addQuestion}>Add Checkbox</div>
            <div name="paragraph" onClick={addQuestion}>Add Paragraph</div>
      	</div>
    )
}
		  

export default ChooseType;
