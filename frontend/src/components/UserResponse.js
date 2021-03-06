const UserResponse = ({ answersUser }) => {
  return (
    <section className="responses">
      {answersUser && Object.keys(answersUser).length ? (
        <>
          {Object.entries(answersUser).map((answer, index) => {
            return (
              <article key={index}>
                <h2>{index + 1}</h2>
                <div>
                  {answer[1].map((ans) => {
                    return (
                      <>
                        <p>{ans.quest_title}:</p>
                        <p>{ans.answer_text}</p>
                        {ans.answer_array?.map((a) => (
                          <p>{a}</p>
                        ))}
                      </>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </>
      ) : (
        <p>No answers yet!</p>
      )}
    </section>
  );
};

export default UserResponse;
