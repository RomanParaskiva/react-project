import React from 'react';


function FirstScreen() {
    return (
    <section id="main">

        <div className="main_wrapper">
            <div className="title_blc">
                <h1 className="title">
                    <div><span className="upper">P</span>arasta</div>
                    <div><span className="upper">G</span>roup</div>
                </h1>
                <div className="shadow_blc">
                    <span className="title_shadow">Parasta</span>
                    <span className="title_shadow">Group</span>
                </div>
            </div>

            <div className="desc_blc">
                <h2>Все виды услуг для вашего бизнеса</h2>
                <div className="content">
                    <div className="content__container">
                        <ul className="content__container__list">
                            <li className="content__container__list__item">хостинг</li>
                            <li className="content__container__list__item">лендинг</li>
                            <li className="content__container__list__item">многостраничник</li>
                            <li className="content__container__list__item">интернет магазин</li>
                            <li className="content__container__list__item">реклама в Google и Yandex</li>
                        </ul>
                    </div>
                </div>
                <h2>Доверьте создание и продвижение Вашего сайта профессионалам</h2>
            </div>
        </div>
    </section>
    )
}

export default FirstScreen;