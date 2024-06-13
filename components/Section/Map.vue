<template>
  <section class="py-8  bg-[#F8F8F8]">
    <Container>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8"  data-aos="fade-right" data-aos-duration="1500">
        <div class="">
          <div class="flex items-center gap-5">
          <div class="text-orange bg-orange xl:h-16 h-28 w-1.5 ">|</div>
           <h2 class="font-bold text-[28px] text-pink py-5 leading-none">Lorem Ipsum is simply dummy text of the printing.</h2>
          </div>
          <p class="text-black py-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
          <p class="text-black xl:font-bold py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          <div class="md:hidden">
          <img class="w-auto h-auto mt-7" src="assets/images/Map.png" alt="Map">
        </div>
          <button type="submit" class=" flex items-center justify-start bg-[#05C8F7] px-6 xl:my-3 my-10  xl:mx-0 text-black font-bold py-2 rounded hover:brightness-90 transition duration-300 focus:outline-none">
            <img src="assets/icons/waze.svg" alt="">Ir com Waze
          </button>
        </div>
        <div class="hidden md:block">
          <img class="w-auto h-auto" src="assets/images/Map.png" alt="Map">
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-4 lg:gap-8 pt-6" data-aos="fade-right" data-aos-duration="1500">
        <p class="flex"><MapPin color="#810059" /><span class="text-map">Lorem Ipsum</span> 18,6 km</p>
        <p class="flex"><MapPin color="#810059" /><span class="text-map">Lorem Ipsum</span> 32,6 km</p>
        <p class="flex"><MapPin color="#810059" /><span class="text-map">Lorem Ipsum</span> 45 km</p>
        <p class="flex"><MapPin color="#810059" /><span class="text-map">Lorem Ipsum</span> 56,2 km</p>
        </div>
    </Container>
  </section>
</template>
 <style scoped>
.text-map{
  @apply text-pink font-bold mr-2 ;
}
</style>
<script setup>
  import { MapPin } from 'lucide-vue-next';
</script>
