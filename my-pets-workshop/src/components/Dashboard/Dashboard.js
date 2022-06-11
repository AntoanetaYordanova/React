import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PetCard from './PetCard/PetCard';
import { getAll } from '../../services/petsService';

const Dashboard = () => {
    const [pets, setPets] = useState([]);

    async function fetchPets() {
        const data = await getAll();
        setPets(data);
    }

    useEffect(() => {
        fetchPets();
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <nav>
                <Routes>
                    <Route path="/all" />
                </Routes>
            </nav>
            <ul className="other-pets-list">
                {pets.map((e) => (
                    <PetCard key={e._id} pet={e} />
                ))}
            </ul>
            <p className="no-pets">No pets in database!</p>
        </section>
    );
};

export default Dashboard;
