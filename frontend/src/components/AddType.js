const AddType = ({ open, setQuestions, questions }) => {

	if (!open) return null

	function addQuestion(e) {
        setQuestions(prev => [ ...prev, { question_id: questions.length, quest_title:"", question_type: e.target.getAttribute("name"), sub_questions:[{ qq_id: 0, qq_title: "Option"}] }])
    }

    return (    
    	<div className="choose-type">
			<div className="fas fa-check-square" name="Checkbox" onClick={addQuestion}></div>
            <div className="fas fa-align-left" name="Paragraph" onClick={addQuestion}></div>
            <div className="fab fa-line" name="Line" onClick={addQuestion}></div>
      	</div>
    )
}

export default AddType;
