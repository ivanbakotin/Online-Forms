import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchGet from "../../hooks/useFetchGet";
import receiveFetch from "../../utils/receiveFetch";
import sendFetch from "../../utils/sendFetch";

const FormList = () => {
  const [forms, setForms] = useState([]);

  const fetchedData = useFetchGet("/api/get_forms");

  useEffect(() => {
    if (fetchedData) setForms(fetchedData);
  }, [fetchedData]);

  function createForm() {
    receiveFetch("/api/create_form", "POST", {}).then(
      (res) => (window.location.href = `/create_form/${res}`)
    );
  }

  function deleteForm(e) {
    sendFetch("/api/delete_form", "DELETE", { id: e.target.id });
    setForms(forms.filter((f) => f.id != e.target.id));
  }

  return (
    <main className="form-list">
      <div className="create-new" onClick={createForm}>
        <p>Create New Form</p>
      </div>
      <article>
        {forms?.map((form) => {
          return (
            <div className="form-div" key={form.id}>
              <Link to={{ pathname: `/create_form/${form.id}` }}>
                {form.form_title}
              </Link>
              <div
                className="far fa-trash-alt"
                id={form.id}
                onClick={deleteForm}
              ></div>
            </div>
          );
        })}
      </article>
    </main>
  );
};

export default FormList;
