const carouselData = [
    { title: "UI/UX Design Masterclass", desc: "Build stunning user interfaces today.", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000" },
    { title: "AI & Machine Learning", desc: "Master the future with Google-certified programs.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" },
];

const enrolled = [
    { img: "/images/fullstack.png",name: "Fullstack Web Dev", progress: 0, instructor: "John Smith" },
    { img: "/images/machinelearning.png", name: "Machine Learning",progress: 30, instructor: "Sarah Lee" }
];

const recommended = [
    { title: "Cloud Computing", rating: 4.8, tag: "Best Seller", img: "/images/cloud.png" },
    { title: "Python for Data", rating: 4.9, tag: "Recommended", img: "/images/python.png" },
    { title: "Digital Marketing", rating: 4.5, tag: "Trending", img: "/images/digital-marketing.png" },
    { title: "Fullstack Web Dev", rating: 4.9, tag: "Relevant" ,img: "/images/fullstack.png"},
    { title: "Machine Learning",rating: 4.0,tag: "Relevant" ,img: "/images/machinelearning.png" }
];

const jobs = [
    { title: "Frontend Engineer", company: "TechFlow", skills: ["React", "Tailwind"] },
    { title: "Product Designer", company: "Creative Co", skills: ["Figma", "UX"] }
];

let currentSlide = 0;

function renderUI() {
    

    // Enrolled
    if(document.getElementById('continue-learning-grid')){

        
    document.getElementById('continue-learning-grid').innerHTML = enrolled.map(c => `
        <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border group cursor-pointer">

            <!-- Image -->
            <div class="h-40 overflow-hidden">
                <img src="${c.img}" 
                    class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
            </div>

            <!-- Content -->
            <div class="p-4">
                
                <!-- Title -->
                <h3 class="font-semibold text-lg text-gray-800 mb-2">
                    ${c.name}
                </h3>

                <!-- Progress Bar -->
                <div class="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div class="bg-blue-600 h-full transition-all duration-500"
                        style="width: ${c.progress}%">
                    </div>
                </div>

                <!-- Progress Text -->
                <div class="flex justify-between items-center mt-2">
                    <p class="text-xs text-gray-500">
                        Progress
                    </p>
                    <p class="text-xs font-semibold text-blue-600">
                        ${c.progress}%
                    </p>
                </div>

                <!-- CTA -->
                <button onclick="window.location.href='/course?name=${encodeURIComponent(c.name)}'" class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                    Continue Learning →
                </button>

            </div>
        </div>
    `).join('');
    }
    else{
        return
    }

    // Recommended
    document.getElementById('recommended-scroll').innerHTML = recommended.map(c => `
        <div class="min-w-[260px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border group cursor-pointer">

            <!-- Image -->
            <div class="relative h-36 overflow-hidden">
                <img src="${c.img}" 
                    class="w-full h-full object-cover group-hover:scale-105 transition duration-300">

                <!-- Tag Badge -->
                <span class="absolute top-3 left-3 text-xs bg-blue-600 text-white px-2 py-1 rounded-full shadow">
                    ${c.tag}
                </span>
            </div>

            <!-- Content -->
            <div class="p-4">

                <!-- Title -->
                <h3 class="font-semibold text-gray-800 text-base mb-1 line-clamp-1">
                    ${c.title}
                </h3>

                <!-- Rating -->
                <div class="flex items-center justify-between mt-2">
                    <p class="text-sm text-yellow-500 font-medium">
                        <i class="fa-solid fa-star"></i> ${c.rating}
                    </p>

                    <span class="text-xs text-gray-400">
                        Popular
                    </span>
                </div>

                <!-- CTA -->
                <button class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                    View Course →
                </button>

            </div>
        </div>
    `).join('');

    // Jobs
    // document.getElementById('jobs-grid').innerHTML = jobs.map(j => `
    //     <div class="bg-white p-6 rounded-2xl flex justify-between items-center border">
    //         <div><h3 class="font-bold">${j.title}</h3><p class="text-blue-600">${j.company}</p></div>
    //         <button class="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm">Apply</button>
    //     </div>
    // `).join('');
}
function renderCarousel(){
    // Carousel
    if(document.getElementById('carousel-container')){
        document.getElementById('carousel-container').innerHTML = carouselData.map((item, idx) => `
            <div class="carousel-item absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}">
                <img src="${item.img}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black/60 flex items-center px-12 text-white">
                    <div><h2 class="text-4xl font-bold">${item.title}</h2><p class="mt-2">${item.desc}</p></div>
                </div>
            </div>
        `).join('');
    }

    else{
        return
    }   
}


function nextSlide() { currentSlide = (currentSlide + 1) % carouselData.length; renderCarousel(); }
function prevSlide() { currentSlide = (currentSlide - 1 + carouselData.length) % carouselData.length; renderCarousel(); }

document.addEventListener("DOMContentLoaded", () => {
    renderUI();
    renderCarousel();
});

setInterval(nextSlide, 5000);