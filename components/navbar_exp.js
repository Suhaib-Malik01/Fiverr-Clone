// Before importing create a seperated div and them import this function inside that div to get correct results.

// Please get the styling from ./style/navbar.css

// If you want to see the sample how to make the navbar import properly please refer to navbar.html.

function navbar_imp () {
    return `
    <div id="navbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/1200px-Fiverr_Logo_09.2020.svg.png" alt="logo">
        <input type="text" id="query" placeholder="What service are you looking for today">
        <svg
        id="search" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path>
        </svg>
        <h4 style="color: #1e1692;">Fiverr Business</h4>
        <h4>Explore</h4>
        <h4>English</h4>
        <h4>₹ INR</h4>
        <h4>Become a Seller</h4>
        <h4>Sign In</h4>
        <button id="signup">Join</button>
    </div>

    <div id="dropdown">
        <p>Graphics & Design</p>
        <p>Digital Marketing</p>
        <p>Writing & Translation</p>
        <p>Video & Animation</p>
        <p>Music & Audio</p>
        <p>Programming & Tech</p>
        <p>Business</p>
        <p>Lifestyle</p>
        <p>Trending</p>
    </div>`;
}


export default navbar_imp;