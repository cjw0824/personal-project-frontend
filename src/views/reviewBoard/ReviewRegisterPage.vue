<template>
    <div>
        <NaviTest />
        <div style="padding-top: 90px">
            <template>
                <div class="card" style="width: 500px; margin: auto;">
                    <div class="card-body">
                        <h4 class="card-title">Review</h4>
                        <review-register-form @submit="onSubmit" :placeName="placeName" />
                    </div>
                </div>
            </template>
        </div>

    </div>
</template>
<script>
import NaviTest from '@/components/NaviTest.vue'
import ReviewRegisterForm from '@/components/reviewBoard/reviewRegisterForm.vue'

import { mapActions } from 'vuex';

const reviewModule = 'reviewModule'

export default {
    name: "ReviewRegisterPage",
    props: {
        placeName: {
            type: String,
            required: true
        }
    },
    components: {
        NaviTest,
        ReviewRegisterForm
    },
    methods: {
        ...mapActions(
            reviewModule, ['requestRegisterReviewBoardToSpring']
        ),
        async onSubmit(payload) {
            const { content, placeName, userEmail, starRating1, starRating2 } = payload
            await this.requestRegisterReviewBoardToSpring({ content, placeName, userEmail, starRating1, starRating2 })
        }
    },

}
</script>
<style></style>