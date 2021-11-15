<template>
    <div v-if="info" class="card">
        <div class="card__top-content">
            <div class="card__container-image">
                <img class="card__img" :src="info.image" :alt="info.name+'-image'">
            </div>
            <div class="card__top-info">
                <div class="card__name">
                    <h3>{{info.name}}</h3>
                </div>
                <div class="card__price">
                    <h4>${{info.suggested_budget}}</h4>
                </div>
            </div>
        </div>

        <div class="card__description">
            <p>{{info.description}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        info:{
            type:Object,
            required:true
        }
    }
}
/*categories_vendors: []
category_type: 1
color: "#6A35FF"
create_at: "2021-07-26T08:12:00-05:00"
description: null
description_eng: null
father_category: null
home_office: 0
id: 33
image: "https://resources.plerk.io/category/plerk_E6DEFF.png"
name: "Plerk"
name_eng: "Plerk"
suggested_budget: "0.0"
updated_at: "2021-07-26T08:12:00-05:00"
uuid4: "dbebbc08-57e7-43be-9571-201c86632ccc"
valid_for_services: false
vendors: []*/
</script>

