import './App.css';

function App() {
  return (
    <div id="container">  
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <a href="#">Dashboard</a>
                    <div id="guest">
                        <a className="button" href="#">Login</a>
                        <a className="button" href="#">Register</a>
                    </div>
                    <div id="user">
                        <span>Welcome, email</span>
                        <a className="button" href="#">My Pets</a>
                        <a className="button" href="#">Add Pet</a>
                        <a className="button" href="#">Logout</a>
                    </div>
                </section>
            </nav>
        </header>

        <main id="site-content"></main>

        <section id="login-page" className="login">
            <form id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login"/>
                </fieldset>
            </form>
        </section>

        <section id="register-page" className="register">
            <form id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password"/>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register"/>
                </fieldset>
            </form>
        </section>

        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <ul className="other-pets-list">
                <li className="otherPet">
                    <h3>Name: Buddy</h3>
                    <p>Type: dog</p>
                    <p className="img"><img src="/images/dog2.png"/></p>
                    <a className="button" href="#">Details</a>
                </li>

                <li className="otherPet">
                    <h3>Name: Tyson</h3>
                    <p>Type: parrot</p>
                    <p className="img"><img src="/images/parrot.png"/></p>
                    <a className="button" href="#">Details</a>
                </li>

                <li className="otherPet">
                    <h3>Name: Milo</h3>
                    <p>Type: dog</p>
                    <p className="img"><img src="/images/dog.png"/></p>
                    <a className="button" href="#">Details</a>
                </li>

                <li className="otherPet">
                    <h3>Name: Tom</h3>
                    <p>Type: cat</p>
                    <p className="img"><img src="/images/cat1.png"/></p>
                    <a className="button" href="#">Details</a>
                </li>
            </ul>
            <p className="no-pets">No pets in database!</p>
        </section>

        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: Milo</h3>
                <p className="type">Type: dog</p>
                <p className="img"><img src="/images/dog.png"/></p>
                <div className="actions">
                    <a className="button" href="#">Edit</a>
                    <a className="button" href="#">Delete</a>
                    
                    <a className="button" href="#">Like</a>
                    
                    <div className="likes">
						<img className="hearts" src="/images/heart./png"/>
						<span id="total-likes">Likes: 0</span>
					</div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>Today, some dogs are used as pets, others are used to help humans do their work. They are a popular
                    pet because they are usually playful, friendly, loyal and listen to humans. Thirty million dogs in
                    the United States are registered as pets.[5] Dogs eat both meat and vegetables, often mixed together
                    and sold in stores as dog food. Dogs often have jobs, including as police dogs, army dogs,
                    assistance dogs, fire dogs, messenger dogs, hunting dogs, herding dogs, or rescue dogs.</p>
            </div>
        </section>

        <section id="create-page" className="create">
            <form id="create-form" action="" method="">
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                                <option value="parrot">Parrot</option>
                                <option value="reptile">Reptile</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet"/>
                </fieldset>
            </form>
        </section>

        <section id="edit-page" className="edit">
            <form id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" value="Milo"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description">Today, some dogs are used as pets, others are used to help humans do their work. They are a popular pet because they are usually playful, friendly, loyal and listen to humans. Thirty million dogs in the United States are registered as pets.[5] Dogs eat both meat and vegetables, often mixed together and sold in stores as dog food. Dogs often have jobs, including as police dogs, army dogs, assistance dogs, fire dogs, messenger dogs, hunting dogs, herding dogs, or rescue dogs.</textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" value="/images/dog.png"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" value="dog">
                                <option value="cat" >Cat</option>
                                <option value="dog" selected>Dog</option>
                                <option value="parrot">Parrot</option>
                                <option value="reptile">Reptile</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save"/>
                </fieldset>
            </form>
        </section>

        <section id="my-pets-page" className="my-pets">
            <h1>My Pets</h1>
            <ul className="my-pets-list">
                <li className="otherPet">
                    <h3>Name: Milo</h3>
                    <p>Type: dog</p>
                    <p className="img"><img src="/images/dog.png"/></p>
                    <a className="button" href="#">Details</a>
                </li>
                <li className="otherPet">
                    <h3>Name: Tom</h3>
                    <p>Type: cat</p>
                    <p className="img"><img src="/images/cat1.png"/></p>
                    <a className="button" href="#">Details</a>
                </li>
            </ul>

            <p className="no-pets">No pets in database!</p>
        </section>

        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

    </div>
  );
}

export default App;
