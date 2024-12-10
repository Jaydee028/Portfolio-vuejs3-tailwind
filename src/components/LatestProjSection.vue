<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white"> My Latest Projects</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <button class="hover:text-primary" v-for="category in ['all', 'web development', 'Mobile App']"
                        :key="category" @click="() => selectedCategory = category">
                        {{ category }}
                    </button>
                </div>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <div v-for="project in filteredProjects" :key="project.id">
                    <div class="h-52 md:h-[24rem] rounded-t-xl relative group"
                        :style="{ backgroundImage: 'url(' + project.image + ')', backgroundSize: 'cover' }">
                        <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
            hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500
        ">
                            <!-- Eye Icon to Open Modal -->
                            <button @click="openModal(project)"
                                class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true"
                                    class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 3c6.627 0 12 4.5 12 9s-5.373 9-12 9-12-4.5-12-9 5.373-9 12-9zm0 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4">
                        <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title }}</h3>
                        <p class="text-[#ADB7BE]">
                            {{ project.description.length > 100 ? project.description.substring(0, 100) + '...' :
                                project.description }} <button @click="openModal(project)" class="text-primary">See
                                more</button>
                        </p>

                        <div class="flex flex-wrap p-2.5">
                            <div v-for="technology in project.technologies" :key="technology"
                                class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
                                style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                                <p class="px-1 py-2">{{ technology }}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </ul>
        </div>

        <!-- Modal -->

        <div v-if="modalProject" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div class="bg-white p-6 rounded-lg relative max-w-[90vw] max-h-[80vh] w-full z-50 overflow-hidden">

                <!-- Title Bar -->
                <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
                    <h3 class="text-2xl font-semibold text-black">{{ modalProject.title }}</h3>
                    <button @click="closeModal" class="text-3xl text-gray-600 sm:text-4xl md:text-5xl">x</button>
                </div>

                <!-- Modal Body -->
                <div class="flex flex-col sm:flex-row h-full">

                    <!-- Image Section -->
                    <div class="flex-shrink-0 w-full sm:w-1/3 sm:h-auto h-[25vh] bg-cover rounded-xl"
                        :style="{ backgroundImage: 'url(' + modalProject.image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }">
                    </div>

                    <!-- Description Section -->
                    <div class="mt-3 sm:mt-0 sm:ml-6 text-black flex-1 h-full">
                        <!-- Scrollable Description -->
                        <div class="overflow-y-auto sm:max-h-[70vh] max-h-[30vh]">
                            <p class="mt-2 text-sm text-justify indent-8 sm:text-base md:text-lg">{{
                                modalProject.description }}</p>
                        </div>

                        <!-- Footer - Technologies -->
                        <div class="flex flex-wrap mt-2 pt-1 border-t">
                            <div v-for="technology in modalProject.technologies" :key="technology"
                                class="text-center ml-1 mt-1 rounded-3xl bg-white text-black"
                                style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
                                <p class="px-1 py-2">{{ technology }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const Projects = ref([
    {
        id: 1,
        category: ['Web Development', 'Mobile App'],
        image: 'src/assets/project.png',
        title: 'PestMon Mobile and Web Application',
        description: 'Pests and diseases (P&D) pose a significant threat to banana farming, leading to major losses in both yield and quality globally. Traditional methods, such as paper-based case recording, often result in missed treatments, duplicated efforts, and delayed responses, making it difficult to manage outbreaks effectively. To solve these issues, I developed an innovative system at TADECO that includes a mobile app for real-time P&D case recording and treatment tracking, along with a web app for QR code management, lab test requests, and graphical reports with geotagging and a spatial map to visualize the severity of P&D cases across farms, from no cases to high severity. The system also features advanced forecasting powered by a Long Short-Term Memory (LSTM) model, which accurately predicts potential outbreaks. This solution streamlines reporting, reduces errors, and ensures timely treatments, helping TADECO’s farmers protect their crops and boost productivity.',
        technologies: ['vue.js 3', 'vuex', 'Express'],
        gitURL: '',
        webURL: ''
    },
    {
        id: 2,
        category: ['Web Development'],
        image: 'src/assets/mobile.jpg',
        title: 'Agricultural Information System',
        description: 'The Agriculture Information System (AIS) is a user-friendly web application developed in collaboration with my colleagues at TADECO to support banana plantations in achieving optimal productivity. AIS simplifies the management of key aspects of banana production, from planting to box preparation, by providing clear and detailed monitoring and reporting tools. It integrates data on banana health, weather conditions, and other critical parameters, presenting them through intuitive graphical and tabular visualizations that cover the entire 6,200-hectare area of TADECO’s plantation. These features empower TADECO’s decision-makers to make informed, data-driven decisions to effectively address challenges like fusarium wilt, sigatoka, field loss causes, and fruit waste—issues that have significantly impacted yields and caused the closure of many plantations across the Philippines. By addressing these challenges head-on, AIS has enabled TADECO to streamline reporting, reduce losses, and sustain its position as a leading global exporter in the banana industry, demonstrating its vital role in overcoming production obstacles and ensuring long-term success.',
        technologies: ['vue.js 3', 'vuex', 'Express'],
        gitURL: '',
        webURL: ''
    },
    {
        id: 3,
        category: ['Web Development'],
        image: 'src/assets/project.png',
        title: 'GeoGraphical Information System',
        description: 'The Geographical Information System (GIS) is an advanced web application developed in collaboration with my colleagues at TADECO to improve the management of banana plantations through precise geospatial data analysis. GIS provides a detailed map of TADECO’s plantation and its extensions, showing the spatial layout of the lots that make up the entire area. The system displays real-time data on the status of these lots based on selected parameters, helping decision-makers monitor plantation conditions, track interventions, and allocate resources effectively. By addressing critical challenges like Fusarium wilt, Sigatoka, and fruit waste, GIS has played a key role in enhancing operational efficiency, minimizing losses, and supporting TADECO"s leadership in the global banana industry. This tool is essential for overcoming geographical and operational challenges, ensuring sustainable plantation management, and driving long-term success.',
        technologies: ['vue.js 3', 'vuex', 'Express'],
        gitURL: '',
        webURL: ''
    }
]);

const selectedCategory = ref('all');
const modalProject = ref(null);

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return Projects.value;
    }
    return Projects.value.filter(project =>
        project.category.some(cat => cat.toLowerCase() === selectedCategory.value.toLowerCase())
    );
});

const openModal = (project) => {
    modalProject.value = project;
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modalProject.value = null;
    // Enable scrolling when modal is closed
    document.body.style.overflow = '';
};
</script>
