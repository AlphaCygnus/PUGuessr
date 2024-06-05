import spbw from "../../utils/spbw";

import origLogo from '../../assets/img/original.svg';
import cls from './footer.module.css';

function Footer() {
    return (
        <footer className={cls.footer}>
            <div className={cls.part_top}>
                <div className={spbw('container', cls.container)}>
                    <div className={cls.section}>
                        <h3 className={cls.section_header}>
                            Disclaimer
                        </h3>
                        <p className={cls.section_text}>
                            This game is developed just for the students inside Pondicherry University to have fun.
                        </p>
                        <div className={cls.section_image}>
                            <a href="https://geoguessr.com/" target="_blank" rel="noreferrer">
                                <img src={origLogo} alt="GeoGuessr" width="100px"/>
                            </a>
                        </div>
                    </div>
                    <div className={cls.section}>
                        <h3 className={cls.section_header}>
                            Contact
                        </h3>
                        <div className={cls.section_text}>
                            <ul className={cls.list}>
                                <li>
                                    E-mail:{' '}
                                    <a
                                        href="flamingokitkat@gmail.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        flamingokitkat@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cls.section}>
                        <h3 className={cls.section_header}>
                            Built with...
                        </h3>
                        <div className={cls.section_text}>
                            <ul className={cls.list}>
                                <li>NPM</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.part_bottom}>
                <div className="sharethis-inline-share-buttons"></div>
                <div className={spbw('container', cls.container)}>
                    <p>
                        &copy; 2023 PUGuessr
                    </p>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;