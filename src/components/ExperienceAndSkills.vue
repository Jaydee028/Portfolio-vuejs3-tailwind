<template>
    <section class="text-white mt-6" id="skills">
        <!-- <div class="absolute right-0 top-[163rem] h-full w-full justify-end z-0">
            <span class="flex opacity-20 z-0">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div> -->
        <div class="md:grid md:grid-cols-12 gap-8 items-start py-8 px-4 xl:gap-16 xl:px-16">

            <!-- Skills Section -->
            <div class="md:col-span-6 grid grid-cols-2 gap-6 md:gap-8" data-aos="flip-left">
                <!-- Skill Level Title -->
                <div class="col-span-2 mb-4">
                    <h2 class="text-4xl font-bold text-white text-left mb-4">
                        My
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
                    </h2>
                </div>

                <div v-for="skill in Skills" :key="skill.id" class="mt-1 flex flex-col items-start "> <!--space-y-1 -->
                    <!-- Skill Name -->
                    <h4 class="text-xl font-bold uppercase text-white">
                        {{ skill.name }}
                    </h4>
                    <!-- Stars for rating -->
                    <div class="flex items-center">
                        <span v-for="n in 5" :key="n" class="text-xl mr-1"
                            :class="n <= skill.rating ? 'text-yellow-500' : 'text-gray-500'">
                            ★
                        </span> <span class="pl-1 text-sm text-primary">
                            ({{ ratingLabel(skill.rating) }})
                        </span>
                    </div>
                    <!-- Display rating label -->

                </div>
            </div>

            <!-- Experiences Section -->
            <div class="md:col-span-6" data-aos="flip-left">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8">My Experiences</h2>
                <div class="space-y-8 py-8" data-aos="fade-left">
                    <div v-for="element in Experiences" :key="element.id"
                        class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]">
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer" />
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3
                                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                {{ element.role }}
                            </h3>
                            <p class="text-white">{{ element.company }}</p>
                            <p class="text-white">{{ element.date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 xl:px-16" data-aos="fade-up">
            <h2 class="text-4xl font-bold text-white text-left mb-8 mt-8 md:text-center md:mt-0">Budges</h2>
            <div class="bg-[#111a3e] py-10 sm:py-16">
                <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-2">
                    <div
                        class="mx-auto mt-2 grid max-w-lg grid-cols-4  gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 items-center">
                        <img v-for="tool in tools" :key="tool.id" :class="[
                            'col-span-2 max-h-12 w-full object-contain lg:col-span-1',
                        ]" :src="tool.loc" :alt="tool.description" width="158" height="48" />
                        <!-- class="mx-auto mt-2 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img v-for="(tool, index) in tools" :key="tool.id" :class="[
                            'col-span-2 max-h-12 w-full object-contain lg:col-span-1',
                            index === tools.length - 1 ? 'sm:col-start-2 col-start-2' : ''
                        ]" :src="tool.loc" :alt="tool.description" width="158" height="48" /> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

// Map skill ratings to labels
const ratingLabel = (rating) => {
    const labels = ["Beginner", "Novice", "Intermediate", "Proficient", "Expert"];
    return labels[rating - 1];
};

const Skills = ref([
    { id: 1, name: "Data Analysis", rating: 5 },
    { id: 2, name: "SQL Management", rating: 4 },
    { id: 3, name: "Front-End Dev", rating: 2 },
    { id: 4, name: "Back-End Dev", rating: 4 },
    { id: 5, name: "Advance Excel & VBA", rating: 5 },
]);

const Experiences = ref([
    {
        id: 1,
        role: "Data Analyst & Web Developer",
        company: "Tagum Agricultural Development Co., Inc.",
        date: `September 2019 - ${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getFullYear()}`,
    },
]);


const tools = ref([
    // { id: 1, loc: require('@/assets/sql-server-logo-white.png'), description: 'SQL Server' },
    { id: 2, loc: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg", description: "Reform" },
    { id: 3, loc: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg", description: "Tuple" },
    { id: 4, loc: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg", description: "SavvyCal" },
    { id: 5, loc: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg", description: "Statamic" },
]);
</script>
