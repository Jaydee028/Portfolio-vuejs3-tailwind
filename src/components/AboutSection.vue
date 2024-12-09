<template >
    <section class="text-white mt-0" id="about">
        <div class="absolute z-0 top-[130rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-2 px-4 xl:gap-10 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-left mb-2">My Education</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                        class="flex items-center md:w-[90%] w-full py-2 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                        <div class="w-[20%]">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                                alt="graduation-cap--v1" class="mx-auto">
                        </div>
                        <div class="w-[80%] pl-3">
                            <h3
                                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                                {{ element.School }}
                            </h3>
                            <p class="text-white font-bold">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                            <p class="text-white">{{ element.gwa }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-0">More
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About</span>
                    Me
                </h2>
                <p class="text-base text-justify lg:text-lg mt-8 indent-8">
                    I am a dedicated professional with a strong passion for transforming complex data into meaningful
                    insights that drive effective decision-making. My analytical thinking allows me to break down detailed
                    problems into manageable solutions, ensuring clarity and efficiency in every project I undertake.
                </p>
                <p class="text-base text-justify lg:text-lg indent-8">
                    Beyond my work in data analysis and programming, I am deeply committed to continuous learning, staying
                    updated on the latest innovations in technology, and embracing opportunities to grow both personally and
                    professionally.
                </p>
                <p class="text-base text-justify lg:text-lg indent-8">
                    In my free time, I enjoy riding my motorcycle and have developed a keen interest in repairing and
                    maintaining it myself. This hobby not only fuels my love for the open road but also mirrors my passion
                    for hands-on problem-solving and understanding how systems work—whether in technology or on two wheels.
                </p>
                <!-- <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">+200</h3>
                        <p class="text-sm sm:text-base text-gray-300">Happy Client</p>
                    </div>
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">+10</h3>
                        <p class="text-sm sm:text-base text-gray-300">Project</p>
                    </div>

                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">+5</h3>
                        <p class="text-sm sm:text-base text-gray-300"> Years Experience</p>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const education = ref([
    {
        id: 1,
        program: 'Master in Information Technology',
        School: 'Davao del Norte State College',
        year: 'School Year: 2022-2024',
        gwa: 'GWA: 1.35'
    },
    {
        id: 2,
        program: 'B.S. in Information Technology',
        School: 'University of Southeastern Philippines',
        year: 'School Year: 2022-2024',
        gwa: 'GWA: 1.94'
    }
])
</script>
