<template>
    <div class="main">
        <div class="calendar-holder">
            <full-calendar :events="events" />
        </div>
        <div class="form-holder">
            <h3>Schedule an event</h3>
            <new-event />
        </div>
    </div>
</template>

<script>
    import FullCalendar from 'vue-fullcalendar';
    export default {
        name: 'Calendar',
        components: {
            FullCalendar
        },
        data(){
            return {
                events: [],
            }
        },
        created() {
            let token = localStorage.getItem('jwt')
            axios.defaults.headers.common['Content-Type'] = 'application/json';
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            this.getEvents();
        },
        methods: {
            getEvents() {
                axios.get('api/event').then(response => {
                    if(Object.keys(response.data).length === 0)
                        delete this.events;
                    else {
                        this.events = response.data;
                    }
                });
            }
        }
    }
</script>

<style>
    .red {
        background: rgb(235, 77, 77) !important;
        color: whitesmoke !important;
    }
    .blue {
        background: rgb(59, 59, 163) !important;
        color: whitesmoke !important;
    }
    .orange {
        background: orange !important;
        color: white !important;
    }
    .green {
        background: rgb(49, 155, 49) !important;
        color: white !important;
    }
    .blue,
    .orange,
    .red,
    .green {
        font-size: 13px;
        font-weight: 500;
        text-transform: capitalize;
    }
    .event-item {
        padding: 2px 0 2px 4px !important;
    }
    .main {
        display: flex;
        align-items: center;
    }
    .calendar-holder {
        width: 65%;
    }
    .form-holder {
        width: 35%;
    }
    .form-holder > h3 {
        color: orangered;
        text-transform: uppercase;
        font-size: 16px;
        text-align: left;
        margin-left: 30px;
        margin-bottom: 10px;
    }
</style>