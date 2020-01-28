<template>
    <div class="shadow w-full bg-gray-50">
        <div :style="'width:'+ widthProgress*100 +'%;'" :class="color" class="text-xs leading-none py-1 text-center text-white" >{{widthProgress*100}}%</div>
    </div>
</template>
<script>
export default {
    name : 'ProgressBar',
    props : {
        widthProgress : { 
            type : Number,
            required : true,
        },
        color : {
            type : String,
            required : true
        },
    },
    
}
</script>