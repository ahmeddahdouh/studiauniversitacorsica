import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
const CorsicaLoginApp = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        numeroEtudiant: '',
        specialite: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
                    <h1 className="text-3xl font-bold text-orange-500 mb-6">Bienvenue sur le Campus Numérique</h1>
                    <p className="text-xl mb-4">Vos informations ont été soumises avec succès.</p>
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Récapitulatif :</h2>
                        <p><span className="font-medium">Nom :</span> {formData.nom}</p>
                        <p><span className="font-medium">Prénom :</span> {formData.prenom}</p>
                        <p><span className="font-medium">Numéro étudiant :</span> {formData.numeroEtudiant}</p>
                        <p><span className="font-medium">Spécialité :</span> {formData.specialite}</p>
                    </div>
                    <button
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                        onClick={() => setIsSubmitted(false)}
                    >
                        Retour au formulaire
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm font-bold">UNIVERSITÀ DI CORSICA</div>
                    <div className="text-sm">
                        NOS PORTAILS :
                        <span className="ml-4 mr-2">Étudiants</span>
                        <span className="mx-2">Personnels</span>
                        <span className="mx-2">Recherche</span>
                        <span className="mx-2">Partenaires pro</span>
                        <span className="ml-2">Fondation</span>
                    </div>
                </div>
            </header>

            {/* Logo and Authentication title */}
            <div className="bg-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div >
                        <img
                            src="https://portail.universita.corsica/template/template_back_office/images/logo.png"
                            alt="Università di Corsica"
                            className="w-full"
                        />
                    </div>
                    <div className="text-right">
                        <h1 className="text-4xl text-orange-500">Inscription</h1>
                        <span className="text-orange-500 text-xl">Campagne de stages et d'alternances</span>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <main className="flex-grow bg-gray-100 p-4">
                <div className="container mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                        <p className="text-lg text-orange-500 mb-6">
                            &gt; Veuillez remplir le formulaire ci-dessous pour vous inscrire
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="nom" className="block mb-1">
                                    Nom : <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nom"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    className="w-full border border-orange-500 p-2 rounded"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="prenom" className="block mb-1">
                                    Prénom : <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="prenom"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                    className="w-full border border-orange-500 p-2 rounded"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="numeroEtudiant" className="block mb-1">
                                    Numéro étudiant : <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="numeroEtudiant"
                                    value={formData.numeroEtudiant}
                                    onChange={handleChange}
                                    className="w-full border border-orange-500 p-2 rounded"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="specialite" className="block mb-1">
                                    Spécialité : <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="specialite"
                                    value={formData.specialite}
                                    onChange={handleChange}
                                    className="w-full border border-orange-500 p-2 rounded"
                                    required
                                >
                                    <option value="">-- Choisir une spécialité --</option>
                                    <option value="Informatique">Informatique</option>
                                    <option value="Droit">Droit</option>
                                    <option value="Économie">Économie</option>
                                    <option value="Langues">Langues</option>
                                    <option value="Sciences">Sciences</option>
                                    <option value="Lettres">Lettres</option>
                                    <option value="Gestion">Gestion</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="bg-white text-orange-500 border border-orange-500 px-4 py-2  hover:bg-orange-500 hover:text-white"
                            >
                                SOUMETTRE
                            </button>

                            <div className="mt-6">

                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CorsicaLoginApp;