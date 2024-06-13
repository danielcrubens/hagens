<template>
  <section class="bg-gradient-to-r from-[#59337E] to-[#BF3F59] xl:pb-28">
    <Container class="pt-6">
      <div class="grid grid-cols-2 grid-rows-2 gap-4 pb-6 md:hidden"  data-aos="fade-up" data-aos-duration="1500">
        <div class="bg-white px-10 py-12 rounded flex flex-col justify-center items-center h-full w-full">
          <img src="assets/icons/icon1.svg" alt="Ícone">
          <p class="text-card">Lotes a partir de 000 m²</p>
          <small class="text-center">Residenciais e comerciais</small>
        </div>
        <div class="bg-white p-4 rounded flex flex-col justify-center items-center  w-full">
          <img src="assets/icons/icon2.svg" alt="Ícone">
          <p class="text-card">Lorem Ipsum e Lorem Ipsum</p>
        </div>
        <div class="bg-white p-4 rounded flex flex-col justify-center items-center  w-full">
          <img src="assets/icons/icon3.svg" alt="Ícone">
          <p class="text-card">Finibus Bonorum et Malorum</p>
        </div>
        <div class="bg-white p-4 rounded flex flex-col justify-center items-center  w-full">
          <img src="assets/icons/icon4.svg" alt="Ícone">
          <p class="text-card">Finibus Bonorum et Malorum</p>
        </div>
      </div>

      <div class="bg-white py-14 xl:py-6 rounded"data-aos="fade-up" data-aos-duration="1300">
        <h2 class="text-pink text-center font-normal text-[24px]">Lorem Ipsum is simply <strong
            class="block lg:hidden">dummy text</strong> of the printing and
          typesetting <strong class="block lg:hidden">industry.</strong></h2>
        <Form />
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 md:mt-36 mt-7"data-aos="fade-right" data-aos-duration="1500">
        <div class="">
          <div class="flex items-center gap-5">
            <div class="text-orange bg-orange h-10 w-1.5 ">|</div>
            <h2 class="text-title">Título Opt 1</h2>
          </div>
          <h3 class="text-white font-bold xl:text-[28px] text-[20px]">The standard chunk of Lorem Ipsum used since the
            1500s.</h3>
          <p class="text-white xl:py-7 py-4">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
            for those interested. </p>
          <p class="text-white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        </div>
        <div class="">
          <img class="w-auto xl:h-96 h-80 mx-auto xl:mx-0" src="/assets/images/Image1.png" alt="Imagem Família">
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 md:mt-36 mt-7"data-aos="fade-right" data-aos-duration="1500">
        <div class="order-first md:order-none">
          <div class="flex items-center gap-5">
            <div class="text-orange bg-orange h-10 w-1.5 ">|</div>
            <h2 class="text-title">Título Opt 2</h2>
          </div>
          <h3 class="text-white font-bold xl:text-[28px] text-[20px]">The standard chunk of Lorem Ipsum used since the
            1500s.</h3>
          <p class="text-white xl:py-7 py-4">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
            for those interested. </p>
          <p class="text-white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        </div>
        <div class="order-last md:order-first">
          <img class="w-auto xl:h-96 h-80 mx-auto xl:mx-0" src="/assets/images/Image2.png" alt="Imagem Família">
        </div>
      </div>
      <div class="flex justify-center py-6 mx-auto">
        <button type="submit"
          class=" lg:hidden  bg-orange px-12 text-white font-bold py-4 rounded hover:brightness-90 transition duration-300 focus:outline-none">Quero
          conhecer</button>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.text-title {
  @apply font-bold xl:text-[40px] text-[32px] text-white py-5;
}

.text-card {
  @apply font-bold text-purple text-center text-[14px] pt-2;
}
</style>