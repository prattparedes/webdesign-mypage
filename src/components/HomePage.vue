<template>
  <div>
    <NavBar :gotosection="goToSection"/>
    <PageTitle :gotosection="goToSection"/>
    <CoreFeatures />
    <div id="demos">
      <DemosComp />
    </div>
    <div id="pricing">
      <PricingComp />
    </div>
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import PageTitle from "./PageTitle.vue";
import PricingComp from "./PricingComp.vue";
import DemosComp from "./DemosComp.vue";
import CoreFeatures from "./CoreFeatures.vue";


function goToSection(id) {
    document.getElementById(id).scrollIntoView()
}

</script>

<style lang="scss" scoped></style>
