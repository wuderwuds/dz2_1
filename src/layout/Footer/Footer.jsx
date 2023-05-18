import styles from './footer.module.css'

export const Footer = () => {
    return(
        <footer>
        <div className={styles.footer__container}>
            <div className={styles.footer__group}>
                <h3>Позвонить нам:</h3>
                <div className={styles.footer__links}>
                    <a href="tel:74959999999">+7 (495) 999-99-99</a>
                </div>
            </div>

            <div className={styles.footer__group}>
                
                <div className={styles.footer__links}>
                    <a href="#"> Акции</a>
                    <a href="#"> Новости</a>
                    <a href="#"> Отзывы</a>
                </div>
            </div>

            <div className={styles.footer__group}>
                <h3>Компания:</h3>
                <div className={styles.footer__links}>
                    <a href="#">Контакты</a>
                    <a href="#">Вакансии</a>
                    <a href="#">СМИ</a>
                </div>
            </div>

        </div>
        <div className={styles.footer__copyright}> GreenCorp © 2021

        </div>





    </footer>
    )
}