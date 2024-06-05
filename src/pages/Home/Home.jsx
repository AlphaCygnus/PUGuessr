// import React, { useState } from "react";
// import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { database } from '../../FirebaseConfig';
// import { useNavigate } from "react-router-dom";
// import EnterGame from "../../components/EnterGame/EnterGame";  // Import EnterGame if not already imported
// import Header from "../../components/Header/Header";  // Import Header if not already imported
// import Footer from "../../components/Footer/Footer";  // Import Footer if not already imported
// import RegisterAndLogin from "../RegisterAndLogin";
// import cls from "./home.module.css";
// import { useAuthState } from "react-firebase-hooks/auth";


// function Home() {

//     const [login, setLogin] = useState(false);
//     const [user] = useAuthState(database);
//     const history = useNavigate();
  
//     const handleSubmit = (e, type) => {
//       e.preventDefault();
//       const email = e.target.email.value;
//       const password = e.target.password.value;
  
//       if (type === "signup") {
//         createUserWithEmailAndPassword(database, email, password)
//           .then((data) => {
//             console.log(data, "authData");
//             history("/home");
//           })
//           .catch((err) => {
//             alert(err.code);
//             setLogin(true);
//           });
//       } else {
//         signInWithEmailAndPassword(database, email, password)
//           .then((data) => {
//             console.log(data, "authData");
//             history("/home");
//           })
//           .catch((err) => {
//             alert(err.code);
//           });
//       }
//     };
  
//     const handleReset = () => {
//       history("/reset");
//     }
  
//     const handleSignOut = () => {
//       signOut(database)
//         .then(() => {
//           history('/');
//         })
//         .catch((error) => {
//           console.error("Sign out error:", error);
//         });
//     }

//       return (
//           <div>
//               <Header label="Stats" href="/stats" showLogout={user} handleSignOut={handleSignOut}/>  
              
//               <main className={`${cls['main-section']} header-above`}>
//                   <div className="container main-container">
// 		    {user ? (
// 		        <>
//                       <section className="section">
//                           <h2 className="title section-title title-center">Description</h2>
//                           <p className="paragraph section-paragraph paragraph-center">
//                               Welcome to PUGuessr.
//                           </p>
//                           <p className="paragraph section-paragraph paragraph-center" >
//                               Do you think you know Pondicherry University much better than everyone else? Well, let's find out.
//                           </p>
//                       </section>
  
//                       <section className="section">
//                           <h2 className="title section-title title-center">Singleplayer</h2>
//                           <EnterGame className={cls.enter_game} />
//                       </section>
                      
//                       <section className="section">
//                           <h2 className="title section-title title-center">Tutorial</h2>
//                           <p className="paragraph section-paragraph paragraph-center">
//                               PUGuessr aims to transform the way students and visitors experience our university campus. By merging the excitement of geographical exploration with the educational opportunities on our campus, we envision a unique and engaging experience. Players will embark on a virtual journey of discovery, exploring the nooks and crannies of our university while enhancing their geographic knowledge.
//                           </p>
//                           <p className="paragraph section-paragraph paragraph-center">
//                               In PUGuessr, users will be presented with a photograph of a specific location within the university campus. The game mechanics are designed to challenge users' observational and geographical knowledge without the aid of hints or clues. Here's how the gameplay will work:
//                           </p>
//                           <p className="paragraph section-paragraph paragraph-center">
//                               <em>Photo Observation:</em> Users will have one minute to examine the provided photograph. They can zoom in and explore the details to gather as much information as possible.
//                           </p>
//                           <ul className="list section-list">
//                               <li className="paragraph section-paragraph paragraph-center">
//                                   <b>Guess Placement:</b> After studying the photo, users will place their guess on a map of the university campus. This is where they believe the photo was taken.
//                               </li>
//                               <li className="paragraph section-paragraph paragraph-center">
//                                   <b>Scoring System:</b> Scores will be awarded based on the proximity of the user's guess to the actual location. The game will use a location radius to determine the accuracy of the guess. The smaller the distance between the guess and the actual location, the higher the score.
//                               </li>
//                               <li className="paragraph section-paragraph paragraph-center">
//                                   <b>No Hints or Clues:</b> Unlike traditional games, our game will not provide any hints or clues beyond the image itself, making it a more challenging experience.
//                               </li>
//                               </ul>
//                       </section>
//   		    </>
// 		) : (
//                         <>
//                             {/* User is not authenticated, display login component */}
//                             <h1>Welcome to PUGuessr</h1>
//                             <RegisterAndLogin />
//                         </>
//                     )}
//                   </div>
//               </main>
//               <Footer />
//           </div>
//       );
//   }

