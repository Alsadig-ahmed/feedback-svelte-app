import { writable } from "svelte/store";

export let feedback = writable([
  {
    id: Math.random() * 1000,
    rating: 10,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit tenetur aliquam ad dolore incidunt ipsam doloremque quibusdam eum? Modi, nemo?",
  },
  {
    id: Math.random() * 1000,
    rating: 6,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit tenetur aliquam ad dolore incidunt ipsam doloremque quibusdam eum? Modi, nemo?",
  },
  {
    id: Math.random() * 1000,
    rating: 4,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit tenetur aliquam ad dolore incidunt ipsam doloremque quibusdam eum? Modi, nemo?",
  },
  {
    id: Math.random() * 1000,
    rating: 7,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit tenetur aliquam ad dolore incidunt ipsam doloremque quibusdam eum? Modi, nemo?",
  },
  {
    id: Math.random() * 1000,
    rating: 9,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit tenetur aliquam ad dolore incidunt ipsam doloremque quibusdam eum? Modi, nemo?",
  },
]);
