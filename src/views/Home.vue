<template>
    <div class="schedule-box">
        <v-row class="schedule-row">
            <v-col v-for="(item, i) in schedule" :key="i" cols="12" lg="auto" md="4" sm="6" class="schedule-col">
                <schedule-item :data="item"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import ScheduleItem from "@/components/ScheduleItem";
export default {
    name: "Home",
    components: {ScheduleItem},
    data: () => ({
        formData: {
            token: 'wadgu29ufan2',
            password: 'testTask'
        },
        schedule: [],
    }),
    created() {},
    async mounted() {
        await this.getData();
    },
    methods: {
        async getData() {
            await this.$axios.post('/testTask', this.formData)
                .then(response => {
                    console.log(response.data);
                    this.setSchedule(response.data.schedule);
                    // console.log(this.schedule);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        setSchedule(schedule) {
            for (let item of schedule) {
                item.open = `0${item.open}`.substr(-5);
                item.close = `0${item.close}`.substr(-5);
                this.schedule.push(item);
            }
        },
    },
    computed: {},
}
</script>