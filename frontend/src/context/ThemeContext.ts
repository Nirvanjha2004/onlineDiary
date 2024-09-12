import { createContext } from "react";


// Create a context with an initial value of undefined (or a default theme)
const ThemeContext = createContext({
  themeCon: "red",
  setThemeCon: (themeCon:string) => {},
});
  
  export default ThemeContext;