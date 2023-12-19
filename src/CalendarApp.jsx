import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

const CalendarApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default CalendarApp