const hero=document.getElementById("hero");
const home=document.getElementById('home');
const aboutUs=document.getElementById('about-us');
const contactUs=document.getElementById('contact-us');
const homeContact = `
        <h1>EXPLORE<br>DREAM<br>DESTINAION</h1>
        <p>it encoourages exploration of unfamiliar<br>
            territories, embracing diverse cultures and<br>
            landscapes, while pursuing the desired<br>
            destination that captivates the heart and<br>
            ignites a sense of wonder.
        </p>
        <button class="bttn" id="bookbttn">Book Now</button> `;

const content = hero.querySelector('#content');
content.innerHTML=homeContact;

const aboutUsContact=`
        <div>
            <h1>ABOUT US</h1>
            <div class="info">
            <p>Welcome to Our Company! We are a team of passionate individuals dedicated to providing excellent services/products to our customers.<br>
             Our mission is to <strong>provide the best experience </strong>for people traveling to different destinations around the world.<br>
             Our values include integrity, innovation, customer satisfaction, and teamwork. We believe in <strong>our customers first</strong> and working<br>
             together to achieve our goals.<br>
             Feel free to explore our website to learn more about what we offer!</p>
            </div> 
        </div>

        <div id="team">
            <h2>Our<br>Team</h2>
            <div class="info">
                <p><strong>Fares</strong></p>
                <p>Fares is responsible<br>for....</p>
                <button class="bttn team-bttn">CEO</button>
            </div>

            <div class="info">
                <p><strong>Adel</strong></p>
                <p>Adel is responsible<br>for....</p>
                <button class="bttn team-bttn">Advisor</button>
            </div>

            <div class="info">
                <p><strong>Alkamel</strong></p>
                <p>Alkamel is responsible<br>for....</p>
                <button class="bttn team-bttn">Operations</button>
            </div>
        </div>

        <div class="history">
            <h2>Company History</h2>
            <p>Founded in 2018 by avid travelers, our journey began with a vision to simplify travel planning by offering personalized recommendations tailored to<br>
            individual preferences. Starting as a passion project, our commitment to curating unique travel experiences led to the official launch of our platform,<br>
            driven by a team enthusiastic about exploring the world. Over the years, we've evolved into a trusted hub, leveraging cutting-edge technology and expert<br>
            insights to provide tailored destination suggestions that resonate with diverse travelers.</p>
            <h2><br>Our Location</h2>
            <div id="loction">
                <img src="./imgs/firstLocation.jpg"  class="img-loction" alt="First Loction">
                <img src="./imgs/SecLocation.jpg" class="img-loction" alt="Secound Loction">
            </div>
        </div>`;

const contactUsContact=`
            <div id="contact-fileds">
                <h2>CONTACT US</h2>
                <div id="form">
                    <label for="name">Name</label>
                    <input type="text" class="form-inputs" id="name" placeholder="Enter your name">
                    <label for="email">Email</label>
                    <input type="text" class="form-inputs" id="email" placeholder="Enter your email">
                    <label for="message">Message</label>
                    <textarea class="form-inputs message-input" id="message" placeholder="Enter your message"></textarea>
                    <button class="bttn" id="submit-bttn">Submit</button>
                </div>
            </div>`;

function changeContent (html,className){
    content.innerHTML=html;
    content.className=className;
}

home.addEventListener("click",()=>changeContent (homeContact,'home-CSS') );
aboutUs.addEventListener("click",()=>changeContent (aboutUsContact,'about-CSS') );
contactUs.addEventListener("click",()=>changeContent (contactUsContact,'contact-CSS') );


const searchBttn = document.getElementById('serach');

function interest (word){

}

function searchResult(){
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    fetch('travel_recommendation_api.json')
                .then(response => response.json())
                .then(data =>{
                    const countryResult=[];
                    data.countries.forEach(country => {
                        const name = country.name.toLowerCase();
                        const hasCity = country.cities.some(city => city.name.toLowerCase().includes(searchInput));
                        if (name.includes(searchInput) || hasCity){
                            countryResult.push(country.id);
                        }
                    });

                    
                })
}
searchBttn.addEventListener('click',searchResult);