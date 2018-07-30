import styles from '../../styles/index.scss'
import animation from '../../styles/wickedcss.min.css'
import qr_image from '../../images/qr_code.png'
import logo from '../../images/Shape_1.png'

module.exports = {
    content: `
    <div class="${styles.content}">
        <div class="${styles.content__background}"></div>
        <div class="${styles.content__columns}">
            <div class="${styles.content__columns__first} ${animation.slideDown}">
                    <div class="${styles.content__columns__first__logo}">
                        <div><span>CORPORATE</span></div>
                        <p>The way the future gets built.</p>
                    </div>
                    <div class="${styles.content__column__first__description}">
                        <h1>THINK</h1>
                        <h1>TALK</h1>
                        <h1>REALIZE</h1>
                        <p>Leading companies build and run their most important applications on CCO Brand. </p>
                        <p class="${styles.color}">Learn how our 
platform, tools, and methodology help you deliver exceptional user experiences.</p>
                    </div>
                    <div class="${styles.content__column__first__qr}">
                        <div>
                            <h2>OUR COMPANY ON</h2>
                            <img src="${qr_image}" alt="">
                            <h2>www.website.com</h2>
                        </div>
                    </div>
                    <div class="${styles.content__column__first__text}">
                        The future is being built on CCO Brand. Enterprises have adopted our cloud-native platform to unleash software-developer productivity, reduce operational cost, and create an environment for innovation to scale.
                    </div>
            </div>
            <div class="${styles.content__columns__second}">
                <div class="${styles.content__column_second__logo} ${animation.slideDown}">
                <div><a href="http://www.freepik.com"><img src=${logo} alt=""></a>
                <h2>CCO BRAND</h2>
                <p>YOUR PARTNER IN BUSINESS</p></div></div>
            <div class="${styles.content__column_second__description}">
                <h1>WE ARE</h1>
                <div>
                <h2>Accelerating Transformation at Citi</h2>
                <p>With financial startups cropping up in every corner of the world, no big bank can afford to sit back and relax. As Miller puts it: “I really believe whoever has the best offering, and who is iterating the fastest, will win the hearts of the customers.”</p>
                <p>In order for a company the size of Citi to change the way it operates from a technical perspective, the company must take into account years of legacy applications. </p>
                </div>
            </div>
            <div class="${styles.content__column_second__text}">
                <h2>FOR MORE INFORMATIONS</h2>
                <h2>CONTACT US</h2>
                <div>
                <ul>
                <li><p>MAIN STREET, LONDON, 12/B</p><span>:ADDRESS</span></li>
                <li><p>( 012 ) 345 678 901</p><span>:PHONE</span></li>
                <li><p>example@email.com</p><span>:MAIL</span></li>
</ul>
</div>
</div>
            </div>
        </div>
    <div/>
    <div class="${styles.footer}">
    <span>Copyright © 2018 - All Rights Reserved</span>
    <span>Designed by eightonesix, Freepik / Implementation by Yuriy Krishchuk</span>
</div>
`}
