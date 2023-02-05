import React from 'react';
import s from './Homepage.module.scss';

export default function Homepage() {
    return (
        <div className={s.container}>
            <div className={s.homepage}>
                <h1>Тут вы можете тренироваться!</h1>
                <div className={s.homepage__body}>
                    <p>Лень расписывать всё про всё, сами разберётесь</p>
                    <p>
                        Если есть предложения можете написать мне в{' '}
                        <a
                            target='_blunk'
                            href='https://tlgg.ru/vyyaqcheeslaav'
                        >
                            Телеграмм
                        </a>{' '}
                        (Саня, не троян)
                    </p>
                </div>
                <div className={s.git}>
                    Ссылка на{' '}
                    <a
                        target='_blunk'
                        href='https://github.com/OfLORIAnO/schoolTraningPlatformForGoodPersonsAndMansWhoLoveHentai'
                    >
                        гитхаб проекта
                    </a>
                </div>
            </div>
        </div>
    );
}
