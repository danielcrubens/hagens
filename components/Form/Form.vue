<template>
  <div class="px-6 mt-6">
    <div class="grid grid-cols-4 gap-5 mb-1 hidden lg:grid"> <label class="label-text">Nome</label>
      <label class="label-text">E-mail</label>
      <label class="label-text">Celular</label>
      <label class="label-text">Como prefere ser contatado?</label>
    </div>
    <div class="flex lg:flex-row flex-col xl:justify-between xl:items-center gap-x-3 gap-y-0 xl:mb-4">
      <label class="label-text text-left lg:hidden">Nome</label>
      <input type="text"
        class="placeholder-neutral-400 text-[14px] w-full rounded px-2 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange mb-4 xl:mb-0"
        placeholder="Digite seu nome">
      <label class="label-text text-left lg:hidden">E-mail</label>
      <input type="text"
        class="neutral-400 text-[14px] w-full rounded px-2 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange mb-4 xl:mb-0"
        placeholder="exempplo@email.com.br">
      <label class="label-text text-left lg:hidden">Celular</label>
      <input type="text"
        class="neutral-400 text-[14px] w-full rounded px-2 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange mb-4 xl:mb-0"
        placeholder="(00)00000.0000">
      <label class="label-text text-left lg:hidden">Como prefere ser contatado?</label>
      <select type="text"
        class=" text-neutral-400 text-[14px] w-full rounded px-2 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange mb-4 xl:mb-0">
        <!-- appearance-none -->
        <option selected class="rounded">Selecione a melhor opção</option>
        <option value="option1" class="rounded">Celular</option>
        <option value="option2" class="rounded">WhatsApp</option>
      </select>
    </div>
    <div class="flex flex-col sm:flex-row items-center md:justify-between gap-y-7">
      <div class="flex items-center mb-2 sm:mb-0"> 
        <input type="radio" id="option1" name="radioGroup"class="accent-orange" value="1">
        <label for="option1" class="text-radius mr-4">Lorem Ipsum is simply dummy</label>
      </div>
      <div class="flex items-center"> 
        <input type="radio" id="option2" name="radioGroup"class="rounded accent-orange" value="2">
        <label for="option2" class="text-radius">Lorem Ipsum is simply dummy</label>
      </div>
      <button type="submit"
        class="xl:ml-auto bg-orange px-[5.5rem] text-white font-bold py-3 xl:py-2 rounded hover:brightness-90 transition duration-300 focus:outline-none">Enviar</button>
    </div>
  </div>
</template>

<style scoped>
.label-text {
  @apply text-[14px] text-black;
}

.text-radius {
  @apply text-[13px];
}
</style>

<!-- <script setup>
import { ChevronDown } from 'lucide-vue-next';
</script> -->