// export default Home;

// import React, { useState, useEffect } from 'react';
// import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { database } from '../../FirebaseConfig';
// import { useNavigate } from "react-router-dom";
// import EnterGame from "../../components/EnterGame/EnterGame";  // Import EnterGame if not already imported
// import Header from "../../components/Header/Header";  // Import Header if not already imported
// import Footer from "../../components/Footer/Footer";  // Import Footer if not already imported
// import RegisterAndLogin from "../RegisterAndLogin";
// import cls from "./home.module.css";
// import { useAuthState } from "react-firebase-hooks/auth";

// import background1 from "../Home/images/background.jpg";
// import background4 from "../../components/Images/background4.jpg";
// import background2 from "../../components/Images/background2.jpg";

// const images = [background2, background4, background1];

// function Home() {
//   const [login, setLogin] = useState(false);
//   const [user] = useAuthState(database);
//   const history = useNavigate();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const handleSubmit = (e, type) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     if (type === 'signup') {
//       createUserWithEmailAndPassword(database, email, password)
//         .then((data) => {
//           console.log(data, 'authData');
//           history('/home');
//         })
//         .catch((err) => {
//           alert(err.code);
//           setLogin(true);
//         });
//     } else {
//       signInWithEmailAndPassword(database, email, password)
//         .then((data) => {
//           console.log(data, 'authData');
//           history('/home');
//         })
//         .catch((err) => {
//           alert(err.code);
//         });
//     }
//   };

//   const handleReset = () => {
//     history('/reset');
//   };

//   const handleSignOut = () => {
//     signOut(database)
//       .then(() => {
//         history('/');
//       })
//       .catch((error) => {
//         console.error('Sign out error:', error);
//       });
//   };

//   return (
//     <div>
//       <Header label="Stats" href="/stats" showLogout={user} handleSignOut={handleSignOut} />

//       <main className={`${cls['main-section']} header-above`} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
//         <div className="container main-container">
//           {user ? (
//             <>
//               <section className="section">
//                 <h2 className="title section-title title-center">Description</h2>
//                 <p className="paragraph section-paragraph paragraph-center">Welcome to PUGuessr.</p>
//                 <p className="paragraph section-paragraph paragraph-center">
//                   Do you think you know Pondicherry University much better than everyone else? Well, let's find out.
//                 </p>
//               </section>

//               <section className="section">
//                 <h2 className="title section-title title-center">Singleplayer</h2>
//                 <EnterGame className={cls.enter_game} />
//               </section>

//               <section className="section">
//                 <h2 className="title section-title title-center">Tutorial</h2>
//                 <p className="paragraph section-paragraph paragraph-center">
//                   PUGuessr aims to transform the way students and visitors experience our university campus. By merging
//                   the excitement of geographical exploration with the educational opportunities on our campus, we envision
//                   a unique and engaging experience. Players will embark on a virtual journey of discovery, exploring the
//                   nooks and crannies of our university while enhancing their geographic knowledge.
//                 </p>
//                 <p className="paragraph section-paragraph paragraph-center">
//                   In PUGuessr, users will be presented with a photograph of a specific location within the university
//                   campus. The game mechanics are designed to challenge users' observational and geographical knowledge
//                   without the aid of hints or clues. Here's how the gameplay will work:
//                 </p>
//                 <p className="paragraph section-paragraph paragraph-center">
//                   <em>Photo Observation:</em> Users will have one minute to examine the provided photograph. They can
//                   zoom in and explore the details to gather as much information as possible.
//                 </p>
//                 <ul className="list section-list">
//                   <li className="paragraph section-paragraph paragraph-center">
//                     <b>Guess Placement:</b> After studying the photo, users will place their guess on a map of the
//                     university campus. This is where they believe the photo was taken.
//                   </li>
//                   <li className="paragraph section-paragraph paragraph-center">
//                     <b>Scoring System:</b> Scores will be awarded based on the proximity of the user's guess to the
//                     actual location. The game will use a location radius to determine the accuracy of the guess. The
//                     smaller the distance between the guess and the actual location, the higher the score.
//                   </li>
//                   <li className="paragraph section-paragraph paragraph-center">
//                     <b>No Hints or Clues:</b> Unlike traditional games, our game will not provide any hints or clues
//                     beyond the image itself, making it a more challenging experience.
//                   </li>
//                 </ul>
//               </section>
//             </>
//           ) : (
//             <>
//               {/* User is not authenticated, display login component */}
//               <h1>Welcome to PUGuessr</h1>
//               <RegisterAndLogin />
//             </>
//           )}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { database } from '../../FirebaseConfig';
import { useNavigate } from "react-router-dom";
import EnterGame from "../../components/EnterGame/EnterGame";  // Import EnterGame if not already imported
import Header from "../../components/Header/Header";  // Import Header if not already imported
import Footer from "../../components/Footer/Footer";  // Import Footer if not already imported
import RegisterAndLogin from "../RegisterAndLogin";
import cls from "./home.module.css";
import { useAuthState } from "react-firebase-hooks/auth";

