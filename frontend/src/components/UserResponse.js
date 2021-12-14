const UserResponse = ({ answersUser }) => {
    return (
        <section className="responses">
        {answersUser &&
        <>
            {Object.entries(answersUser).map((answer, ind) => {
                return (
                    <article>
                        <h2>{ind+1}</h2>
                        <div>
                        {answer[1].map(ans => {
                            return (
                                <>
                                <p>{ans.answer_text}</p>
                                {ans.answer_array?.map(a => <p>{a}</p>)}
                                </>
                            )
                        })}
                        </div>
                    </article>
                )
            })}
        </>}
        </section>
    )
}

export default UserResponse;
