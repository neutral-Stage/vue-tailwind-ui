<template>
  <div>
    <div class="shadow-inner-sm bg-purple-300 rounded-md p-6 my-4">
      shadow-inner-xl
    </div>
    <div class="shadow-cute bg-purple-300 rounded-md p-6 my-4">shadow-cute</div>
    <div class="shadow-cute bg-red-300 rounded-md p-6 my-4">shadow-cute</div>
    <div class="bg-purple-500 rounded-lg my-2">
      <button class="inset-text-shadow bg-purple-800 p-4">byr byr</button>
    </div>
    <div class="bg-red-500 rounded-lg my-2">
      <button class="inset-text-shadow-red bg-red-800 p-4">byr byr</button>
    </div>
    <h1 class="inset-text">Inset text-shadow trick</h1>
  </div>
</template>
<style lang="css" scoped>
div {
  /* This has to be same as the text-shadows below */
  background: #def;
}
h1 {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 5em;
  line-height: 1em;
}
.inset-text {
  /* Shadows are visible under slightly transparent text color */
  color: rgba(91, 33, 182, 0.5);
  text-shadow: 1px 4px 6px #def, 0 0 0 #000, 1px 4px 6px #def;
}
/* Don't show shadows when selecting text */
::-moz-selection {
  background: #5af;
  color: #fff;
  text-shadow: none;
}
::selection {
  background: #5af;
  color: #fff;
  text-shadow: none;
}

.inset-text-shadow {
  font: bold 80px arial, sans-serif;
  color: transparent;
  text-shadow: 2px 2px 3px rgba(196, 181, 253, 0.3);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}
.inset-text-shadow-red {
  font: bold 80px arial, sans-serif;
  color: transparent;
  text-shadow: 2px 2px 3px rgba(252, 165, 165, 0.3);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}
</style>