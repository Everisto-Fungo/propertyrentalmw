
function forVideos() {
     [

        {
        
        location:"47",
        id:uuidv4(),
        src:"./images/portfolio/videography/videos/one.mp4",
        category:"home",
        client:"macro",
        rental:$500,
        subvideos:[
            {
                title:"title 1",
                src:"./images/portfolio/videography/videos/one.mp4",
            }, {
                title:"title 1",
                src:"./images/portfolio/videography/videos/one.mp4",
            }
        ]
        },        
        ]
        }


        let renderHouses= function (videos,filter) {

            // videos = sortVideos(videos, filter.sort)
        
            // check the menu slector
        
        //  const searchFilteredNotes = videos.filter(function (video) {
        //         return video.category.toLowerCase().includes(filter.category.toLowerCase()) 
        //     })
        
            
        // do the rendering 
        videographySection.innerHTML=""
        
        let VideographyDiv = document.createElement("div")
        VideographyDiv.classList="VideographyDiv"
        
        // get video data
        searchFilteredNotes.forEach(video => {
            const id= uuidv4()
            video.id=id
            let each= document.createElement("div")
            each.classList="each"
            let spanOne = document.createElement("span")
            spanOne.textContent=`see more`
            spanOne.classList="see-more"
            spanOne.id=video.id
            let spanTwo = document.createElement("span")
            spanTwo.textContent=`share`
        
        
            let vidoeTag= document.createElement("video")
            vidoeTag.setAttribute("src", video.src, )
            vidoeTag.setAttribute("controls", true, )
            vidoeTag.classList="video-tag"
        
            each.appendChild(vidoeTag)
        
            each.appendChild(spanOne)
            each.appendChild(spanTwo)
        
            VideographyDiv.appendChild(each)
        
        });
        videographySection.appendChild(VideographyDiv)
        
        // see more 
        seeMoreFunction(searchFilteredNotes)
        
        
        
        }