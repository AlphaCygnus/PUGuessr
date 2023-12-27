import Header from '../../components/Header/Header';
import EnterGame from '../../components/EnterGame/EnterGame';
import Footer from '../../components/Footer/Footer';

import cls from './home.module.css';

function Home() {
    return (
        <div>
            <Header label="Stats" href="/stats" />
            <main className={`${cls['main-section']} header-above`}>
                <div className="container main-container">
                    <section className="section">
                        <h2 className="title section-title title-center">Description</h2>
                        <p className="paragraph section-paragraph paragraph-center">
                            Welcome to PUGuessr.
                        </p>
                        <p className="paragraph section-paragraph paragraph-center" >
                            Do you think you know Pondicherry University much better than everyone else? Well, let's find out.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="title section-title title-center">Enter the game</h2>
                        <EnterGame className={cls.enter_game} />
                    </section>
                    <section className="section">
                        <h2 className="title section-title title-center">Tutorial</h2>
                        <p className="paragraph section-paragraph paragraph-center">
                            PUGuessr aims to transform the way students and visitors experience our university campus. By merging the excitement of geographical exploration with the educational opportunities on our campus, we envision a unique and engaging experience. Players will embark on a virtual journey of discovery, exploring the nooks and crannies of our university while enhancing their geographic knowledge.
                        </p>
                        <p className="paragraph section-paragraph paragraph-center">
                            In PUGuessr, users will be presented with a photograph of a specific location within the university campus. The game mechanics are designed to challenge users' observational and geographical knowledge without the aid of hints or clues. Here's how the gameplay will work:
                        </p>
                        <p className="paragraph section-paragraph paragraph-center">
                            <em>Photo Observation:</em> Users will have one minute to examine the provided photograph. They can zoom in and explore the details to gather as much information as possible.
                        </p>
                        <ul className="list section-list">
                            <li className="paragraph section-paragraph paragraph-center">
                                <b>Guess Placement:</b> After studying the photo, users will place their guess on a map of the university campus. This is where they believe the photo was taken.
                            </li>
                            <li className="paragraph section-paragraph paragraph-center">
                                <b>Scoring System:</b> Scores will be awarded based on the proximity of the user's guess to the actual location. The game will use a location radius to determine the accuracy of the guess. The smaller the distance between the guess and the actual location, the higher the score.
                            </li>
                            <li className="paragraph section-paragraph paragraph-center">
                                <b>No Hints or Clues:</b> Unlike traditional games, our game will not provide any hints or clues beyond the image itself, making it a more challenging experience.
                            </li>
                            </ul>
                    </section>

                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
