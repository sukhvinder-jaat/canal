<script>
import Cash from "../icons/Cash.vue";
import Remittance from "../icons/Remittance.vue";

import Card from "../icons/Card.vue";
export const navOptions = [
  { link: "Product", path: "#swimming" },
  { link: "Mission", path: "#fighting" },
];
export const fightingCurrent = [
  { icon: Cash, title: "Check Cashing", fee: "4.5-9.9% Fee" },
  { icon: Remittance, title: "Remittance", fee: "4.-11.5% Fee" },
  { icon: Card, title: "Prepaid Card Reload", fee: "4.-11.5% Fee" },
];
</script>
