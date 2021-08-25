import Profile from "@templates/Profile.js";
import "@styles/main.css";

export default async function App() {
  return /*html*/ `
    ${await Profile()}
  `;
}
