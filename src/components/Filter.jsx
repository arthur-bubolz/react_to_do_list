const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChangeCapture={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Concluídas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem Alfabética:</p>
                <button onClick={() => setSort("asc")}>ASC</button>
                <button onClick={() => setSort("des")}>DES</button>
            </div>
        </div>
    </div>
  )
}

export default Filter