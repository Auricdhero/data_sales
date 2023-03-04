<!-- <script setup>
import { ref, onMounted } from 'vue'
import  supabase  from 'supabase'

const reports = ref([])

async function getCountries() {

    let { data: reports, error } = await supabase
        .from('reports')
        .select('*')
    reports.value = data
    console.log("reports", reports);
}

onMounted(() => {
    getCountries()
})

</script> -->
<!-- //     < ul >
//     <li v-for="report in reports" : key="report.id">{{ report.name }}</li>
// </ul > <ul>
//     <li v-for="report in reports" :key="country.id">{{ report.name }}</li>
//   </ul >
// </template > -->
