// Before importing create a seperated div and them import this function inside that div to get correct results.

// Please get the styling from ./style/navbar.css

// If you want to see the sample how to make the navbar import properly please refer to navbar.html.

function navbar_imp () {
    return `
    <div id="navbar">
            <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/1200px-Fiverr_Logo_09.2020.svg.png" alt="logo">

        <input type="text" id="query" placeholder="What service are you looking for today">
        <svg
        id="search" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path>
        </svg>
        <h4 style="color: #1e1692;">Fiverr Business</h4>
        <h4>Explore</h4>
        <h4>English</h4>
        <h4>₹ INR</h4>
        <h4>Become a Seller</h4>
        <a href="./login.html"><h4 id="userid">Sign In</h4></a>
        <a href="./signup_card.html"><button id="signup">Join</button></a>
    </div>
    <div class="dropdown">
        <ul>
            <li class="gd">Graphics & Design
                <div id="ele1">
                    <div>
                        <ul>
                            <h5>Logo & Brand Identity</h5>
    
                            <li>Logo Design</li>
                            <li>Brand Style Guides</li>
                            <li>Fonts & Typography</li>
                            <li>Business Cards & Stationery</li>
                        </ul>
    
                        <ul>
                            <h5>Gaming</h5>
                            <li>Game Art</li>
                            <li>Graphics for Streamers</li>
                            <li>Twitch Store</li>
                            <li>Art & Illustration</li>
                        </ul>
    
                        <ul>
                            <h5>Illustration</h5>
                            <li>NFT Art</li>
                            <li>Pattern Design</li>
                            <li>Portraits & Caricatures</li>
                            <li>Cartoons & Comics</li>
                            <li>Tattoo Design</li>
                            <li>Storyboards</li>
                            <li>Web & App Design</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <h5>Web & App Design</h5>
                            <li>App Design</li>
                            <li>Website Design</li>
                            <li>UX Design</li>
                            <li>Landing Page Design</li>
                            <li>Icon Design</li>
                            <li>Marketing Design</li>
                        </ul>

                        <ul>
                            <h5>Marketing Design</h5>
                            <li>Social Media Design</li>
                            <li>Email Design</li>
                            <li>Web Banners</li>
                            <li>Signage Design</li>
                            
                        </ul>

                        <ul>
                            <h5>Packaging & Covers</h5>
                            <li>Packaging & Label Design</li>
                            <li>Book Design</li>
                            <li>Album Cover Design</li>
                            <li>Podcast Cover Art</li>
                            <li>Car Wraps</li>
                        </ul>

                        <ul>
                            <h5></h5>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <h5>Visual Design</h5>
                            <li>Image Editing</li>
                            <li>Presentation Design</li>
                            <li>Infographic Design</li>
                            <li>Vector Tracing</li>
                            <li>Resume Design</li>
                        </ul>

                        <ul>
                            <h5>Architecture & Building Design</h5>
                            <li>Architecture & Interior Design</li>
                            <li>Landscape Design</li>
                            <li>Building Engineering</li>
                            <li>Building Information Modeling</li>
                        </ul>

                        <ul>
                            <h5>Fashion & Jewelry</h5>
                            <li>Fashion Design</li>
                            <li>Jewelry Design</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <h5>Print Design</h5>
                            <li>T-Shirts & Merchandise</li>
                            <li>Flyer Design</li>
                            <li>Brochure Design</li>
                            <li>Poster Design</li>
                            <li>Catalog Design</li>
                            <li>Menu Design</li>
                            <li>Invitation Design</li>
                        </ul>

                        <ul>
                            <h5>Product & Characters Design</h5>
                            <li>Industrial & Product Design</li>
                            <li>Character Modeling</li>
                            <li>Trade Booth Design</li>
                        </ul>

                        <ul>
                            <h5>Miscellaneous</h5>
                            <li>Logo Maker Tool</li>
                            <li>Design Advice</li>
                            <li>Other</li>
                        </ul>

                    </div>

                </div>
            </li>


            <li class="dm">Digital Marketing
                <div id="ele2">
                    <div>
                        <ul>
                            <li>Social Media Marketing</li>
                            <li>Social Media Advertising</li>
                            <li>Search Engine Optimization (SEO)</li>
                            <li>Local SEO</li>
                            <li>Marketing Strategy</li>
                            <li>Public Relations</li>
                            <li>Guest Posting</li>
                            <li>Video Marketing</li>
                            <li>Email Marketing</li>
                            <li>Web Analytics</li>
                            <li>Text Message Marketing</li>
                            <li>Crowdfunding</li>
                        </ul>

                        <ul>
                            <li>Marketing AdviceNEW</li>
                            <li>Search Engine Marketing (SEM)</li>
                            <li>Display Advertising </li>
                            <li>E-Commerce Marketing</li>
                            <li>Influencer Marketing</li>
                            <li>Community Management</li>
                            <li>Mobile App Marketing</li>
                            <li>Music Promotion</li>
                            <li>Book & eBook Marketing</li>
                            <li>Podcast Marketing</li>
                            <li>Affiliate Marketing</li>
                            <li>Other</li>
                        </ul>

                    </div>
                </div>
            </li>


            <li class="wt">Writing & Translation
                <div id="ele3">
                    <div>
                        <ul>
                            <li>Articles & Blog Posts</li>
                            <li>Translation</li>
                            <li>Proofreading & Editing</li>
                            <li>Resume Writing</li>
                            <li>Cover Letters</li>
                            <li>LinkedIn Profiles</li>
                            <li>Ad CopyNEW</li>
                            <li>Sales Copy</li>
                            <li>Social Media Copy</li>
                            <li>Email Copy</li>
                            <li>Case Studies</li>
                        </ul>

                        <ul>
                            <li>Book & eBook Writing</li>
                            <li>Book EditingNEW</li>
                            <li>Scriptwriting</li>
                            <li>Podcast Writing</li>
                            <li>Beta Reading</li>
                            <li>Creative Writing</li>
                            <li>Brand Voice & Tone</li>
                            <li>UX Writing</li>
                            <li>Speechwriting</li>
                            <li>eLearning Content DevelopmentNEW</li>
                            <li>Technical Writing</li>
                        </ul>

                        <ul>
                            <li>Job DescriptionsNEW</li>
                            <li>White Papers</li>
                            <li>Website Content</li>
                            <li>Product Descriptions</li>
                            <li>Press Releases</li>
                            <li>Business Names & Slogans</li>
                            <li>Grant Writing</li>
                            <li>Transcription</li>
                            <li>Research & Summaries</li>
                            <li>Writing AdviceNEW</li>
                            <li>Other</li>
                        </ul>
                    </div>
                </div>

            </li>


            <li class="va">Video & Animation
                <div id="ele4">
                    <div>
                        <ul>
                            <li>Video Editing</li>
                            <li>Short Video Ads</li>
                            <li>Whiteboard & Animated Explainers</li>
                            <li>Character Animation</li>
                            <li>Lyric & Music Videos</li>
                            <li>Logo Animation</li>
                            <li>Intros & Outros</li>
                            <li>Visual Effects</li>
                            <li>Subtitles & Captions</li>
                            <li>Spokesperson Videos</li>
                            <li>Unboxing Videos</li>
                            <li>Animated GIFs</li>
                        </ul>

                        <ul>
                            <li>3D Product Animation</li>
                            <li>Social Media VideosNEW</li>
                            <li>E-Commerce Product Videos</li>
                            <li>Live Action Explainers</li>
                            <li>Lottie & Website Animation</li>
                            <li>NFT Animation</li>
                            <li>Corporate Videos</li>
                            <li>App & Website Previews</li>
                            <li>Animation for Streamers</li>
                            <li>Slideshow Videos</li>
                            <li>Crowdfunding Videos</li>
                            <li>Meditation Videos</li>
                            <li>Product Photography</li>
                        </ul>

                        <ul>
                            <li>Animation for Kids</li>
                            <li>Article to Video</li>
                            <li>Game Trailers</li>
                            <li>Book Trailers</li>
                            <li>Real Estate Promos</li>
                            <li>eLearning Video Production</li>
                            <li>Video Templates Editing</li>
                            <li>Screencasting Videos</li>
                            <li>Local PhotographyBETA</li>
                            <li>VideographersNEW</li>
                            <li>Filmed Video ProductionNEW</li>
                            <li>Video AdviceNEW</li>
                            <li>Other</li>
                        </ul>
                    </div>
                </div>
            </li>


            <li class="ma">Music & Audio
                <div id="ele5">
                    <div>
                        <ul>
                            <li>Voice Over</li>
                            <li>Producers & Composers</li>
                            <li>Singers & Vocalists</li>
                            <li>Session Musicians</li>
                            <li>Jingles & Intros</li>
                            <li>Songwriters</li>
                            <li>Online Music Lessons</li>
                            <li>Beat Making</li>
                            <li>Audiobook Production</li>
                            <li>Audio Ads Production</li>
                            <li>Sound Design</li>
                            <li>Mixing & Mastering</li>
                        </ul>

                        <ul>
                            <li>Audio Editing</li>
                            <li>Podcast Editing</li>
                            <li>Music Transcription</li>
                            <li>Vocal Tuning</li>
                            <li>DJ Drops & Tags</li>
                            <li>DJ Mixing</li>
                            <li>Remixing & Mashups</li>
                            <li>Synth Presets</li>
                            <li>Meditation Music</li>
                            <li>Audio Logo & Sonic Branding</li>
                            <li>Music & Audio AdviceNEW</li>
                            <li>Other</li>
                        </ul>
                    </div>
                </div>
            </li>


            <li class="pt">Programming & Tech
                <div id="ele6">
                    <div>
                        <ul>
                            <li>WordPress</li>
                            <li>Website Builders & CMS</li>
                            <li>Game Development</li>
                            <li>Development for Streamers</li>
                            <li>Web Programming</li>
                            <li>E-Commerce Development</li>
                            <li>Mobile Apps</li>
                            <li>Desktop Applications</li>
                            <li>Chatbots</li>
                            <li>Support & IT</li>
                            <li>Online Coding Lessons</li>
                            <li>Cybersecurity & Data Protection</li>
                        </ul>

                        <ul>
                            <li>Get Your Website in a Few Steps</li>
                            <li>Electronics EngineeringNEW</li>
                            <li>Convert Files</li>
                            <li>User Testing</li>
                            <li>QA & Review</li>
                            <li>Blockchain & Cryptocurrency</li>
                            <li>NFT DevelopmentNEW</li>
                            <li>Databases</li>
                            <li>Data Processing</li>
                            <li>Data EngineeringNEW</li>
                            <li>Data ScienceNEW</li>
                            <li>Other</li>
                        </ul>
                    </div>
                </div>
            </li>

            <li class="bn">Business
                <div id="ele7">
                    <div>
                        <ul>
                            <li>Virtual Assistant</li>
                            <li>E-Commerce Management</li>
                            <li>Market Research</li>
                            <li>Sales</li>
                            <li>Customer Care</li>
                            <li>CRM Management NEW</li>
                            <li>ERP ManagementNEW</li>
                            <li>Supply Chain Management</li>
                            <li>Project Management</li>
                            <li>Event ManagementNEW</li>
                            <li>Game Concept Design</li>
                        </ul>

                        <ul>
                            <li>Business Plans</li>
                            <li>Financial Consulting</li>
                            <li>Legal Consulting</li>
                            <li>Business Consulting</li>
                            <li>Presentations</li>
                            <li>HR Consulting</li>
                            <li>Career Counseling</li>
                            <li>Data Entry</li>
                            <li>Data Analytics</li>
                            <li>Data Visualization</li>
                            <li>Other                            
                        </ul>
                    </div>
                </div>
            </li>


            <li class="lf">Lifestyle
                <div id="ele8">
                    <div>
                        <ul>
                            <li>Online Tutoring</li>
                            <li>Gaming</li>
                            <li>Astrology & Psychics</li>
                            <li>Modeling & Acting</li>
                            <li>Wellness</li>
                            <li>Traveling</li>
                            <li>Fitness Lessons</li>
                            <li>Dance Lessons</li>
                            <li>Life Coaching</li>
                        </ul>

                        <ul>
                            <li>Greeting Cards & Videos</li>
                            <li>Personal Stylists</li>
                            <li>Cooking Lessons</li>
                            <li>Craft Lessons</li>
                            <li>Arts & Crafts</li>
                            <li>Family & Genealogy</li>
                            <li>Collectibles</li>
                            <li>Other</li>
                        </ul>
                    </div>
                </div>
            </li>


            <li class="td">Trending
                <div id="ele9">
                    <div>
                        <ul>
                            <li>Dropshipping</li>
                            <li>E-Commerce Marketing</li>
                            <li>Game Development</li>
                            <li>Discord Services</li>
                            <li>NFT Services</li>                        
                        </ul>

                        <ul>
                            <li>Architecture & Interior Design</li>
                            <li>Data</li>
                            <li>Resume Writing</li>
                            <li>Search Engine Optimization (SEO)</li>
                            <li>Character Modeling</li>
                            <li>Character Animation</li>
                            <li>Image Editing</li>  
                        </ul>
                    </div>
                </div>
            </li>
            </ul>
    </div>`;
}


export default navbar_imp;