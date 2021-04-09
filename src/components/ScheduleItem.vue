<template>
    <div class="schedule-item">
        <div class="schedule-header">
            <div class="toggle-btn-box">
                <my-switch v-model="data.working" name="working" label="Mon"/>
            </div>
        </div>
        <div v-if="data.working"  class="schedule-body">
            <div class="schedule-start pb-3">
                <p class="title mb-2">Czas otwarcia</p>
                <div class="time-picker">
                    <label class="label">
                        <input v-model="data.open" v-mask="timeMask" type="text" name="open">
                        <svg class="icon"><use xlink:href="../assets/icons/svg-icons.svg#icon_data_picker_arrows"></use></svg>
                    </label>
                </div>
            </div>
            <div class="schedule-residue">
                <p v-if="!isNaN(residueTime.h)" class="residue mb-0">
                    <span>{{ residueTime.h }} godz.</span>
                    <span v-if="residueTime.m > 0">{{ residueTime.m }} minuty</span>
                </p>
            </div>
            <div class="schedule-end pt-3">
                <div class="time-picker">
                    <label class="label">
                        <input v-model="data.close" v-mask="timeMask" type="text" name="open">
                        <svg class="icon"><use xlink:href="../assets/icons/svg-icons.svg#icon_data_picker_arrows"></use></svg>
                    </label>
                </div>
                <p class="title mt-2 mb-2">Czas otwarcia</p>
            </div>
        </div>
        <div v-else  class="schedule-body disabled">
            <p class=" mb-0">
                <img src="../assets/icons/emoji-1.svg" alt="" height="30">
                <span class="ml-2">Dzień wolny</span>
            </p>
        </div>
    </div>
</template>

<script>
function timeMask(value) {
    let hours = [/[0-2]/, value.charAt(0) === '2' ? /[0-3]/ : /[0-9]/,], minutes = [/[0-5]/, /[0-9]/];
    return value.length > 2 ? [...hours, ':', ...minutes] : hours;
}
export default {
    name: "ScheduleItem",
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    data: () => ({
        timeMask: timeMask,
    }),
    created() {},
    mounted() {},
    methods: {},
    computed: {
        residueTime() {
            let open_date = new Date(), close_date = new Date();
            let open_str = this.data.open.split(':'), close_str = this.data.close.split(':');
            open_date.setHours(open_str[0]);
            open_date.setMinutes(open_str[1]);
            close_date.setHours(close_str[0]);
            close_date.setMinutes(close_str[1]);
            if (close_date < open_date) close_date.setDate(close_date.getDate() + 1);
            let h = Math.floor((close_date - open_date) / 1000 / 60 / 60);
            let m = Math.floor((close_date - open_date) / 1000 / 60) - h * 60;
            return {h, m};
        },
    },
}
</script>