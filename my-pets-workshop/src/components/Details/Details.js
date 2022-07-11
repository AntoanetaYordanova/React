import { useParams } from 'react-router-dom';
import { getById } from '../../services/petsService';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { deletePet } from '../../services/petsService';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [pet, setPet] = useState({});
    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${id}`}>Edit</Link>
            <button className="button" onClick={deleteHandler}>Delete</button>
        </>
    );
    const userButtons = <Link className="button" to={`/delete/${pet._id}`}>Like</Link>;


    function deleteHandler() {
        deletePet(id, user.accessToken);
        navigate(`/`);
    }

    useEffect(() => {
        fetchPetData();
    }, []);

    async function fetchPetData() {
        const data = await getById(id);
        setPet(data);
    }

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img">
                    <img src={pet.imageUrl} />
                </p>
                <div className="actions">
                    { user._id && (user._id === pet._ownerId ? ownerButtons : userButtons)}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: { pet.likes?.length }</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
};

export default Details;
