import React from "react";

const TechCurriculoForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        numeroCelular: '',
        linkedin: '',
        github: '',
        habilidades: '',
        experiencia: '',
        projetos: [],
        educacao: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        // TODO: Send form data to API
        console.log(formData);
        alert('Salvo com sucesso');
    };

    return (
        <form onSubmit={handleSave} className="p-4 max-w-xl mx-auto bg-gray-100 shadow-md rounded">
            <h2 className="text-2x1 font-bold mb-4 text-center">Currículo</h2>

            {/* Dados Pessoais do Usuário*/}
            <div className="mb-4">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome Completo:</label>
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Número do Celular:</label>
                <input
                    type="tel"
                    name="numeroCelular"
                    value={formData.numeroCelular}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>

            {/* Redes Sociais */}
            <div className="mb-4">
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn:</label>
                <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="github" className="block text-sm font-medium text-gray-700">GitHub:</label>
                <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>

            {/* Habilidades */}
            <div className="mb-4">
                <label htmlFor="habilidades" className="block text-sm font-medium text-gray-700">Habilidades:</label>
                <textarea
                    name="habilidades"
                    value={formData.habilidades}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>

            {/* Experiência Profissional */}
            <div className="mb-4">
                <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700">Experiência Profissional:</label>
                <textarea
                    name="experiencia"
                    value={formData.experiencia}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>

            {/* Projetos */}
            <div className="mb-4">
                <label htmlFor="projetos" className="block text-sm font-medium text-gray-700">Projetos:</label>
                <textarea
                    name="projetos"
                    value={formData.projetos}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>

            {/* Educação */}
            <div className="mb-4">
                <label htmlFor="educação" className="block text-sm font-medium text-gray-700">Educação:</label>
                <textarea
                    name="educacao"
                    value={formData.educacao}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium p-2 rounded hover:bg-blue-600"
            >
                Salvar
            </button>
        </form>
    );
};

export default TechCurriculoForm;