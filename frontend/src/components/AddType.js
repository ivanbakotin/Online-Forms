const AddType = ({ open, setQuestions, questions }) => {

	if (!open) return null

	function addQuestion(e) {
        setQuestions(prev => [ ...prev, { question_id: questions.length, quest_title:"", question_type: e.target.getAttribute("name"), sub_questions:[{ qq_id: 1, qq_title: "Option"}] }])
    }

    return (    
    	<div className="choose-type">
			<div name="Checkbox" onClick={addQuestion}>Add Checkbox</div>
            <div name="Paragraph" onClick={addQuestion}>Add Paragraph</div>
            <div name="Line" onClick={addQuestion}>Add Line</div>
      	</div>
    )
}

export default AddType;
