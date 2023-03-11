import nextId from "react-id-generator";

export default function Form({ form, setForm, clockList, setClockList }) {
  const isValidForm = () => {

    if (form.name && form.timezone) {
      return true;
    }
    return false;
  };
  const submitForm = (event) => {
    event.preventDefault();

    if (isValidForm()) {
      setClockList([...clockList, { ...form, id: nextId() }]);
    }
  };
  const onChangeDate = ({ target: { name, value } }) => setForm((prevForm) => ({ ...prevForm, [name]: value }));

  return (
    <form onSubmit={submitForm}>
      <div className="form-row">
        <div className="form-column">
          <label className="form-label" aria-required htmlFor="name">Название</label>
          <input id="name" className="form-field" name="name" type="text" value={form.name} onChange={onChangeDate} />
        </div>
        <div className="form-column">
          <label className="form-label" aria-required htmlFor="timezone">Временная зона</label>
          <input id="timezone" className="form-field" name="timezone" type="number" value={form.timezone} onChange={onChangeDate} />
        </div>
        <div className="form-column">
          <button className="form-button">Добавить</button>
        </div>
      </div>
    </form>
  );
}