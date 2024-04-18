// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 2;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = false;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 10;
var followBearing = 29;
var followPitch = 0;

var turnOnAnimation = false;

window.startAnimation = () => {
    turnOnAnimation = true;
    console.log('callback')
}

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/elinaoik/ckov2d8au2z5518pepqyw28z4',
    // style: 'mapbox://styles/mapbox/satellite-v8',
    // style: 'mapbox://styles/mapbox/outdoors-v10',
    accessToken: 'pk.eyJ1IjoiZWxpbmFvaWsiLCJhIjoiY2tidWwzenhvMDVyMTJ4bzVyYWVlMGdkZSJ9.ZzKoxiO3-YaCk4CJilMPVA',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'The Title Text of this Story',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    // footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slide-0',
            title: 'Exploring Coral Reefs Based on Temporal and Preferential Constraints',
            //image: './path/to/image/source.png',
            // description: 'Coral reefs are extraordinary underwater ecosystems brimming with vibrant colors, teeming with life, and holding remarkable ecological significance. These intricate structures, formed by the accumulation of calcium carbonate exoskeletons secreted by tiny marine organisms called polyps, provide a haven for an astonishing array of marine species. Nestled in warm, tropical waters around the world, coral reefs offer shelter, food, and breeding grounds to a diverse range of fish, crustaceans, mollusks, and countless other organisms. ',
            location: {
                center:[20.20552, 12.66720],
                zoom: 1.8,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            title: 'Biodiversity',
            //image: './path/to/image/source.png',
            // description: 'Coral reefs are renowned for their exceptional biodiversity, housing a stunning array of marine life. The Coral Triangle, located in the Indo-Pacific region, is widely regarded as the most biodiverse coral reef area on the planet. Encompassing Indonesia, the Philippines, Malaysia, Papua New Guinea, Timor-Leste, and the Solomon Islands, the Coral Triangle is home to an astounding number of species, including more than 75% of the worlds known coral species and over 3,000 species of fish. It also supports a rich variety of marine mammals, sea turtles, crustaceans, mollusks, and countless other organisms. Other regions renowned for their coral reef biodiversity include the Great Barrier Reef in Australia, the Caribbean Sea (including the Mesoamerican Barrier Reef System), the Red Sea, and the islands of the Pacific Ocean. These diverse ecosystems not only captivate with their vibrant colors but also provide vital habitats and ecological services to numerous species, making them of great ecological importance and a source of wonder for scientists and nature enthusiasts alike.',
            location: {
                center:[20.20552, 12.66720],
                zoom: 1.8,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer:'country-boundaries_background',
                    opacity: 1
                },
                {
                    layer: 'landuse-overlay',
                    opacity: 1
                },
                { 
                    layer: 'corals_pink',
                    opacity: 1,
                    //duration: 5000
                }
                
            ],
            onChapterExit: [
               
                { 
                    layer: 'corals_pink',
                    opacity: 0,
                    //duration: 500
                }
                
            ]
        },
        {
            id: 'slide-2',
            title: 'Marine Life Biodiversity',
            //image: './path/to/image/source.png',
            // description: 'Coral reefs are renowned for their exceptional biodiversity, housing a stunning array of marine life. The Coral Triangle, located in the Indo-Pacific region, is widely regarded as the most biodiverse coral reef area on the planet. Encompassing Indonesia, the Philippines, Malaysia, Papua New Guinea, Timor-Leste, and the Solomon Islands, the Coral Triangle is home to an astounding number of species, including more than 75% of the worlds known coral species and over 3,000 species of fish. It also supports a rich variety of marine mammals, sea turtles, crustaceans, mollusks, and countless other organisms. Other regions renowned for their coral reef biodiversity include the Great Barrier Reef in Australia, the Caribbean Sea (including the Mesoamerican Barrier Reef System), the Red Sea, and the islands of the Pacific Ocean. These diverse ecosystems not only captivate with their vibrant colors but also provide vital habitats and ecological services to numerous species, making them of great ecological importance and a source of wonder for scientists and nature enthusiasts alike.',
            location: {
                center:[20.20552, 12.66720],
                zoom: 1.8,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer:'country-boundaries_background',
                    opacity: 1
                },
                {
                    layer: 'landuse-overlay',
                    opacity: 1
                },
                
                
                { 
                    layer: 'marine_mammals',
                    opacity: 1,
                    duration: 5000
                }
                

            ],
            onChapterExit: [
                {
                    layer:'country-boundaries_background',
                    opacity: 0
                },
                {
                    layer: 'landuse-overlay',
                    opacity: 0
                },
                
                { 
                    layer: 'marine_mammals',
                    opacity: 0,
                    duration: 500
                },
                
            ]
        },
        {
            id: 'slide-3',
            title: 'Climate',
            //image: './path/to/image/source.png',
            // description: 'Climate is crucial when planning a trip to tropical places because it directly impacts the overall experience and suitability of the destination. Understanding the climate helps travelers prepare for weather conditions, pack appropriate clothing and gear, and plan activities accordingly. Additionally, tropical climates often bring unique characteristics such as distinct seasons, rainy or dry periods, and variations in temperature, which can influence the availability of outdoor activities, wildlife sightings, and overall comfort during the trip. Being informed about the climate ensures that travelers can make the most of their time and enjoy the tropical destination to its fullest.',
            location: {
                center:[20.20552, 12.66720],
                zoom: 1.8,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'slide-4',
            title: 'Temporal Constraints and Climate: Sea Surface Temp.',
            //image: './path/to/image/source.png',
            // description: 'Lets say we would like to travel on February. Looking at the sea surface temperature could provide a first good indication to help us find a good destination. Sea surface temperature significantly impacts the comfort of swimming, snorkeling, and diving activities.',
            location: {
                center:[20.20552, 12.66720],
                zoom: 1.8,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { 
                    layer: 'temp-nasa',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                { 
                    layer: 'temp-nasa',
                    opacity: 0,
                    //duration: 500
                }
            ],
            callBack: 'startAnimation',
            mapAnimation: 'flyTo'
        },
        {
            id: 'slide-5',
            title: 'Temporal Constraints and Climate: Precipitation',
            //image: './path/to/image/source.png',
            // description: 'In addition to the water temperature, monthly precipitation is crucial when planning to travel to a tropical destination. Looking at the precipitation data from NASA for February we can identify that the Caribbean Area is a more appropriate destination.',
            location: {
                center:[20.20552, 12.66720],
                zoom: 1.8,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { 
                    layer: 'precipitation',
                    opacity: 0.7,
                    duration: 5000
                },
                {
                    layer:'country-label-prec',
                    opacity: 1
                }
            ],
            onChapterExit: [
                { 
                    layer: 'precipitation',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer:'country-label-prec',
                    opacity: 0,
                }
            ],
            callBack: 'startAnimation',
            mapAnimation: 'flyTo'
        },
        {
            id: 'slide-6',
            title: 'Vieques, Puerto Rico',
            //image: './path/to/image/source.png',
            // description: 'In this example, we examine the case of Vieques. Vieques is a small island municipality located in Puerto Rico, an unincorporated territory of the United States. Situated in the northeastern Caribbean Sea, Vieques is renowned for its natural beauty and pristine beaches. The island is approximately 21 miles long and 4 miles wide, offering a tranquil and idyllic setting.',
            location: {
                center: [-65.45767, 18.13418],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { 
                    layer: 'coral-layers',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                
            ],
            mapAnimation: 'flyTo'
        },
        {
            id: 'slide-7',
            title: 'Coral Habitat',
            image: './images/chart_coral.png',
            // description: 'Coral Habitat is generally the most topographically complex class (sand, seagrass, rubble and rock are comparatively flat), supports the greatest amount of animal diversity and biomass. Coral abundance is a widely used proxy for reef health and a key metric for ecological monitoring. Most benthic classifications distinguish coral and algae and many move beyond this to classify coral morphology.',
            location: {
                center: [-65.56382, 18.10953],
                zoom: 12.5,
                pitch: 38,
                bearing: 12.80
            },
            onChapterEnter: [
                { 
                    layer: 'coral-layers',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [    
            ],
            rotateAnimation: true
        },
        {
            id: 'slide-8',
            title: 'Sea Depth',
            //image: './images/chart_coral.png',
            // description: 'The depth is one of the factors that can help us determine how far we can see down in the water, and therefore whether coral reefs could be potentially visible with snorkeling or diving is more appropriate. ',
            location: {
                center: [-65.45767, 18.13418],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { 
                    layer: 'coral-layers',
                    opacity: 0.8,
                    //duration: 5000
                },
                {
                    layer: 'landuse-overlay',
                    opacity: 1
                },
                {
                    layer: 'country-boundaries_background',
                    opacity: 1
                },
                {
                    layer: 'bathymetry',
                    opacity: 0.5,
                    duration: 1000
                },
                {
                    layer: 'bathymetry',
                    opacity: 1
                }
            ],
            onChapterExit: [ 
                {
                    layer: 'bathymetry',
                    opacity: 0
                },
                {
                    layer: 'landuse-overlay',
                    opacity: 0
                },
                {
                    layer: 'country-boundaries_background',
                    opacity: 0
                },
                { 
                    layer: 'coral-layers',
                    opacity: 0
                    //duration: 5000
                }
            ]
        },
        {
            id: 'slide-9',
            title: 'Exploring Near by Sites',
            //image: './images/chart_coral.png',
            // description: 'In order to decide which site to visit, one of our important criteria is to have high concentration of coral reefs accessible from the beach. ',
            location: {
                center: [-65.45767, 18.13418],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { 
                    layer: 'corals-filtered',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [  

            ]
        },
        {
            id: 'slide-10',
            title: 'Exploring Near by Beaches',
            //image: './images/chart_coral.png',
            // description: 'These are some beaches that fit our criteria as they are adjacent to the reef within 10 meters radius.',
            location: {
                center: [-65.45767, 18.13418],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { 
                    layer: 'corals-filtered',
                    opacity: 0.9,
                    duration: 2000
                },
                { 
                    layer: 'beaches-points',
                    opacity: 1,
                    duration: 500
                }

            ],
            onChapterExit: [  
                { 
                    layer: 'beaches-points',
                    opacity: 0
                   
                }
            ]
        },
        {
            id: 'slide-11',
            title: 'Day 1 Candidate',
            //image: './images/chart_coral.png',
            // description: '',
            location: {
                center: [-65.45522, 18.11593],
                zoom: 12.76,
                pitch: 53.76,
                bearing: 0
            },
            onChapterEnter: [
                { 
                    layer: 'coral-layers',
                    opacity: 0.8,
                    duration: 2000
                },
                { 
                    layer: 'bahia-point',
                    opacity: 1,
                    //duration: 500
                }

            ],
            onChapterExit: [  
                
            ]
        },
        {
            id: 'drive-slide-0',
            title: 'Day 1 Candidate',
            //image: './images/chavias.jpg',
            // description: 'Bahia de la Chiva, located in Vieques, Puerto Rico, from our hotel while it fulfills our criteria for coral reef proximity and depth.',
            location: {
                // location information is from the drive route

            },
            onChapterEnter: [
                { 
                    layer: 'coral-layers',
                    opacity: 0.8,
                    //duration: 5000
                },
                { 
                    layer: 'bahia-point',
                    opacity: 1,
                    //duration: 500
                }

            ],
            onChapterExit: [],
            
        },
       
        {
            id: 'drive-slide-1',
            title: 'Bahia de la Chiva',
            image: './images/chavias.jpg',
            // description: 'The beach is popular for snorkeling and diving, allowing visitors to explore vibrant coral reefs and encounter an array of marine life in its underwater wonders.',
            location: {
                
            },
            onChapterEnter: [
                { 
                    layer: 'coral-layers',
                    opacity: 0.8,
                    //duration: 5000
                },
                { 
                    layer: 'bahia-point',
                    opacity: 1,
                    //duration: 500
                }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'Bahia de la Chiva',
            //image: './path/to/image/source.png',
            // description: 'Overall, is a picturesque beach renowned for its stunning natural beauty. With crystal-clear turquoise waters, powdery white sand, and lush surroundings, it offers an idyllic tropical paradise.',
            location: {
                
            },
            onChapterEnter: [
                { 
                    layer: 'coral-layers',
                    opacity: 0.8,
                    //duration: 5000
                },
                { 
                    layer: 'bahia-point',
                    opacity: 1,
                    //duration: 500
                }
            ],
            onChapterExit: []
        }

    ]
};
