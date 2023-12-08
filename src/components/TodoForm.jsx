import { useState } from 'react'

const TodoForm = ( {addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value,category);
        setValue("");
        setCategory("");
    };

    return (
    <div className='all_of'>
        <h2>Criar Tarefa:</h2>
        <div className='criar-tarefa'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Digíte o título'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma Categoria!</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="estudo">Estudo</option>
                    <option value="pessoal">Pessoal</option>
                </select>
                <button type='submit'>Criar Tarefa!</button>
            </form>
        </div>
    </div>
    );
}

export default TodoForm