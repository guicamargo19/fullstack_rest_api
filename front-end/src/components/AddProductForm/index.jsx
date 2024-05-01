import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import * as S from './styles'

const AddProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const queryClient = useQueryClient();

    const AddProduct = async () => {
        const response = await fetch('http://localhost:8000/api/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name,
                description,
                value: parseFloat(value),
            }),
        });

        if (!response.ok) {
            throw new Error('Falha ao adicionar o produto.');
        }
        // Faz o refetch da query products depois do sucesso, atualizando a página.
        queryClient.invalidateQueries('products');
        // Limpa os campos do formulário
        setName('');
        setDescription('');
        setValue('');
    };

    const {mutate, isLoading} = useMutation(AddProduct);

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate();
    };

    return (
        <S.FormContainer>
            <h2>Adicionar Produto</h2>
            <form onSubmit={handleSubmit}>
                <S.InputsNomeValor>
                    <div>
                        <label>Nome:</label>
                        <input type="text" required value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Valor:</label>
                        <input type="text" required value={value} onChange={e => setValue(e.target.value)} />
                    </div>
                </S.InputsNomeValor>
                <S.TextAreaGroup>
                    <label>Descrição:</label>
                    <textarea required value={description} onChange={e => setDescription(e.target.value)} />
                </S.TextAreaGroup>
                <button type="submit" disabled={isLoading}>Adicionar produto</button>
            </form>
        </S.FormContainer>
    );
};

export default AddProductForm