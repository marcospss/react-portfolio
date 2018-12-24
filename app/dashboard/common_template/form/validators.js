export const required = (value) => {
    if (!value) {
        return 'Este campo é obrigatório!';
    }
};

export const email = (value) => {
    if (!value || value === '') {
        return 'Este campo é obrigatório!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Endereço de e-mail inválido!';
    }
};