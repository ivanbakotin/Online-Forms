const QuestResponse = ({ answersQuest }) => {
  return (
    <section className="responses">
      {answersQuest && Object.keys(answersQuest).length ? (
        <>
          {Object.entries(answersQuest).map((answer, index) => {
            return (
              <article key={index}>
                <h2>{answer[1][0].quest_title}</h2>
                <div>
                  {answer[1].map((ans) => {
                    return (
                      <>
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

export default QuestResponse;