import background1 from "../Home/images/background.jpg";
import background4 from "../../components/Images/background4.jpg";
import background2 from "../../components/Images/background2.jpg";

const images = [background2, background4, background1];

function Home() {
  const [login, setLogin] = useState(false);
  const [user] = useAuthState(database);
  const history = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type === 'signup') {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, 'authData');
          history('/home');
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, 'authData');
          history('/home');
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history('/reset');
  };

  const handleSignOut = () => {
    signOut(database)
      .then(() => {
        history('/');
      })
      .catch((error) => {
        console.error('Sign out error:', error);
      });
  };

  return (
    <div>
      {user && <Header label="Stats" href="/stats" showLogout={user} handleSignOut={handleSignOut} />}
      <main className={`${cls['main-section']} ${user ? 'header-above' : ''}`} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className="container main-container">
          {user ? (
            <>
              <section className="section">
                <h2 className="title section-title title-center">Description</h2>
                <p className="paragraph section-paragraph paragraph-center">Welcome to PUGuessr.</p>
                <p className="paragraph section-paragraph paragraph-center">
                  Do you think you know Pondicherry University much better than everyone else? Well, let's find out.
                </p>
              </section>

              <section className="section">
                <h2 className="title section-title title-center">Singleplayer</h2>
                <EnterGame className={cls.enter_game} />
              </section>

              <section className="section">
                <h2 className="title section-title title-center">Tutorial</h2>
                <p className="paragraph section-paragraph paragraph-center">
                  PUGuessr aims to transform the way students and visitors experience our university campus. By merging
                  the excitement of geographical exploration with the educational opportunities on our campus, we envision
                  a unique and engaging experience. Players will embark on a virtual journey of discovery, exploring the
                  nooks and crannies of our university while enhancing their geographic knowledge.
                </p>
                <p className="paragraph section-paragraph paragraph-center">
                  In PUGuessr, users will be presented with a photograph of a specific location within the university
                  campus. The game mechanics are designed to challenge users' observational and geographical knowledge
                  without the aid of hints or clues. Here's how the gameplay will work:
                </p>
                <p className="paragraph section-paragraph paragraph-center">
                  <em>Photo Observation:</em> Users will have one minute to examine the provided photograph. They can
                  zoom in and explore the details to gather as much information as possible.
                </p>
                <ul className="list section-list">
                  <li className="paragraph section-paragraph paragraph-center">
                    <b>Guess Placement:</b> After studying the photo, users will place their guess on a map of the
                    university campus. This is where they believe the photo was taken.
                  </li>
                  <li className="paragraph section-paragraph paragraph-center">
                    <b>Scoring System:</b> Scores will be awarded based on the proximity of the user's guess to the
                    actual location. The game will use a location radius to determine the accuracy of the guess. The
                    smaller the distance between the guess and the actual location, the higher the score.
                  </li>
                  <li className="paragraph section-paragraph paragraph-center">
                    <b>No Hints or Clues:</b> Unlike traditional games, our game will not provide any hints or clues
                    beyond the image itself, making it a more challenging experience.
                  </li>
                </ul>
              </section>
            </>
          ) : (
            <>
              <h1>Welcome to PUGuessr</h1>
              <RegisterAndLogin />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
